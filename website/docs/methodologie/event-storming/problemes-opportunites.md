---
title: Problèmes et opportunités
description: Identifier, prioriser et traiter ce qui ressort de l'atelier
sidebar_position: 5
---

:::info En résumé
L'Event Storming est un processus où **les problèmes et opportunités émergent naturellement** au fil des discussions. Plutôt que de chercher la perfection immédiate, l'objectif est de **capturer tous les points** (avec des Post-its fuchsia pour les problèmes), puis de **prioriser par vote** ce qui mérite d'être traité en priorité. Cette approche permet de transformer les découvertes de l'atelier en actions concrètes.
:::

## Identifier problèmes et opportunités

### Tout au long de l'atelier

L'identification des **problèmes** se fait naturellement durant toutes les phases de l'atelier. Dès qu'un participant identifie quelque chose de problématique, il le note sur un Post-it **fuchsia** et le colle à proximité de l'événement ou de l'étape concernée.

Un problème peut être :

- Une **incompréhension** : "Qui décide ici ?"
- Un **manque d'information** : "On ne sait pas quelle donnée est nécessaire"
- Une **erreur potentielle** : "Que se passe-t-il si le système externe ne répond pas ?"
- Une **ambiguïté** : "Deux équipes ont une vision différente de cette étape"
- Une **complexité inutile** : "Cette étape pourrait être simplifiée"

De même, les **opportunités** émergent lorsque les participants réalisent qu'un processus pourrait être amélioré :

- Une **automatisation** possible
- Une **simplification** du flux
- Une **réduction de coûts** ou de délais
- Une **standardisation** avec d'autres processus

:::tip Le rôle du facilitateur
Le facilitateur doit encourager la capture des problèmes sans jugement. Toute question, tout doute, toute tension est une opportunité d'apprentissage. Ne cherchez pas à résoudre immédiatement : notez et continuez. La résolution viendra après.
:::

### Le prisme des différents profils révèle différents problèmes et opportunités

Chaque rôle apporte son expertise et identifie des problèmes et opportunités spécifiques :

- **Le développeur** pense aux **validations**, **erreurs techniques**, **paramètres manquants**, **performances**
- **L'architecte** pense au **découpage des responsabilités**, à la **scalabilité**, à la **sécurité** et aux **autorisations**
- **Le métier** pense à la **simplicité d'usage**, à la **clarté des processus** et à la **pertinence des données**

C'est précisément cette **diversité de perspectives** qui fait la richesse de l'Event Storming. Les problèmes techniques et les opportunités que le développeur identifie sont souvent invisibles pour le métier, et vice versa.

## Prioriser les problèmes

### Pourquoi prioriser ?

À la fin d'un atelier, le mur peut être couvert de dizaines de Post-its fuchsia. Tous ne sont pas égaux : certains sont bloquants, d'autres sont des détails ou encore un blocage personnel. Prioriser permet de **focaliser l'énergie** sur ce qui compte vraiment.

### Comment prioriser ?

La méthode la plus simple est le **vote par points** :

1. Donnez à chaque participant **3 à 5 points** (physiquement : petits Post-its, gommettes de couleur, ou points au marqueur)
2. Chacun distribue ses points sur les problèmes qu'il juge **les plus importants** ou **les plus urgents**
3. Les problèmes avec le plus de points remontent naturellement en haut de la liste

:::warning Ne forcez pas le consensus
Il est normal que certains participants votent différemment. Un développeur peut prioriser un risque technique, tandis que le métier priorise une ambiguïté fonctionnelle. C'est justement cette diversité qui permet de voir ce qui compte pour chacun. Le facilitateur arbitre ensuite avec les décideurs clés.
:::

### Et après le vote ?

Une fois les problèmes priorisés :

1. **Traitez les problèmes bloquants immédiatement** : S'il y a un malentendu fondamental sur le processus, clarifiez-le maintenant
2. **Notez les problèmes importants pour la suite** : Ils deviennent des actions à traiter après l'atelier (dans un backlog, par exemple)
3. **Acceptez de laisser certains problèmes de côté** : Tous les problèmes identifiés ne méritent pas d'être résolus. Certains sont des détails ou des cas rares qui ne justifient pas l'investissement

## Opportunités : transformer les découvertes en améliorations

Pendant l'atelier, il émerge régulièrement des **opportunités d'amélioration** : des étapes qu'on pourrait simplifier, des processus qu'on pourrait standardiser, ou des inefficacités qu'on tolérait sans les remettre en question.

### Simplification et rationnalisation

Quelques constats courants :

- **Étapes redondantes** : Vérification faite deux fois par deux systèmes différents
- **Processus contournés** : La procédure officielle n'est jamais suivie ; tout le monde prend un raccourci
- **Complexité héritée** : Certaines étapes existent uniquement parce qu'une ancienne technologie l'imposait, mais ce n'est plus pertinent
- **Variations non documentées** : Chaque équipe exécute le processus différemment, avec sa terminologie et ses outils
- **Écarts entre théorie et pratique** : Le processus officiel décrit quelque chose, mais la réalité opérationnelle est très différente
- **Doublons inutiles** : Plusieurs étapes produisent les mêmes résultats ou collectent les mêmes données de manières presque identiques.

