---
title: Participants et logistique
description: Choisir les bons profils et préparer le terrain
sidebar_position: 4
---

:::info En résumé
Organiser un Event Storming réussi, c'est d'abord **réunir le bon nombre et les bonnes personnes** autour d'une table. Il faut aussi créer les conditions pour que la collaboration soit fluide et productive avec **le bon matériel et les bons outils**. Et finalement il faut aussi veiller à **bien cadrer les débats** pour ne pas s'éterniser, se disperser ou se laisser distraire, car la fatigue qu'ils impliquent est l'ennemi d'un atelier efficace.
:::

## Bien choisir ses participants

### Adapter la composition selon l'étape

L'une des clés du succès est de comprendre que **tous les ateliers ne demandent pas les mêmes profils**. Selon que vous explorez la big picture ou que vous affinez les détails techniques, l'importance de chaque rôle varie.

- **Big Picture Event Storming** : Privilégiez les profils **métier**. C'est le moment de comprendre le domaine, et c'est eux qui le connaissent mieux que quiconque.
- **Process Modeling** : Vous commencez à avoir besoin de profils plus variés. Les métiers restent importants pour valider, mais les **architectes** et les analystes deviennent essentiels car ils voient les dépendances et les impacts entre les systèmes.
- **Design Level** : Ici, ce sont les **développeurs** qui prennent le devant. Le métier, les analystes et les architectes peuvent rester pour valider, mais les décisions techniques dominent.

### Les quatre rôles clés

Au-delà de ces variations, chaque atelier a potentiellement besoin de quatre rôles fondamentaux :

- **Le facilitateur** : Il ou elle anime l'atelier, gère le tempo, s'assure que tout le monde participe, et qu'on ne s'égare pas. C'est un rôle crucial.
- **Le métier** : Cette personne porte la connaissance du processus. Sans elle, on risque de modéliser ce qu'on pense qui se passe ou dont on a besoin, mais pas la situation réelle.
- **L'architecte** : Il a une vision transverse et connait les interactions et intégrations entre les différents systèmes.
- **Le développeur** : Il apporte la perspective technique. Souvent, il pose les bonnes questions qui font émerger les détails oubliés.

Faire discuter des profils métier et technique directement dès le début, c'est intentionnel, car c'est souvent dans ces conversations qu'on découvre les malentendus ou les écarts de compréhension qui doivent être résolus. Reste néanmoins au facilitateur de veiller à ce que chacun ait la parole et que les débats restent constructifs en fonction de l'objectif de l'atelier.

## La logistique de l'atelier

### Avant de commencer

Quelques détails pratiques à préparer :

- **Durée** : Cela dépend beaucoup de la complexité du domaine, de la connaissance des participants et de l'urgence du projet. Dans mon expérience, après un certain temps d'atelier la fatigue s'installe et la concentration baisse. Les points soulevés à la fin de l'atelier sont souvent moins pertinents, moins challengés. Cependant, faire une pause peut suffire à relancer la dynamique. L'important est d'adapter : si vous sentez que l'énergie baisse, une pause peut suffire. Si le temps presse, vous pouvez continuer en acceptant une baisse de qualité sur les derniers points.

- **Nombre de participants** : L'idéal dépend vraiment du contexte. La connaissance de certains processus est divisée entre plusieurs personnes, équipe voire département et demande donc un plus grand nombre de participants. Néanmoins, il est important de comprendre que dans les grands groupes (au-delà de 10 personnes), tout le monde ne peut pas participer activement au mouvement des Post-its. Avec trop de gens, ça devient un chaos où plusieurs personnes veulent placer/déplacer les éléments en même temps. Dans ce cas, le facilitateur prend le rôle de coordonner et de déplacer seul les Post-its en fonction des idées énoncées. C'est un trade-off : vous avez plus de perspectives, mais moins de participation active de chacun.

- **Un grand panneau de rappel** : Afficher une grande feuille avec les couleurs des Post-its et leurs significations est utile. Cela rassure les participants, les rend autonomes et évite d'avoir à répéter les explications plusieurs fois.

- **L'espace** : Vous avez besoin d'une pièce assez grande avec des murs libres. Idéalement, les gens peuvent se déplacer, se tenir debout, accrocher des choses. Une salle avec une grande table c'est possible mais moins optimal qu'un espace ouvert. N'hésitez pas à prévoir le café, l'eau, les snacks—ce qui compte surtout c'est que les gens ne se sentent pas "captifs". Si l'énergie baisse, ces petits détails aident.

- **Le matériel** :
  - Post-its de plusieurs couleurs
  - Marqueurs noirs (pour écrire lisiblement)
  - Rouleaux de papier à accrocher au mur.
  - Scotch (transparent et couleur) pour tracer des séparations
  - Cutter ou ciseaux

:::tip Collant mais pas trop
Pour créer des zones ou des liens sur le mur, utilisez du scotch de couleur facile à décoller. Évitez le scotch trop adhésif qui abîme le mur ou le papier. Au pire, utilisez des Post-its de grande taille avec des symboles ou des titres pour marquer les zones.
:::

### Pendant l'atelier

**En présentiel**, c'est vraiment le meilleur format. Les échanges interpersonnels sont directs et tout le monde peut interagir facilement avec les éléments du mur, discuter face-à-face avec la personne qui vient d'ajouter quelque chose. Cela rend la collaboration beaucoup plus fluide et les insights émergent naturellement.

Parfois **l'atelier doit être en distanciel**. J'ai eu l'occasion d'utiliser des outils collaboratifs comme **Klaxoon** (une plateforme de collaboration visuelle sous forme de tableau blanc) et **Figma** (qui dispose de templates pour l'Event Storming). D'après mon expérience, ces outils fonctionnent mais avec une limite : les interactions deviennent moins dynamiques. Le facilitateur finit par être l'organisateur principal des Post-its, car gérer les déplacements en temps réel avec plusieurs personnes simultanément devient difficile. Ce n'est donc pas identique au présentiel, et même si ça fait le job, ça reste un compromis surtout sur le plan de la collaboration du groupe.

:::info Outil collaboratif
Certains pourront dire que les outils que j'ai mentionnés ne sont pas adaptés à l'Event Storming. C'est possible, mais dans mon expérience, ils font le travail.
:::

### Après l'atelier

Ce sera au facilitateur de veiller à ce que les résultats de l'atelier soient bien exploités. Pour économiser le temps et l'argent (il est déjà coûteux de bloquer 5-10 personnes pendant 4 heures), une partie de la consolidation se fera en comité restreint avec les décideurs clés :

- **Documenter les résultats** : Prenez des photos du mur. Mieux encore, réorganisez les résultats dans un document ou un outil. Le mur est une source de vérité temporaire, pas permanente.
- **Clarifier les décisions** : Pendant l'atelier, vous avez appris plein de choses. En petit groupe, décidez : qu'est-ce qu'on fait de ça ? Quels problèmes prioritaires allons-nous résoudre ?
- **Planifier les prochaines étapes** : Est-ce qu'on passe à un Process Modeling sur ce domaine ? Est-ce qu'on lance un Design Level sur une zone spécifique ? Où va-t-on après ?
- **Communiquer les résultats** : Une fois les décisions clarifiées, communiquez les conclusions à l'ensemble des participants. Ils méritent de comprendre ce qui a été décidé grâce à leurs contributions.
