# Enterprise Integration Patterns  
## Synthèse structurée selon Hohpe & Woolf

---

## 1. Messaging Systems

| Pattern | Description | Problème adressé |
|-------|-------------|------------------|
| Message | Unité atomique d’échange (payload + headers) | Découpler producteurs et consommateurs |
| Message Channel | Canal par lequel transitent les messages | Communication asynchrone |
| Message Endpoint | Point d’accès applicatif au messaging | Connexion application ↔ messaging |

---

## 2. Message Channels

| Pattern | Description | Problème adressé |
|-------|-------------|------------------|
| Point-to-Point Channel | Un message consommé par un seul consommateur | Exclusivité, load balancing |
| Publish–Subscribe Channel | Diffusion à plusieurs consommateurs | Fan-out d’événements |
| Datatype Channel | Canal dédié à un type de message | Séparation des responsabilités |
| Invalid Message Channel | Canal pour messages invalides | Gestion des erreurs de format |
| Dead Letter Channel | Canal pour messages non traitables | Isolation des échecs |
| Guaranteed Delivery | Livraison garantie des messages | Résilience réseau |
| Channel Adapter | Adaptateur entre application et canal | Intégration de systèmes legacy |
| Messaging Bridge | Pont entre deux systèmes de messaging | Interopérabilité |

---

## 3. Message Construction

| Pattern | Description | Problème adressé |
|-------|-------------|------------------|
| Command Message | Message exprimant une action | Pilotage explicite |
| Event Message | Message exprimant un fait | Notification découplée |
| Document Message | Message orienté données | Échange d’état |
| Request–Reply | Message avec réponse attendue | Interaction asynchrone |
| Correlation Identifier | Identifiant de corrélation | Lier requête et réponse |
| Message Sequence | Suite ordonnée de messages | Processus longs |
| Message Expiration | Durée de vie limitée (TTL) | Éviter les messages obsolètes |
| Format Indicator | Indique le format du message | Interopérabilité |
| Message Type | Type explicite du message | Routage et traitement |
| CQRS | Séparation commandes / requêtes | Scalabilité et clarté |

---

## 4. Message Routing

| Pattern | Description | Problème adressé |
|-------|-------------|------------------|
| Content-Based Router | Routage selon le contenu | Décision métier |
| Message Filter | Bloque certains messages | Réduction du bruit |
| Dynamic Router | Routage dynamique | Règles évolutives |
| Recipient List | Envoi à plusieurs destinataires | Fan-out contrôlé |
| Splitter | Découpe un message | Traitement indépendant |
| Aggregator | Regroupe plusieurs messages | Vision consolidée |
| Resequencer | Réordonne les messages | Restaurer l’ordre |
| Scatter–Gather | Diffuse puis agrège les réponses | Parallélisation |
| Routing Slip | Le message transporte son itinéraire | Routage flexible |
| Process Manager | Coordonne un processus long | Orchestration métier |

---

## 5. Message Transformation

| Pattern | Description | Problème adressé |
|-------|-------------|------------------|
| Message Translator | Convertit format ou modèle | Interopérabilité |
| Envelope Wrapper | Ajoute une enveloppe standard | Normalisation |
| Content Enricher | Ajoute des données au message | Compléter un message |
| Content Filter | Supprime certaines données | Sécurité, optimisation |
| Claim Check | Externalise une partie du payload | Réduction de taille |
| Normalizer | Uniformise plusieurs formats | Simplification downstream |
| Canonical Data Model | Modèle de données commun | Réduction du couplage |

---

## 6. Messaging Endpoints

| Pattern | Description | Problème adressé |
|-------|-------------|------------------|
| Message Endpoint | Interface applicative | Accès au messaging |
| Polling Consumer | Consommation par interrogation | Intégration pull-based |
| Event-Driven Consumer | Réaction à l’arrivée d’un message | Réactivité |
| Competing Consumers | Consommateurs concurrents | Scalabilité horizontale |
| Selective Consumer | Consommation filtrée | Spécialisation |
| Durable Subscriber | Abonné persistant | Tolérance aux pannes |
| Idempotent Consumer | Traitement sans effet de doublon | Retries sûrs |
| Transactional Client | Traitement transactionnel | Cohérence |
| Service Activator | Expose une opération métier | Intégration SOA |

---

## 7. System Management (transversal)

| Pattern | Description | Problème adressé |
|-------|-------------|------------------|
| Message Store | Persistance des messages | Rejouabilité, audit |
| Control Bus | Canal de pilotage | Administration dynamique |
| Detour | Redirection temporaire | Maintenance |
| Wire Tap | Copie du message | Monitoring |
| Message History | Historique dans le message | Traçabilité |
| Test Message | Message de test | Validation |
| Channel Purger | Nettoyage de canal | Exploitation |

---

## Clés de lecture (entretien)

- Routing ≠ Transformation  
- Channel ≠ Endpoint  
- Command ≠ Event  
- Aggregator ≠ Process Manager  
- Pub/Sub ≠ Competing Consumers  
