---
title: Message Routing
description: Patterns de routage de messages dans les systèmes de messagerie asynchrone
draft: true
---

Le **Message Routing** traite la manière de diriger les messages vers la bonne destination en fonction de leur contenu, leurs propriétés ou des règles métier. C'est le système nerveux qui fait circuler les messages dans une architecture asynchrone.

Les patterns de routage permettent de construire des flux de messages flexibles et adaptables aux besoins changeants des systèmes distribués : 

- **Content-Based Router** - Achemine un message vers sa destination en inspectant son contenu (ex: trier les commandes par type, router les événements par région).
- **Message Filter** - Ignore ou bloque certains messages selon des critères pour filtrer les événements obsolètes ou les doublons.
- **Dynamic Router** - Détermine dynamiquement la destination à l'exécution en consultant une table de lookup ou une source externe.
- **Recipient List** - Envoie un message à plusieurs destinataires (abonnés) pour notifier plusieurs systèmes d'un événement important.
- **Splitter** - Divise un message unique en plusieurs sous-messages pour traiter les sections d'un message individuellement.
- **Aggregator** - Combine plusieurs messages en un seul pour collecter et fusionner les réponses de plusieurs systèmes.
- **Resequencer** - Réordonne les messages arrivant dans le désordre pour garantir l'ordre de traitement des événements.
- **Routing Slip** - Ajoute dynamiquement au message l'étape suivante à exécuter (choregraphie).
- **Process Manager** - Orchestre le routage à travers plusieurs étapes pour gérer l'orchestration complexe des workflows distribués (orchestration).
