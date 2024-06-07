---
slug: "/"
---

# Building Event-Driven Microservices

Cette documentation s'inspire largement du livre [Building Event-Driven Microservices](https://www.oreilly.com/library/view/building-event-driven-microservices/9781492057881/) de Adam Bellemare et des conversations eu avec des collègues et amis.

![alt text](../../static/img/building-event-driven-microservices-book.jpg)

## Definition des concepts

Avant d'entamer le processus de construction d'une architecture orientée événements, il est important de définir les concepts de base qui seront utilisés. La définition des concepts permet de comprendre ce que l'on fait et pourquoi on le fait. Autrement dit, à quoi répondent les concepts liés à l'architecture orientée événements et comment le font-ils.

### Domain Driven et Bounded Context

- **Domaine** : Le domaine définie l'ensemble des concepts, des règles métier et des entités qui sont liées entre elles et qui définissent un certain contexte métier.
- **Sous-domaine** : Un sous domaine est un sous-ensemble spécifique du domaine qui se concentre sur un aspect particulier du domaine global..
- **Modèle** : Le modèle est une représentation abstraite et simplifiée du domaine et des sous-domaine qui est utilisée pour répondre aux fonctionnalités de ce domaine.
- **Bounded context** : Le _bounded context_ est une frontière conceptuelle dans laquelle un modèle spécifique est défini et maintenu, de même que les processus, les événements, les règles métier et les entités qui sont liées à ce modèle et pertinent pour un ou plusieurs sous-domaines.

### Message vs. Event

Un message est une unité de communication entre systèmes distribués. Il contient toutes les données utiles au traitement d'une tâche. Dans une représentation orientée objet, un message serait la classe abstraite qui contient les attributs de bases pour faire transiter des informations d'un système à un autre. Un des attributs définirait le type de message (ex: Command, Event, Query, etc.).

```mermaid
graph TD
    A[Message] --> B[Event]
    A[Message] --> C[Command]
    A[Message] --> D[Query]
```

Un événement est une spécification du message. Il est utilisé pour notifier les autres systèmes d'un changement d'état. Il est considéré comme suffisant, c'est-à-dire qu'il contient toutes les informations nécessaires pour être traité par les systèmes qui le reçoivent.

### Communication et Data Driven

Le _D_ de _Driven_, que ce soit pour le TDD (Test Driven Development), le DDD (Domain Driven Development), etc.,  défini qui est le moteur de la conception.

L'_Event Driven Architecture_ se construit autour des événements. Par conséquent, dans le processus de conception, l'identification des événements est la première étape (_Event Storming_).

Ces événements vont soit être utilisés pour faire communiquer les systèmes entre eux (_Communication Driven_), soit vont être stockés comme une donnée à part entière et consommée par une application (_Data Driven_).

Cette différence est fondamental pour la conception de l'architecture orientée événements, car la réponse technique est différente en termes de topologie, de stockage, de distribution, etc.

#### Communication Driven

Dans le cas d'une _Communication Driven_, les événements sont utiles pour **communiquer** et sont utilisés pour notifier les autres systèmes d'un changement d'état de manière asynchrone.

Par exemple, lorsque l'application de calcule des salaires termine le traitement de génération d'un lot de virement à effectuer, il envoie un événement pour notifier le système de paiement que le lot est prêt à être traité. Celui peut alors récupérer le lot et créer les paiements associé.

```mermaid
graph LR
    A[Gestion des salaires] -- Event --> B[Paiement des salaires]
```

La réponse technique implique une distribution des événements aux systèmes qui en ont besoin, c'est-à-dire, une approche _publish-subscribe_. Ce paradigme ne nécessite pas de stockage centralisé des événements.

Chaque système est responsable de la gestion des événements qu'il reçoit et stocke les informations utiles pour son traitement. Les données sont gardées et le cas échéant dupliquées dans chaque système qui en a besoin.

> Selon les cas, il peut être nécessaire de déterminer des systèmes maîtres de la données pour éviter les incohérences.

#### Data Driven

Les événements sont considérés comme une données à part entière. Ils sont stockés de manière centralisées dans un _event stream_ et produits et consommés par des microservices.




### Event Broker

Un Event Broker est un composant logiciel qui permet de distribuer les événements aux différents systèmes qui en ont besoin.

Fondamentalement, il existe deux types de topology pour les architectures orientées événements :

Vous pouvez retrouver les différents chapitres de la documentation suivants :

### Event Stream

#### Consumer Group

> :construction: **TODO**

#### Unkeyed Event : événement sans clés

> :construction: **TODO**

#### Keyed Event : événement à clés

> :construction: **TODO**

#### Entity Event : événement d'entité

> :construction: **TODO**

import DocCardList from '@theme/DocCardList';

<DocCardList />