Ces découvertes sont précieuses. Elles invitent à **repenser le processus** : comment pourrait-il être plus simple, plus rapide, plus efficace ? Comment pourrions-nous réduire les variantes et converger vers un flux standardisé ?

:::tip Challenger le statu quo
L'Event Storming n'est pas un simple exercice de documentation. C'est une occasion de remettre en question ce qui "a toujours marché comme ça". Encouragez les participants à poser les vraies questions : "Est-ce vraiment nécessaire ?" ou "Qu'est-ce qui se passerait si on supprimait cette étape ?"
:::

---

## Et si ça se passe mal ?

Voici quelques situations concrètes des problèmes qui peuvent survenir **pendant** l'atelier, à tout moment des étapes :

### Les gens ne trouvent pas d'idées durant l'exploration

**Symptôme** : Silence radio, les gens regardent le vide sans écrire de Post-its.

**Cause** : L'objectif peut ne pas être assez clair, ou la première phase (kick-off) était trop rapide.

**Solution** :

- Relancez avec des questions précises : "Qu'est-ce qui se passe immédiatement APRÈS [l'événement de départ] ?"
- Donnez un exemple : "Imaginez que vous êtes [l'acteur principal], quelle est votre première action ?"
- Impliquez directement un expert métier : "Toi qui le fais tous les jours, quel est le PREMIER événement ?"
- Si ça ne vient toujours pas, c'est peut-être que personne ne maîtrise vraiment le processus. Arrêtez et reportez l'atelier.

### Deux versions conflictuelles du processus émergent

**Symptôme** : "Non non, l'événement X vient AVANT Y" / "Non non, c'est Y qui vient avant X".

**Cause** : Deux équipes ou deux systèmes ont des visions différentes du même processus, ou c'est vraiment ambigu dans la réalité.

**Solution** :

- C'est bon signe : vous avez déjà trouvé un malentendu à clarifier !
- Écoutez les deux versions sans juger, notez-les physiquement sur le mur avec des Post-its fuchsia
- Demandez au métier : "Dans la réalité opérationnelle, laquelle se passe d'abord ?"
- Si c'est vraiment ambigu ou contextuel ("ça dépend"), laissez les deux et notez-le : "à clarifier après l'atelier"

### Le groupe ne progresse plus, se perd dans les détails

**Symptôme** : Vous êtes bloqué sur une phase depuis longtemps, les discussions s'éternisent, les gens commencent à regarder leurs téléphones.

**Cause** : Vous essayez peut-être d'aller trop loin dans les détails, ou vous avez perdu le cap sur l'objectif initial.

**Solution** :

- Rappelez l'objectif : "On fait quoi au juste ici ? Est-ce que ça sert notre but ?"
- Simplifiez : posez la question "Peut-on faire plus simple ?"
- Notez les points complexes comme des problèmes (Post-it fuchsia) et continuez : "C'est bon à savoir, on le traite en Design Level séparé"
- Si vraiment ça bloque, faites une pause de 15 minutes

### Les participants complexifient inutilement

**Symptôme** : Les étapes se multiplient, les conditions s'accumulent, le processus devient incompréhensible.

**Cause** : Les participants ont tendance à vouloir couvrir tous les cas rares ou à reproduire la complexité existante.

**Solution** :

- En tant que facilitateur, challengez : "Est-ce qu'on a vraiment besoin de cette étape ?"
- Posez des questions ouvertes : "Peut-on faire plus simple ici ?"
- Distinguez le **processus nominal** (le cas normal) des **cas d'exception** (à traiter séparément)
- Séparez les étapes critiques des détails secondaires et validez les étapes les unes après les autres
- Rappelez que l'Event Storming sert aussi à **simplifier**, pas juste à documenter l'existant

## Itérations régulières

L'Event Storming n'est pas un exercice ponctuel. Les processus évoluent, les équipes apprennent, les problèmes se révèlent. Des **itérations régulières** permettent de :

- **Affiner les processus** découverts
- **Comparer avec d'autres domaines** pour tendre vers la standardisation
- **Mesurer les améliorations** après avoir traité les problèmes prioritaires

## Le bénéfice : un canal de communication durable

Dans des organisations en silos, réunir des équipes autour d'un processus crée un **canal de communication supplémentaire**. L'Event Storming favorise des **interactions dynamiques et constructives** grâce aux liens créés entre participants.

Les problèmes et opportunités identifiés deviennent un **langage commun** : tout le monde comprend ce qui bloque, ce qui pourrait être amélioré, et pourquoi. C'est cette compréhension partagée qui permet ensuite de collaborer efficacement sur les solutions.
