---
title: Méthode Event Storming
description : L'Event Storming est une technique de modélisation collaborative qui permet de visualiser et de comprendre les processus métiers complexes.
---

## Big picture

L'Event Storming est un processus d'animation qui permet une modélisation collaborative afin de visualiser et de comprendre les processus métiers complexes. Cette technique est particulièrement utile dans le cadre des architectures événementielles, car elle permet de modéliser les étapes d'un processus sur base des événements qui les composent. Il permet de récolter l'information au travers du prisme de plusieurs acteurs de manière à obtenir une vision globale du processus. Pour ce faire, les participants de l'atelier collaborent pour identifier les événements qui se produisent, les acteurs qui les déclenchent, les données nécessaires pour les opérer et les systèmes externes (_boundaries_). Concrètement, cela se présente sous forme de Post-its de différentes couleurs pour représenter les différents éléments du processus :

1. **Événements** : en **orange**, ils sont la pierre angulaire de l'architecture événementielle et permettent notamment de représenter les changements d'état d'une donnée, un nouveau statut. Par définition, un événement est toujours au passé. Exemple : "La facture est payée".
1. **Commande et acteurs** : en **bleu**, pour les commandes et en **jaune** pour les acteurs. Une commande est une action qui déclenche un événement. Cette notion se réfère au _command_ du _Domain Driven Development_ et du pattern _CQRS_. Il peut être facilement associé aux fonctionnalités d'un système. Un acteur est une personne qui exécute une commande.
1. **Modèle** : en **vert** (foncé), il s'agit de la liste des informations exhaustives nécessaires durant le traitement de l'étape décrite (paramètres, des objets, des données, etc.).
1. **Problème** (_risk_) : en **fuchsia**, il s'agit des problèmes de tous types liés à l'étape décrite, que ce soit dû à une incompréhension, un manque d'information, un problème ou une erreur.
1. **Système externe** : en **jaune** (clair), il s'agit des systèmes externes qui interagissent avec le processus et qui sont les déclencheurs d'événements.
1. **Contexte** (_policy_): en **mauve**, la raison ou la condition dans laquelle ou pour laquelle une commande s'opère. Typiquement peut s'exprimer avec un "si" ou "lorsque" ou encore "à chaque fois que".

Un événement peut être déclenché par plusieurs éléments :

- Une action d'un utilisateur (commande et acteur).
- Un système externe.
- Un autre événement (planifié ou non).

> :pen: **Note** : Ces définitions peuvent être affichées comme légende lors de l'atelier.

### Pourquoi faire un atelier Event Storming ?

