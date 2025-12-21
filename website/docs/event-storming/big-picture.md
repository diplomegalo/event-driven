---
title: Big picture et definitions
description: Principes, legende et pourquoi faire un atelier Event Storming
id: event-storming-big-picture
slug: /event-storming/big-picture
sidebar_position: 2
---

L'Event Storming est un processus d'animation qui permet une modelisation collaborative afin de visualiser et de comprendre les processus metiers complexes. Cette technique est particulièrement utile dans le cadre des architectures evenementielles, car elle permet de modeliser les etapes d'un processus sur base des evenements qui les composent. Il permet de recolter l'information au travers du prisme de plusieurs acteurs de maniere a obtenir une vision globale du processus. Pour ce faire, les participants collaborent pour identifier les evenements, les acteurs qui les declenchent, les donnees necessaires pour les operer et les systemes externes (boundaries).

Les Post-its et couleurs usuels :

1. **Evenements** : en **orange**, ils representent les changements d'etat. Toujours au passe. Exemple : "La facture est payee".
1. **Commande et acteurs** : en **bleu** pour les commandes et en **jaune** pour les acteurs. Une commande est une action qui declenche un evenement (notion de command en DDD/CQRS). Un acteur est une personne qui l'execute.
1. **Modele** : en **vert** (fonce), la liste des informations exhaustives necessaires durant le traitement (parametres, objets, donnees, etc.).
1. **Probleme** (risk) : en **fuchsia**, les problemes de tous types lies a l'etape (incomprehension, manque d'info, erreur, etc.).
1. **Systeme externe** : en **jaune** (clair), les systemes externes qui interagissent avec le processus et declenchent des evenements.
1. **Contexte** (policy) : en **mauve**, la raison ou condition qui entoure l'execution d'une commande (si, lorsque, a chaque fois que...).

Un evenement peut etre declenche par :

- Une action utilisateur (commande et acteur).
- Un systeme externe.
- Un autre evenement (planifie ou non).

> :pen: **Note** : Ces definitions peuvent etre affichees comme legende pendant l'atelier.

## Pourquoi faire un atelier Event Storming ?

Les raisons de faire un atelier d'Event Storming sont directement liees aux objectifs et avantages de cette methode :

1. **Modeliser un processus metier simplement et efficacement** : identifier evenements, commandes, acteurs, modeles, systemes externes.
1. **Creer un langage commun** entre les acteurs d'un processus : etablir un glossaire partage.
1. **Identifier problemes et opportunites avec une vue globale** : manques, ameliorations, simplifications, nouveaux besoins.
1. **Definir les limites d'un ou plusieurs perimetres fonctionnels** : organiser les fonctionnalites dans des zones de responsabilite claires.
1. **Ameliorer la collaboration et le transfert d'informations** : echanges dynamiques, co-construction, recouvrement de processus oublies.

Cette methode se prete bien aux ateliers bases sur ces principes, adaptables au besoin.

## Ce que l'Event Storming n'est pas

L'Event Storming n'est pas une methode de modelisation de processus metier classique telle que le BPMN. Les Post-its offrent une approche visuelle et collaborative, sans viser un standard formel.

> :pen: **Note** : Alberto Brandolini, initiateur de la methode, a commence un [livre](https://www.eventstorming.com/book) disponible sur son [site](https://www.eventstorming.com/). Le livre reste en edition (2024).
