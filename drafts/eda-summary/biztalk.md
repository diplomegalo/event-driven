# BizTalk – Brief express (5 minutes)

## Vue d’ensemble

**BizTalk Server est un moteur d’intégration orienté message**, combinant messaging, transformation, routage, orchestration, fiabilité et connectivité via des adaptateurs.

---

## Synthèse des notions BizTalk

| Notion | À quoi ça sert | Illustration simple | Fonctionnalité BizTalk |
|------|---------------|---------------------|------------------------|
| Message | Unité de transport immuable | XML reçu depuis un ERP | Message XML (MessageBox) |
| Schéma | Définir la structure des messages | XSD facture client | BizTalk Schema (.xsd) |
| MessageBox | Stockage central + pub/sub | Poste restante des messages | MessageBox DB |
| Publish / Subscribe | Routage par abonnement | Message “Facture” routé automatiquement | Subscriptions |
| Port de réception | Point d’entrée logique | Endpoint HTTP | Receive Port |
| Location de réception | Détail technique d’entrée | FTP / File / HTTP | Receive Location |
| Port d’envoi | Point de sortie | Envoi vers SAP | Send Port |
| Adaptateur | Connecteur technique | FTP, SOAP, SQL | BizTalk Adapters |
| Pipeline | Traitement technique | Decode → Validate | Receive / Send Pipeline |
| Pipeline Component | Étape personnalisée | Décompression | Custom Pipeline Component |
| Mapping | Transformation de message | XML A → XML B | Map (.btm / XSLT) |
| Message Translator | Adapter les formats | CSV → XML | Pipeline + Map |
| Routage par contenu | Décider la destination | Country = BE | Filters / Promotions |
| Orchestration | Logique métier long-running | Workflow commande | BizTalk Orchestration |
| Correlation | Lier des messages | OrderId | Correlation Set |
| Convoy Pattern | Synchroniser plusieurs messages | Header + Body | Convoy orchestration |
| Transaction | Cohérence du traitement | All-or-nothing | Atomic / Long-running TX |
| Retry | Tolérance aux pannes | Retry FTP | Adapter Retry |
| Suspend / Resume | Gestion d’erreurs | Message bloqué | Suspended Messages |
| Tracking | Audit technique | Qui a traité quoi | Tracking |
| BAM | Suivi métier | Durée d’un process | Business Activity Monitoring |
| EDI | Échanges normalisés | EDIFACT | BizTalk EDI Engine |
| Trading Partner | Partenaire B2B | Client X | Party / Agreement |
| Security | Sécurisation | Certificats | Certificates / SSO |
| Scaling | Montée en charge | Plusieurs hosts | Host / Host Instance |
| Ordering | Respect de l’ordre | FIFO | Ordered delivery |
| Persistence | Résilience | Reprise après crash | SQL Server persistence |

---

## Ce que le recruteur attend

- BizTalk est **stateful et persistant**
- Le **MessageBox est le cœur**
- Le routage est **déclaratif (pub/sub)**
- L’orchestration n’est **pas obligatoire**
- Pipelines = **technique**, orchestrations = **métier**
- Puissant mais **lourd et coûteux**

---

## Traduction moderne

| BizTalk | Équivalent moderne |
|------|-------------------|
| MessageBox | Event Hub / Kafka |
| Pipeline | Azure Functions / Stream processing |
| Mapping | XSLT / Data mapping |
| Orchestration | Durable Functions / Logic Apps |
| Adapter | Connectors |
| BAM | Application Insights |
| Pub/Sub | Event-driven architecture |

---

## Limites à connaître

- Fort couplage XML  
- Scalabilité surtout verticale  
- Coût licence + infra  
- Peu cloud-native  
- Complexité opérationnelle

---

## Phrase de conclusion

> BizTalk a excellé dans l’intégration transactionnelle et B2B, mais les architectures cloud privilégient aujourd’hui des briques découplées, scalables et orientées événements.
