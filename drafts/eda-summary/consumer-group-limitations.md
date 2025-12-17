# Limitations Consumer Group – Détails et Explications

## Scope fonctionnel et isolation

### Deux CG ne doivent pas faire la même chose sur les mêmes partitions
Un consumer group représente une application ou un service métier spécifique. Si deux CG identiques consomment le mêmes données, vous doublez le traitement, la charge réseau, et risquez des incohérences métier. Chaque CG doit avoir un rôle distinct (ex: CG "analytics" vs CG "alerts").

## Parallélisme et throughput

### Parallélisme max = nombre de partitions
Si vous avez 3 partitions et 10 consumers dans un CG, seuls 3 consumers traiteront des données ; les 7 autres resteront inactifs. Le parallelisme est plafonnée par l'architecture des partitions, pas par le nombre de consumers.

### 1 partition = 1 consumer actif par CG
Un consumer ne peut être assigné qu'à une partition à la fois (dans un CG). Deux consumers du même CG ne peuvent jamais traiter la même partition simultanément. Cette contrainte garantit l'ordre et évite les doublons au niveau partition.

### Partitions "hot" → déséquilibre et scaling non-linéaire
Si certaines partitions reçoivent plus d'événements que d'autres, les consumers assignés à ces partitions "chaudes" travaillent plus. Le scaling ne sera jamais linéaire : ajouter des consumers sur des partitions froides n'aide pas.

## Ordre et garanties

### Ordre garanti uniquement à l'intérieur d'une partition
L'ordre global des événements n'est pas garanti si vous avez plusieurs partitions. Chaque partition maintient son ordre indépendamment. Si l'ordre global est critique, utilisez une seule partition (au détriment du throughput).

### Ajouter des partitions change la distribution des clés → reordering potentiel
Si vous augmentez le nombre de partitions, la fonction de hachage `hash(key) % num_partitions` change. Les événements avec la même clé peuvent migrer vers d'autres partitions, cassant l'ordre pour les traitements déjà en cours.

## Gestion des offsets et relecture

### Offsets expirent si consommateur trop lent → perte de relecture
Les événements sont conservés un temps limité (retention, ex: 7 jours). Si un consumer s'arrête ou traite très lentement, les offsets anciens deviennent inaccessibles. Il ne pourra plus rejouer l'historique passé.

### Commit d'offset trop tôt/trop tard → perte ou doublon
Si vous commencez l'offset avant traitement, un crash laisse l'événement non traité → perte. Si vous commitez après trop de délai, un rebalancing peut rejouer l'événement → doublon. La timing est critique.

### Rebalancing = pauses + doublons possibles
Lors d'un rebalancing (ajout/suppression de consumer), le broker arrête temporairement la consommation. Les offsets non commitées peuvent être rejoués. L'idempotence côté application est obligatoire pour tolérer les doublons.

## Scalabilité et charge

### Fan-out via plusieurs CG = charge broker multipliée
Chaque consumer group maintient ses propres offsets et lit les partitions indépendamment. Avec N CG, la charge disque et réseau du broker est multipliée par N. Attention aux nombreux CG inactifs.

### Taille max message/lot limitée → chunking ou compression nécessaires
Les brokers limitent la taille max par message (ex: 1 MB). Les lots massifs doivent être compressés ou partitionnés. Pas de support natif des messages "infinis".

## Traitements applicatifs

### Traitements longs bloquent la partition
Si un consumer met 10 secondes à traiter un événement, la partition entière est bloquée pour ce CG. Les événements suivants attendent. L'I/O long doit être externalisé ou parallélisé côté application.

### Exactly-once rare → at-least-once par défaut
La plupart des brokers garantissent "at-least-once" : un événement peut être livré plusieurs fois. Exactly-once est coûteux en performance. L'application doit implémenter l'idempotence.

### Prefetch/lot mal réglés → mémoire/latence ou débit dégradés
Trop de prefetch → consommation mémoire élevée et risque de timeout. Peu de prefetch → mauvais throughput. Il faut équilibrer.

## Évolution et compatibilité

### Schémas qui évoluent sans compatibilité → consommateurs cassés
Si le producteur change le format des événements sans versioning, les vieux consumers ne peuvent plus parser les données. Versionner les schémas est obligatoire.

### Pas de DLQ/poison queue → blocage de partition
Un message non traitable (format invalide, erreur métier non gérée) bloque la partition entière si pas de mécanisme d'isolation. Les DLQ (Dead Letter Queue) ou retry topics sont nécessaires.

## Gestion des consumers

### Rebalancing instable avec ajouts/suppressions fréquents
Ajouter/retirer des consumers déclenche des rebalancings qui pausent la consommation. Des rebalancings trop fréquents dégradent le throughput global. Stabiliser la topologie des consumers.

### Partager un même group.id entre applis → offsets mélangés
Si deux applications utilisent le même group.id, leurs offsets interfèrent : une app avance et l'autre consomme depuis un offset "incorrect". Chaque application doit avoir son propre group.id.

## Topologie multi-région/zone

### CG multi-région/zone → latence et coûts réseau
Si consumers et broker sont dans des régions différentes, la latence réseau s'ajoute. Chaque fetch/commit traverse le réseau. Les coûts de bande passante cross-AZ/cross-région explosent.

## Récapitulatif clé

| Aspect | Impact |
| --- | --- |
| Isolation fonctionnelle | Chaque CG = un use case distinct |
| Parallélisme | Limité au nombre de partitions |
| Ordre | Garanti par partition uniquement |
| Idempotence | Obligatoire (rebalancing, doublons) |
| Schéma | Versioning obligatoire |
| DLQ | Essentiel pour fiabilité |
| Rebalancing | À minimiser, coûteux en pause |
| Performance | Traitements courts et asynchrones |
