---
title: Déroulement d'un atelier
description: Les phases types d'un Event Storming
sidebar_position: 3
---

:::info En résumé
Un atelier Event Storming suit une progression logique : d'abord **clarifier l'objectif** (kick-off), puis **explorer librement** les événements, ensuite **organiser chronologiquement**, **enrichir avec les détails**, et enfin **valider par la narration**. Chaque étape a un rôle précis et un timing. Le facilitateur doit veiller à ce que chacun participe et que le groupe ne s'égare pas. Il ne faut pas perdre de vue que ces étapes sont itératives au sein de trois grandes phases : Big Picture, Process Modeling, Design Level. Selon la phase, le niveau de détail et les objectifs changent.
:::

## Légende des Post-its

Avant de commencer, voici les codes couleurs utilisés durant l'atelier :

1. **Événements** : en **orange**, ils représentent les changements d'état. Toujours au passé. Exemple : "La facture est payée".
2. **Commande et acteurs** : en **bleu** pour les commandes (actions qui déclenchent des événements) et en **jaune** pour les acteurs (personnes qui les exécutent).
3. **Modèle** : en **vert** (foncé), la liste des informations exhaustives nécessaires durant le traitement (paramètres, objets, données, etc.).
4. **Problème** (risk) : en **fuchsia**, les problèmes de tous types liés à l'étape (incompréhension, manque d'info, erreur, etc.).
5. **Système externe** : en **jaune** (clair), les systèmes externes qui interagissent avec le processus et déclenchent des événements.
6. **Contexte** (policy) : en **mauve**, la raison ou condition qui entoure l'exécution d'une commande (si, lorsque, à chaque fois que...).

:::tip
Utilisez des formats différents de Post-its—plus petits pour les acteurs, plus grands pour les notes importantes. C'est un petit truc qui rend le mur beaucoup plus lisible.
:::

Un événement peut être déclenché par :

- Une action utilisateur (commande et acteur)
- Un système externe
- Un autre événement (planifié ou non)

:::tip
Affichez cette légende durant tout l'atelier. Cela permet aux participants de rester autonomes et de ne pas vous déranger constamment pour confirmer les couleurs (cf. [Participants et logistique](participants-logistique.md#avant-de-commencer)).
:::

## Les étapes du déroulement

### 1. Kick-off

**Objectif** : Clarifier le périmètre et les objectifs pour que tout le monde parte sur la même base.

**Comment ça marche** :

- Le facilitateur lance l'atelier en rappelant **le but** clairement. Exemple : "On explore le processus d'une création de dossier de la création à la clôture".
- Définissez aussi ce qu'on NE fait PAS ("on ne parle pas des systèmes techniques en détail").
- Pas de détails sur les étapes encore—c'est juste le contexte global.

**Important** : C'est court et focalisé. Si vous traînez ici, vous perdez l'élan.

### 2. Exploration

**Objectif** : Récolter tous les événements sans ordre, sans jugement.

**Comment ça marche** :

- Les participants écrivent **les événements au passé** sur des Post-its orange et les collent sur le mur.
- Les événements vont s'accumuler sur le mur, **pas encore en ordre** c'est normal, ça peut être chaotique. Certains seront des doublons, d'autres seront vagues.
- Laissez assez de temps pour que les gens réfléchissent. Si vous voyez que ça ralentit, c'est bon signe.

**Le rôle du facilitateur** :

- Veillez à ce que tout le monde écrive, pas juste les parleurs
- Posez des questions : "Quelqu'un d'autre a-t-il un événement ?"
- N'acceptez pas les débats sur l'ordre encore : "on rangera après"

### 3. Chronologie

**Objectif** : Organiser les événements dans un ordre logique.

**Comment ça marche** :

- Collectivement, on réorganise les Post-its orange dans l'ordre où ils se produisent réellement.
- Plusieurs approches possibles selon votre domaine :

  - **Pivot** : événements à fort impact, autour desquels tout s'organise
  - **Swimlanes** : lignes horizontales par acteur/système/sous-processus
  - **Milestones** : ordres de grandeur temporels (jour, semaine, mois)
  - **Chapitre** : regroupements par thème métier

Le facilitateur va arbitrer en écoutant les experts métiers, le cas échéant, si deux visions s'opposent, notez le problème. Le processus est itératif et vous reviendrez dessus plus tard.

:::tip Changer d'approche si besoin
Attendez vous à devoir changer d'approche en cours de route. Par exemple vous passerez d'une approche swimlanes à une approche milestones. N'écrivez donc pas directement sur le mur pour créer des zones ou des liens, mais utilisez un collant de couleur que vous pourrez déplacer.
:::

:::warning Correctif en itération
Il se peut également que vous deviez redéfinir des événements ou en ajouter de nouveaux. C'est normal. N'hésitez pas à revenir en arrière si vous découvrez des erreurs ou oublis. Le processus est itératif.
:::

### 4. Description des étapes

**Objectif** : Enrichir chaque événement avec ses contextes, acteurs, données, conditions.

**Comment ça marche** :
Pour chaque événement (ou groupe d'événements), ajouter autour :

1. **Commandes (bleu)** : l'action qui a déclenché l'événement. Les mettre AVANT l'événement orange.
2. **Acteurs (jaune)** : la personne/système qui exécute la commande. Mettre à côté du bleu.
3. **Attributs (vert)** : les données nécessaires pour faire l'action (paramètres, informations critiques).
4. **Policy (mauve)** : la condition qui entoure l'action ("SI le dossier est complet, ALORS...").
5. **Problèmes (fuchsia)** : si vous voyez un piège, une ambiguïté, le noter.

**Physiquement** : Les commandes vont À GAUCHE de l'événement, les attributs DESSOUS ou À DROITE. Prenez de la place sur le mur.

:::warning Adapter les détails à la phase
Cette étape peut être adaptée selon la phase de l'Event Storming. En Big Picture, on reste léger sur les détails (juste commandes et acteurs). Dans la phase de processus design on ajoute les dépendances systèmes externes et les conditions. En Design Level, on ajoute les attributs.
:::

### 5. Parcours utilisateur / Narration inversée

**Objectif** : Lire le processus à haute voix pour voir si ça fait sens et si on a oublié des choses.

**Comment ça marche** :

- Partez du DÉBUT du processus et lisez chaque étape à voix haute (événement → commande → acteur → data → condition).
- Ça permet à **l'équipe métier de valider** : "oui c'est ça" ou "attendez, on oublie une étape ici".

En ce qui concerne la **narration inversée**, il s'agit du même exercice mais **en partant de la FIN du processus**, ça fait émerger des événements oubliés. Les gens ne pensent pas naturellement "en arrière" et ça force à reconsidérer chaque étape.

### 6. Périmètre et bounded contexts (optionnel)

**Objectif** : Identifier où les responsabilités changent, définir les limites entre domaines.

**Note** : Cette étape peut être intégrée en fin de Big Picture ou faire l'objet d'un atelier **Design Level séparé**.

**Comment ça marche** :

- Tracez des **cadres/zones** autour des groupes d'événements qui appartiennent au même domaine.
- Identifiez les **interactions entre zones** : comment le domaine A communique avec le domaine B ?

:::info Domain Driven Design
Cette étape invite à réfléchir aux limites naturelles dans votre domaine et va avoir une influence importante : où mettez-vous les limites d'un microservice ? D'une équipe ? D'une base de données ?
:::
