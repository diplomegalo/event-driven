---
title: Les objectifs de l'Event Storming
description: Ce que vise la méthode et comment elle le rend tangible
sidebar_position: 2
---

:::info En résumé
L'**Event Storming** est particulièrement **utile quand les connaissances sont fragmentées** entre différentes équipes ou départements. J'ai trouvé que rassembler tout le monde quelques heures permet d'éclaircir une situation bien plus rapidement. C'est un vrai gain de temps par rapport aux réunions dispersées ou au "ping-pong" d'emails interminables. Une fois les processus clarifiés, il est plus simple de **rationnaliser et simplifier** les flux de travail, ce qui améliore l'efficacité globale.
:::

## Pourquoi faire un atelier Event Storming ?

L'Event Storming permet d'explorer et de comprendre un domaine métier complexe en réunissant différents profils autour d'une activité collaborative. L'objectif principal est de **créer une vision partagée** du processus métier, depuis une vue d'ensemble jusqu'aux détails d'implémentation.

### Une approche progressive en trois niveaux

La méthode se déroule en plusieurs étapes itératives, chacune avec ses propres objectifs :

**1. Big Picture Event Storming** : Comprendre le domaine dans son ensemble

- Identifier les événements métier majeurs
- Repérer les acteurs impliqués
- Faire émerger les problèmes et opportunités

À cette étape, les **profils métier apportent vraiment de la valeur**. C'est leur connaissance de la logique métier qui fait émerger les vrais processus, pas ceux qu'on croit qui existent. Les questions techniques peuvent attendre.

**2. Process Modeling** : Affiner les processus critiques

- Visualiser les enchaînements d'événements
- Identifier les commandes (actions) qui déclenchent les événements
- Clarifier les interactions entre acteurs

C'est ici que la vision transversale des **architectes** est importante. Leurs questions font ressortir les dépendances entre domaines et les contraintes d'intégration que le métier seul ne verrait pas.

**3. Design Level** : Définir les périmètres techniques

- Identifier les agrégats et modèles de données
- Définir les bounded contexts (périmètres fonctionnels)
- Préciser les responsabilités de chaque système

À cette étape, les **profils techniques deviennent essentiels**. Ils posent les questions précises qui font ressortir les détails cachés auxquels le métier doit répondre. Le métier peut rester pour valider, mais ce sont les décisions techniques qui dominent. J'ai remarqué qu'il faut d'ailleurs veiller à avoir un interlocuteur métier ayant des dispositions techniques pour bien comprendre les questions et y répondre.

### Les bénéfices concrets

Au-delà de la modélisation, l'Event Storming apporte :

- **Un langage commun** : tous les participants s'accordent sur les termes métier (ubiquitous language)
- **Une meilleure collaboration** : les silos entre équipes se brisent naturellement
- **Une vision systémique** : les dépendances et interactions deviennent visibles
- **Des décisions éclairées** : les problèmes cachés et opportunités émergent rapidement

## Ce que l'Event Storming n'est pas

L'Event Storming n'est pas une méthode de modélisation de processus métier classique telle que le BPMN. La méthodologie offre une approche visuelle et collaborative, sans viser un standard formel.

**Le livrable n'est pas une analyse prête à l'emploi** : le résultat d'un atelier (mur de Post-its, photos, notes) ne peut pas être directement intégré dans un document d'analyse ou une spécification technique. Il nécessite une phase de **consolidation et de formalisation** pour transformer les insights collectifs en documentation exploitable. L'atelier produit avant tout une **compréhension partagée** qui doit ensuite être structurée dans une analyse ou dans un backlog selon les besoins du projet.

Produire une analyse formelle à partir d'un atelier Event Storming demande beaucoup de temps et d'efforts. Une manière de pouvoir réduire ce temps est d'ajouter les grandes étapes dans un backlog, puis de les détailler progressivement en fonction des priorités du projet. De cette manière, on évite une perte de temps due au formalisme excessif et l'attente d'une documentation parfaite avant de commencer le travail de développement.
