| Problématique EDA | Description (1 ligne) | Fonctionnalité Event Broker | Fonctionnalité Message Broker | Traitement applicatif / Connecteurs |
| --- | --- | --- | --- | --- |
| Scalabilité des consommateurs | Plusieurs applications doivent consommer le même flux indépendamment | Consumer Group (Event Hub, Kafka) | Subscriptions (Service Bus) | Azure Functions, Stream Analytics, Kafka Streams |
| Parallélisme de consommation | Traiter un flux en parallèle sans perdre l'ordre métier | Partitions (Event Hub, Kafka) | Shards (Service Bus) | Event Hub SDK, Kafka consumer |
| Ordre métier garanti | Les événements doivent être traités dans l'ordre d'une clé métier | Ordering par partition key (Event Hub, Kafka) | Ordering par session key (Service Bus) | Clé métier (UserId, CaseId) |
| Relecture du flux | Rejouer l'historique pour correction ou recalcul | Offsets / retention (Event Hub, Kafka) | ⚠️ Limité (Service Bus) | Reprocessing batch, Functions, Spark |
| Reprise après incident | Reprendre là où le consommateur s'est arrêté | Checkpoint / offset par consumer group (Event Hub, Kafka) | Checkpoint (Service Bus) | Azure Functions checkpointing |
| Pic de charge | Absorber des bursts sans perdre d'événements | Bufferisation + retention (Event Hub, Kafka) | Bufferisation (Service Bus) | Scale-out Functions / Stream Analytics |
| Découplage producteurs / consommateurs | Ajouter ou supprimer un consommateur sans impacter les autres | Pub/Sub via topic + retention (Event Hub, Kafka) | Pub/Sub via topic + subscriptions (Service Bus) | Event Hub, Kafka, Service Bus |
| Traitement temps réel | Réagir quasi immédiatement à un événement | Streaming (Event Hub, Kafka) | Messaging (Service Bus) | Azure Functions, Kafka Streams |
| Traitement par fenêtre temporelle | Calculer des agrégats sur une période (ex: 5 min) | ❌ (pas broker) | ❌ (pas broker) | Stream Analytics, Spark Structured Streaming |
| Gestion des événements tardifs | Les événements arrivent hors délai | ❌ (pas broker) | ❌ (pas broker) | Stream Analytics |
| Agrégation temporelle | Compter, sommer, moyenner sur un flux | ❌ (pas broker) | ❌ (pas broker) | Stream Analytics |
| Tolérance aux doublons | Un événement peut être traité plusieurs fois | At-least-once delivery (Event Hub, Kafka) | At-least-once delivery (Service Bus) | Idempotence côté consumer |
| Erreurs non traitables | Isoler les messages bloquants | Topic secondaire (Event Hub, Kafka) | DLQ native (Service Bus) | Service Bus DLQ, topic secondaire |
| Évolution du contrat | Le modèle d'événement évolue dans le temps | ❌ (pas broker) | ❌ (pas broker) | Schema Registry, compatibilité |
| Intégration on-prem | Connecter des systèmes legacy | Kafka Connect, Debezium | ❌ (pas broker) | Kafka Connect, Debezium |
| Capture de changements BDD | Publier les changements sans poller | CDC (Event Hub, Kafka) | ❌ (pas broker) | Debezium, SQL Server CDC |
| Transformation légère | Adapter un format sans logique métier | SMT Debezium (Kafka) | ❌ (pas broker) | SMT Debezium, Stream Analytics |
| Transformation métier | Appliquer une logique métier complexe | ❌ (pas broker) | ❌ (pas broker) | Functions, Kafka Streams |
| Séparation commande / événement | Ne pas piloter un flux par événement | Topic distinct (Event Hub, Kafka) | Queue distinct (Service Bus) | Service Bus (commands) |
| Observabilité du flux | Comprendre ce qui se passe dans le temps | Metrics / lag / offsets (Event Hub, Kafka) | Metrics (Service Bus) | Azure Monitor, App Insights |

Points ultra-importants à dire à l’oral


Consumer Group = indépendance fonctionnelle, pas parallélisme


Partition = parallélisme + ordering, pas cohérence globale


Windowing & watermark = problématiques temps, jamais purement broker


Le broker transporte, l’app raisonne


Debezium transforme structurellement, pas métier



Raccourci mental (recruteur friendly)

“L’event broker gère le temps, l’ordre, la distribution et la reprise.
La logique métier, l’agrégation et la décision restent toujours côté traitement applicatif.”

Si tu veux, prochaine étape possible :


une carte mentale Event Hub vs Service Bus vs Kafka


ou un schéma unique producteur → Event Hub → consumer groups → traitements (idéal entretien).



## Comparaison Event Hub vs Kafka vs Service Bus (ASB) vs Event Grid

| Critère | Event Hub | Kafka | Service Bus | Event Grid |
| --- | --- | --- | --- | --- |
| **Type** | Event Broker | Event Broker | Message Broker | Event Router |
| **Débit** | 1M+ evt/sec | 1M+ evt/sec | 100K msg/sec | Milliers evt/sec |
| **Latence** | ~1ms | ~10ms | ~100ms | ~100ms |
| **Retention** | 24h à 7j configurable | Configurable (durée/taille) | Configurable (durée) | ❌ Aucune (livraison immédiate) |
| **Replay** | ✅ Oui (offset) | ✅ Oui (offset) | ⚠️ Limité (requeue) | ❌ Non |
| **Consumer Group** | ✅ Oui | ✅ Oui | ✅ Subscriptions | ❌ Non |
| **Partitions** | ✅ Oui | ✅ Oui | ✅ Shards | ❌ Non |
| **Ordering** | ✅ Par partition key | ✅ Par partition key | ✅ Par session key | ❌ Pas d'ordre |
| **Dead Letter** | Topic secondaire | Topic secondaire | ✅ DLQ native | ⚠️ Retry limité |
| **Cas d'usage** | Streaming haute charge, temps réel | Streaming, CDC, intégrations | Commandes, workflows, découplement léger | Notifications réactives légères (webhooks, functions) |
| **Écosystème** | Azure natif | Open-source riche | Azure natif | Azure natif |

## Raccourci mental (recruteur friendly)

> "L'event broker gère le temps, l'ordre, la distribution et la reprise. La logique métier, l'agrégation et la décision restent toujours côté traitement applicatif."

