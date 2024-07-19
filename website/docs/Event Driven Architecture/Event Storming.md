# Event Storming

## Big picture

L'Event Storming est une technique de modélisation collaborative qui permet de visualiser et de comprendre les processus métiers complexes. Cette technique est particulièrement utile pour les systèmes basés sur des événements. Elle permet de modéliser les interactions entre les différents acteurs et systèmes externes d'un système.

Les participants à l'atelier collaborent pour identifier les événements qui se produisent dans le système, les acteurs qui les déclenchent, les données nécessaires pour les opérer et les systèmes externes qui communiquent avec le système (boundaries). Pour cela, ils utilisent des post-it de différentes couleurs pour représenter les différents éléments du processus :

1. **Événements** : en **orange**, il sont la pierre angulaire de l'Event Storming. Ils représentent les changements de statut dans le système. Ils sont généralement exprimés avec des phrases conjuguées au passé. Exemple : "La facture est payé".
1. **Commande et acteurs** : en **bleu** pour les commandes et en **jaune** pour les acteurs. Une commande est une action qui déclenche un événement. Cette notion se réfère au _command_ du _Domain Driven Development_ et du pattern _CQRS_. Il peut être facilement associé aux fonctionnalités d'un système. Un acteur est une personne qui exécute une commande.
1. **Modèle** : en **vert** (foncé), il s'agit de la liste des informations exhaustives nécessaires durant le traitement de l'étape décrite (paramètres, des objets, des données, etc.).
1. **Système externe**: :construction: un système externe qui communique avec le système.
1. **Contexte**: :construction: la raison ou la condition dans laquelle ou pour laquelle une commande s'opère. Typiquement peut s'exprimer avec un "si" ou "lorsque" ou encore "à chaque fois que".

Qu'est-ce qui déclenche un événement ?

- Une action d'un utilisateur (commande et acteur).
- Un système externe.
- Un événement dans l'agenda (cron job).
- La conséquence d'un autre événement.

> :notebook: **Note** : Ces définitions peuvent être affichées comme légende lors de l'atelier.

## Bien choisir ses participants

Dans une entreprise ou une organisation où la découpe des équipes est faite en silos, l'objectif est de faire tomber les barrières entre les équipes. Pour cela, il est important de choisir des participants de différents services et de différents niveaux hiérarchiques.

Néanmoins, il est également important de ne pas surcharger l'atelier. Généralement, on retrouvera les rôles suivants :

- le facilitateur : il est responsable de l'animation de l'atelier.
- le métier : il est responsable de la connaissance du processus métier.
- le développeur : il est responsable de la connaissance technique.
- l'architecte : il est responsable de la vision globale du système.

Il peut être étonnant de confronter aussi tôt un responsable métier et un développeur, mais c'est justement l'objectif de l'Event Storming : mettre en lumière les différences de compréhension et les problématiques dans un processus de manière à les résoudre de manière collaborative.

## La logistique

:construction: **En construction** : Cette section est en cours de rédaction.

## Les étapes d'un atelier Event Storming

1. **Kick-off**:
    - expliquer le but de l'atelier, ex : "nous allons parcourir le processus métier du suivi du dossier de la création à la clôture".
    - Ne pas expliquer en détaille les étapes, mais les énnoncer de manière à ce que les participants comprennent le but de l'atelier et ne se focalise que sur les événements.

1. **Exploration** :
    - Identifier les événements avec des phrases conjuguées au passées.

1. **Chronologie** :
    - Organiser les événements dans l'ordre chronologique.
    - Intégrer une ou plusieurs organisation temporelle :
        - **Pivot** : identifier les événements ayant un impacte majeur sur le processus
        - **Swimlanes** : chaque ligne représente un acteur ou un système externe ou un processus particulier.
        - **Milestones** : inscrire les événements dans un ordre de grandeur (non précis), par exemple : le jour même, 1 semaine après, 2 mois après.
        - **Chapitre** : regrouper les événements par thème.

1. **Acteurs et systèmes externes** :
    - Identifier les acteurs et les systèmes externes.

1. **Parcours utilisateur** :
    - Expliquer à haute voix le parcours utilisateur en suivant les événements.
    - Certaines discussions ne pourront pas être résolues à ce moment, il faudra les noter pour les traiter plus tard.

1. **Narration inversée**
    - Faire le lien entre un événement et sont prédécesseur et voir s'il n'y a pas un manque. Ce système permet de vérifier la cohérence de l'ensemble. Généralement, il met en lumière 30 à 40% des événements manquants.
    - Les événements de clôtures ou les événements pivot sont souvent des événements pertinents pour commencer.

### Problèmes et opportunités

Généralement, l'identification des problèmes se fait durant toute les phases de l'atelier. Ils apparaissent assez naturellement durant les discussions.

Une fois toutes les phases de réflexion terminées, le processus apparaît clairement. A ce stade, il est possible de mieux voir les problèmes et les opportunités, par conséquent, les participants peuvent ajouter de nouveaux post-it de couleur rose pour les problèmes et de couleur verte pour les opportunités.

Une opportunité peut être une amélioration du processus, une automatisation, une simplification, une réduction des coûts, etc.

### Résolution des problèmes

Les problèmes identifiés peuvent être particulièrement variés et nombreux. Il n'est souvent pas possible de tous les régler en une seule session. Une méthode pour les traiter serait de les prioriser sur base de vote. Les participants peuvent voter pour les problèmes qu'ils jugent les plus importants à résoudre en marquant. 

> :bulb: **Astuce** : Vous pouvez utiliser de petits post-it de couleur pour les votes, ou des points de couleur ou encore simplement un point avec un marqueur.

Cette astuce peut également servir pour les opportunités.

## Remise en question du processus

:construction: **En construction** : Cette section est en cours de rédaction.

## 
