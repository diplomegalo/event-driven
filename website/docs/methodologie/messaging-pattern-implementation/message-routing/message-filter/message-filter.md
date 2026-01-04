---
title: Message Filter
description: Pattern de filtrage de messages dans les systèmes de messagerie asynchrone
draft: true
---

## Objectif

Le **Message Filter** permet de filtrer les messages en fonction de critères spécifiques, en acceptant certains messages et en rejetant d'autres. L'objectif est de **réduire le bruit** dans un flux de messages en éliminant ceux qui ne sont pas pertinents pour un destinataire donné, sans créer de nouvelles queues ou canaux dédiés.

Contrairement au Content-Based Router qui **dirige** les messages vers différentes destinations, le _message filter_ **accepte ou refuse** un message selon des conditions. C'est une forme de tamisage qui améliore l'efficacité en évitant de traiter les messages non pertinents et en réduisant la charge des systèmes en aval.

## Ce qu'il résout

1. **Surcharge des traitements** - Éviter que les systèmes en aval traitent des messages non pertinents (coûteux en CPU, mémoire, stockage)
2. **Réduction du bruit** - Éliminer les événements obsolètes, dupliqués ou hors contexte d'un destinataire spécifique
3. **Éviter la prolifération de canaux** - Au lieu de créer une queue par type de consommateur, on utilise un seul canal avec des filtres
4. **Consommation sélective** - Un système ne traite que ce qui le concerne vraiment

:::note Prolifération des canaux
L'implémentation de filtre pour éviter la prolifération des canaux est dépendante des capacités et du design du message broker utilisé. Le _message filter_ tant en faite à permettre une gestion flexible, déclarative et centralisée des règles de filtrage, ce qui dans certains cas se traduit par une augmentation du nombre de queues, mais de manière gérée et optimisée limitant la complexité de gestion.
:::

:::tip Coûts infrastructure

En gagnant en performance côté consommateurs (qui ne traitent plus les messages inutiles), on **perd de l'autre côté** en charge sur le message broker. Le tri qui n'était pas fait dans les consommateurs est désormais effectué dans le broker, la collection de filtres peut vite devenir énorme et complexe, et cela impacte directement les coûts infrastructure (CPU, mémoire, bande passante du broker).

**Il est donc impératif de discuter avec les équipes d'infrastructure** pour valider que le broker peut supporter la charge additionnelle, mesurer l'impact réel sur les coûts, mettre en place du monitoring sur les règles de filtrage, et évaluer un équilibre entre filtrage au niveau broker vs. au niveau consommateur selon le contexte.
:::

## Anti-patterns : quand ne pas l'utiliser

Un message filtré disparaît sans trace. Cela peut entraîner l'oubli de cas métier importants si les règles de filtrage ne sont pas correctement définies. Pour éviter ce piège, il faut avant tout bien comprendre ce que ne fait pas le _message filter_.

**Le _message filter_ ne sert pas à distribuer les messages** vers différentes destinations. Il ne fait que décider si un message doit être traité ou ignoré par un consommateur donné. Pour illustrer cette contrainte prenons deux exemples :

### Exemple 1 : Traitement des demandes de support urgentes

Mon métier est de traiter des demandes de supports. Certaines demandes sont taguées comme urgente. Je souhaite traiter les demandes urgentes de manière différentes. En effet, je veux que lors de la réception d'une demande urgente, une notification soit envoyée immédiatement. Pour réaliser cela, je vais utiliser le pattern _message filter_ pour filtrer les demandes qui ont un attribut `urgent=true` et les livrer au consomateur qui traite les notification.

✅ Le _message filter_ permet de livrer uniquement les messages urgents au consommateur qui lance les notifications. Par défaut, tous les autre messages (non urgents) sont ignorés par ce consommateur et c'est ce que le métier veut.

#### Exemple 2 : Distribution des demandes de support par langue

Mon métier est de traiter des demandes de supports. Certaines demandes sont en français, d'autres en anglais. Je souhaite que les demandes en français soient traitées par l'équipe francophone et les demandes en anglais par l'équipe anglophone. Pour réaliser cela, je vais utiliser le pattern _message filter_ pour filtrer les demandes qui ont un attribut `lang=fr` et les livrer au consommateur de l'équipe francophone, et faire de même pour l'équipe anglophone.

✅ Le message filter permet de livrer uniquement les messages en français à l'équipe francophone et uniquement les messages en anglais à l'équipe anglophone. Par défaut, tous les autre messages (non français ou non anglais).

❌ Cependant, si une demande arrive dans une langue qui ne respecte pas ces critères, elle sera ignorée par les deux équipes sans qu'aucun traitement ne soit effectué. Cela peut poser problème si le métier souhaite que toutes les demandes soient traitées.

#### Exemple 3 : Distribution des demandes pour répartir la charge

Mon métier est de traiter des demandes de supports. Je souhaite répartir la charge de travail entre plusieurs applications de traitement pour répartir la charge. Pour réaliser cela, je vais utiliser le pattern _message filter_ pour filtrer les demandes selon un critère de répartition arbitraire basé sur un attribut.

❌ Le _message filter_ ne permet pas de répartir les messages entre plusieurs consommateurs de manière équilibrée. En outre, les conditions de filtrage peuvent être incomplètes, ce qui peut entraîner la perte de messages si aucun filtre ne correspond.

#### Conclusion

On observe bien avec ces exemples que le _message filter_ ne doit pas être utilisé pour distribuer les messages vers différentes destinations. Son rôle est uniquement de décider si un message doit envoyé ou pas à un consommateur donné. Il est donc cruciale de bien prendre en compte cette contrainte lors de la conception.

Si l'objectif est de distribuer les messages vers différentes destinations, il faut plutôt utiliser un pattern de routage comme le _Content-Based Router_, le _Dynamic Router_ ou la _Recipient List_ selon le besoin métier.