Les raisons de faire un atelier d'Event Storming sont directement liées aux objectifs (cf. [Les objectifs de l'Event Storming](#les-objectifs-de-levent-storming)) et avantages de cette méthode :

1. **Modéliser un processus métier de manière simple et efficace** : identifier les événements, les commandes, les acteurs, les modèles et les systèmes externes.
1. **Créer un langage commun entre les différents acteurs d'un processus** : établir un glossaire commun qui est partagé par toutes les strates de l'entreprise.
1. **Identifier les problèmes et les opportunités d'un processus au travers d'une vue globale** : identifier les manques et les étapes pouvant être améliorées, rationalisées ou simplifiées, mais également les opportunités sous forme de nouveaux besoins métiers, de nouvelles fonctionnalités, etc.
1. **Définir les limites d'un ou plusieurs périmètres fonctionnels** : organiser les fonctionnalités d'un processus dans des zones de responsabilités claires qui auront un impact sur l'architecture du système.
1. **Améliorer la collaboration et le transfert d'informations entre les différents services** : les échanges sont dynamiques, la coordination entre les équipes est naturelle et les interactions permettent une co-construction du processus, ainsi qu'un transfert d'informations efficace. Dans certains cas, l'Event Storming peut être également utilisé pour recouvrir des processus oubliés ou non documentés.

Cette méthode convient donc très bien pour animer des ateliers sur bases des principes expliqués ci-dessus. De même, que ces principes peuvent être adaptés le cas échéant.

### Ce que l'Event Storming n'est pas

L'event storming n'est pas une méthode de modélisation de processus métier classique telle que le BPMN. En effet, la manipulation de Post-its permet une approche plus visuelle et plus collaborative, mais ne permet pas une modélisation de processus selon des normes ou des standards stricts.

> :pen: **Note** : Alberto Brandolini, l'initiateur de la méthode, s'est essayé à l'écriture d'un [livre](https://www.eventstorming.com/book) disponible en ligne sur son [site](https://www.eventstorming.com/). Néanmoins ce livre est toujours en cours d'édition depuis 2021 et n'est toujours pas terminé à ce stade (2024).

## Les objectifs de l'Event Storming

1. **Ubiquitous Language** : L'Event Storming permet de créer un langage commun entre les différents acteurs d'un processus. En effet, les participants de l'atelier vont collaborer pour identifier les événements, les commandes, les acteurs, les modèles et les systèmes externes. Cette collaboration permet de mettre en lumière les différences de compréhension et de langage. Par exemple, un développeur peut avoir une vision technique d'un processus tandis qu'un responsable métier peut avoir une vision fonctionnelle. L'Event Storming permet de mettre en lumière ces différences et de les résoudre de manière collaborative.

1. **Visualisation** : L'Event Storming permet de visualiser un processus métier de manière simple et efficace, mais également sous le prisme des différents profils de participants. En effet, ceux-ci vont collaborer pour identifier les étapes d'un processus sur base des événements ce qui va faciliter l'intégration à une architecture du même type. Cette visualisation permet de mettre en lumière les différentes étapes d'un processus et de les organiser de manière logique, de même que se rendre compte des problèmes, mais également les opportunités. Cette visualisation peut être utilisée pour communiquer sur un processus ou pour être comparée à des processus similaires de manière à tendre vers une standardisation et une rationalisation.

1. **Périmètre applicatif** : L'Event Storming permet de définir les limites d'un ou plusieurs périmètres fonctionnels (_bounded context_). Une fois que le processus est dessiné et le cas échéant comparé à d'autres processus similaires, il est possible de définir les limites d'un ou plusieurs périmètres fonctionnels, ou autrement dit, les limites d'un ou plusieurs domaines métiers. Ces limites permettent de définir les responsabilités de chaque domaine et de comprendre les interactions entre ceux-ci.

1. **Collaboration** : L'Event Storming est une technique de modélisation collaborative qui permet de réunir des acteurs de différents services pour travailler ensemble sur un processus métier. Cette collaboration améliore les interactions naturelles entre les personnes tout simplement en leur permettant de faire connaissance et de travailler ensemble sur un sujet commun. En outre, la coordination entre les différents services est améliorée, car les participants de l'atelier ont une vision globale du processus et peuvent ainsi mieux comprendre les interactions entre les différents services.

## Bien choisir ses participants

Dans une entreprise ou une organisation où la découpe des équipes est faite en silos, l'objectif est de faire tomber les barrières entre les équipes. Néanmoins, il est également important de ne pas surcharger l'atelier avec trop de personnes, pour cela, il est important de choisir des participants de différents services et de différents niveaux hiérarchiques. Généralement, on retrouvera les rôles suivants :

- le **facilitateur** : il est responsable de l'animation de l'atelier.
- le **métier** : il est responsable de la connaissance du processus métier.
- le **développeur** : il est responsable de la connaissance technique.
- l'**architecte** : il est responsable de la vision globale du système.

Il peut être étonnant de confronter aussi tôt un responsable métier et un développeur, mais c'est justement l'objectif de l'Event Storming : mettre en lumière les différences de compréhension et les problématiques dans un processus de manière à les résoudre de manière collaborative.

## La logistique

Pour réaliser un atelier Event Storming, il est nécessaire de prévoir un espace de travail suffisamment grand pour accueillir tous les participants. Il est également nécessaire de prévoir du matériel de bureau, comme :

- des Post-its de différentes couleurs (cf. [Big picture](#big-picture)),
- des marqueurs noirs,
- des rouleaux de papier à accrocher au mur pour y coller les Post-its,
- du scotch transparent et de couleur pour tracer des lignes sur le papier,
- un cutter (ou des ciseaux) pour découper le rouleau de papier,
- des Post-its supplémentaires pour noter les informations annexes, comme la définition d'un terme (glossaire) ou une légende.

> :bulb: **Astuce** : Prenez des Post-its de formats différents pour les acteurs (plus petits), et les notes annexes (plus grands) pour faciliter la lecture et la lisibilité des informations.

## Le déroulement d'un atelier Event Storming

Il existe autant de manières de réaliser un atelier Event Storming qu'il y a de facilitateur. Néanmoins, il est possible de définir une structure de base pour un atelier Event Storming. Cette structure est composée de plusieurs phases :

1. **Kick-off** : La mise en route de l'atelier où le facilitateur va :
    - Expliquer le but de l'atelier, ex : "nous allons parcourir le processus métier du suivi du dossier de la création à la clôture".
    - Ne pas expliquer en détail les étapes, mais les énoncer de manière à ce que les participants comprennent le but de l'atelier et ne se focalisent que sur les événements.

1. **Exploration** : Les participants vont explorer le processus métier de manière un peu chaotique de manière à identifier les événements avec des phrases conjuguées aux passées. Chacun d'entre eux va écrire sur un Post-it de couleur orange un événement et aller le positionner sur le mur. À ce stade, les événements ne sont pas encore ordonnés, mais simplement identifiés. Il est très important que les événements soient écrits au passé pour bien comprendre qu'ils sont déjà arrivés.

1. **Chronologie** : Les participants vont réorganiser les événements dans l'ordre chronologique. Cette phase peut intégrer une ou plusieurs organisations temporelles :
    - **Pivot** : identifier les événements ayant un impacte majeur sur le processus.
    - **Swimlanes** : chaque ligne représente un acteur ou un système externe ou un processus particulier.
    - **Milestones** : inscrire les événements dans un ordre de grandeur (non précis), par exemple : le jour même, 1 semaine après, 2 mois après.
    - **Chapitre** : regrouper les événements par thème.

1. **Description des étapes** :
    1. Les **commandes**, autrement dit les actions qui déclenchent les événements. Ces _commands_ sont inscrites sur un Post-its bleu et placées derrière les événements associés. Les participants vont également identifier quels sont les **acteurs** et vont les inscrire sur un Post-its jaune qui sera positionné sur la commande. En revanche, dans le cas d'un événement déclenché par un **système**, celui-ci est inscrit sur Post-its en guise de commande et d'acteur.
    1. Les **attributs** qui permettent d'identifier les valeurs, paramètres, objets, etc. nécessaires pour réaliser l'étape. Au plus les valeurs sont précises, au mieux c'est. Ces données seront d'une grande aide pour construire le modèle de données du périmètre fonctionnel. Les participants vont inscrire ces données sur un Post-its vert et les positionner à proximité de la commande.
    1. Les **policy** qui permettent de définir les conditions dans lesquelles une commande s'opère. Ces conditions peuvent être des règles métiers, des conditions de validation, des autorisations, etc. Les participants vont inscrire ces conditions sur un Post-its mauve et les positionner à proximité de l'événement.

1. **Parcours utilisateur** : L'objectif de cette phase est de parcourir le processus métier en expliquant à haute voix le parcours utilisateur en suivant les événements. Certaines étapes peuvent être plus complexes et vont nécessiter de noter des les risques ou des opportunités. Certaines discussions ne pourront pas être terminées ou même commencées à ce moment, il faudra les noter pour les traiter plus tard. Cette étape peut être réalisée plusieurs fois pour prendre un peu de recul et affiner le processus.

1. **Narration inversée** : Tout comme la phase précédente, cette phase permet de parcourir le processus métier, mais en partant de la fin. L'objectif est de faire le lien entre un événement et son prédécesseur et voir s'il n'y a pas un manque. Ce système permet de vérifier la cohérence de l'ensemble. Généralement, il met en lumière 30 à 40% des événements manquants. Les événements de clôtures ou les événements pivots sont souvent des événements pertinents pour commencer.

1. **Périmètre fonctionnel** (ou _bounded context_) : Une fois que le processus est dessiné, il est possible de définir les limites d'un ou plusieurs périmètres fonctionnels. Ces limites permettent de définir les responsabilités de chaque domaine et de comprendre les interactions entre ceux-ci. Cette phase peut être réalisée en fin d'atelier ou lors d'un atelier dédié.

### Problèmes et opportunités

Généralement, l'identification des problèmes se fait durant toute les phases de l'atelier. Ils apparaissent assez naturellement durant les discussions.

Une fois toutes les phases de réflexion terminées, le processus apparaît clairement. À ce stade, il est possible de mieux voir les problèmes et les opportunités, par conséquent, les participants peuvent ajouter de nouveaux Post-its de couleur rose pour les problèmes et de couleur verte pour les opportunités.

Une opportunité peut être une amélioration du processus, une automatisation, une simplification, une réduction des coûts, etc.

### Résolution des problèmes

Les problèmes identifiés peuvent être particulièrement variés et nombreux. Il n'est souvent pas possible de tous les régler en une seule session. Une méthode pour les traiter serait de les prioriser sur base de vote. Les participants peuvent voter pour les problèmes qu'ils jugent les plus importants à résoudre en marquant.

> :bulb: **Astuce** : Vous pouvez utiliser de petits Post-its de couleur pour les votes, ou des points de couleur ou encore simplement un point avec un marqueur. Cette astuce peut également servir pour les opportunités.

## Remise en question du processus

Le diable se cache dans les détails et c'est toujours quand on commence à réfléchir à la mise en place du processus que les problèmes apparaissent.

Les discussions initiées et tenues durant les ateliers permettent à différents profils de confronter leurs points de vue. En effet, un développeur va naturellement penser aux détails d'implémentation, comme les conditions de validation, les erreurs possibles, les paramètres nécessaires, etc., de même qu'un architecte va penser à la découpe du système, à la scalabilité, à la sécurité notamment les autorisations, etc., tandis qu'un responsable métier va penser à la simplicité d'utilisation, à la clarté des informations, à la pertinence des données, etc.

Ces questions sont essentielles pour permettre de mettre en lumière les problèmes et les opportunités d'un processus. En outre, les itérations permettront de systématiquement revenir sur les processus afin de les améliorer. De plus, dans certains cas, il peut être intéressant de faire des ateliers avec des acteurs d'autres métiers similaires pour comparer les processus et ainsi tendre vers une standardisation. Par conséquent, les processus seront naturellement remis en question et améliorés suivant une stratégie de rationalisation et simplification.

## Travail d'équipe

Dans les grandes entreprises où l'organisation est particulièrement cloisonnée (silos), il est souvent difficile de faire travailler ensemble des équipes de différents services. Généralement, les échanges sont limités à des réunions de coordination et des envois de mails.

L'Event Storming permet de réunir des équipes de différents services pour travailler ensemble sur un processus métier offrant ainsi un canal supplémentaire de communication propice à la collaboration. Les équipes s'inscrivent alors dans une démarche plus spontanée et plus naturelle de partage offrant des interactions dynamiques et constructives grâce aux liens créés entre les participants.
