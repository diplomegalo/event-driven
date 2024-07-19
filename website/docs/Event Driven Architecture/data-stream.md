---
title: Data Stream
---

Pourquoi choisir une architecture événementielle avec une _event stream_ ? De manière globale, l'implémentation d'un flux de données (_streaming_) dans une entreprise permet de répondre à besoins de :

- Disposer de données de manière rapide, avec une latence faible.
- Organiser, traiter et stocker une quantité de données presque infinie en temps réel.

Autrement dit, lorsque la question se pose de comment consommer et traiter une quantité de données presque infinie de manière efficace, rapide et cohérente, la réponse est de mettre en place un flux de données (_streaming_). Ceci peut d'ailleurs être repris comme une des définitions du streaming.

## Single Source of Truth (SSOT) et Single version of the truth (SVOT)

:construction: Work in progress

## Event Stream

L'une des pistes de mise en place d'une architecture microservices est de mettre en place un flux de données entre les différents services. Cela permet de déclencher des actions en fonction des événements qui se produisent dans le système.

Ces événements sont stockés dans des _event streams_ qui sont des flux de données immuables et ordonnés.

### Production vs Consommation

La mise en place d'un _event stream_ va permettre de séparer la production des événements de leur consommation. Cela permet de déconnecter les différents services et de les rendre indépendants les uns des autres. En outre, les applications productrice n'étant plus en charge de la consommation des événements, elles peuvent se concentrer sur leur métier et ne pas être impactées par les éventuels problèmes de performance lors de la consommation.

#### Couplage de la production et de la consommation

Dans une architecture classique, la production et la consommation des événements sont couplées au sein d'une même application. L'application va utiliser une couche de persistance pour stocker des données et une couche de consommation pour lire ces données. Au mieux ces deux couches sont séparées (par exemple en utilisant des vues matérialisées) mais elles restent au sein d'une même application.

![coupled-production-consommation](../../static/img/data-stream-production-vs-consomation-coupled.png)

#### Découplage de la production et de la consommation

Dans une architecture événementielle avec une _event stream_, la production et la consommation des événements sont découplées. Les événements sont produits par une application et consommés par une autre application. Les événements sont stockés dans un _event stream_ qui est un flux de données.

Les applications productrices n'ont plus à se soucier de la consommation des événements en offrant API spécifique et peuvent se concentrer sur leur métier.

Les applications consommatrices n'ont plus à se soucier de la production des événements et vont chercher les données dans une zone centralisé. Les applications productrices et consommatrices sont donc indépendantes les unes des autres.

En outre, en fonction des framework et des outils utilisés, il est possible de mettre en place des mécanismes de transformation des données pour créer de nouvelles stream adaptées aux besoins des applications consommatrices, de même que des _materialized state_ qui permettent une lecture des données multi sources dans un format de table SQL adapté à l'application consommatrice.

![not-coupled-production-consommation](../../static/img/data-stream-production-vs-consomation-not-coupled.png)

### Organisation des équipes

:construction: Work in progress

