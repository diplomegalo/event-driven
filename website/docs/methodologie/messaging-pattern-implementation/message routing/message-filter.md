---
title: Message Filter
description: Pattern de filtrage de messages dans les systèmes de messagerie asynchrone
draft: true
---

## Objectif

Le **Message Filter** permet de filtrer les messages en fonction de critères spécifiques, en acceptant certains messages et en rejetant d'autres. L'objectif est de **réduire le bruit** dans un flux de messages en éliminant ceux qui ne sont pas pertinents pour un destinataire donné, sans créer de nouvelles queues ou canaux dédiés.

Contrairement au Content-Based Router qui **dirige** les messages vers différentes destinations, le Message Filter **accepte ou refuse** un message selon des conditions. C'est une forme de tamisage qui améliore l'efficacité en évitant de traiter les messages non pertinents et en réduisant la charge des systèmes en aval.

## Contraintes qu'il résout

1. **Surcharge des traitements** - Éviter que les systèmes en aval traitent des messages non pertinents (coûteux en CPU, mémoire, stockage)
2. **Réduction du bruit** - Éliminer les événements obsolètes, dupliqués ou hors contexte d'un destinataire spécifique
3. **Éviter la prolifération de canaux** - Au lieu de créer une queue par type de consommateur, on utilise un seul canal avec des filtres
4. **Consommation sélective** - Un système ne traite que ce qui le concerne vraiment

## Dangers et pièges

1. **Perte silencieuse de messages** - Un message filtré disparaît sans trace, risque d'oublier des cas métier importants
2. **Règles de filtrage complexes et fragiles** - Les conditions peuvent devenir difficiles à maintenir et à déboguer
3. **Difficultés de débogage** - Impossible de savoir si un message a été filtré ou jamais envoyé (boîte noire)
4. **Duplication logique** - Si plusieurs systèmes appliquent les mêmes filtres, on a de la redondance et des incohérences possibles
5. **Violation de la cohérence** - On peut créer des inconsistances métier si le filtrage n'est pas correctement aligné avec la logique du domaine

::: note Trade-off de performance et coûts infrastructure

En gagnant en performance côté consommateurs (qui ne traitent plus les messages inutiles), on **perd de l'autre côté** en charge sur le message broker :

- Le tri qui n'était pas fait dans les consommateurs est désormais effectué dans le broker
- La collection de filtres peut vite devenir énorme et complexe
- Cela impacte directement les **coûts infrastructure** (CPU, mémoire, bande passante du broker)

Il est donc impératif de discuter avec les équipes d'infrastructure pour :

- Valider que le broker peut supporter la charge additionnelle
- Mesurer l'impact réel sur les coûts
- Mettre en place du monitoring sur les règles de filtrage
- Évaluer un équilibre entre filtrage au niveau broker vs. au niveau consommateur selon le contexte
:::