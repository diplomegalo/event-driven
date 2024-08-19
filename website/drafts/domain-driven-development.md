---
titre: Domain Driven Development
---

# Domain Driven Development

## Bounded context

Au sein d'un périmètre (_bounded context_), le modèle de conception est défini par un ensemble de fonctionnalités et de règles partagés par les membres de l'équipe (_ubiquitous language_). Ce modèle se définit de manière stratégique, en fonction des besoins métiers, et tactique, en fonction des contraintes techniques.

D'un point de vue stratégique, l'objectif est de définir la porté du modèle et éventuellement comment mettre en relation plusieurs périmètre entre eux (_context mapping_). Tandis que d'un point de vue tactique, l'objectif est de définir les entités, les valeurs objets, les services et les événements qui composent le modèle.

> :notebook: **Note**: Ici, le terme _modèle_ fait référence au modèle de conception (_design model_) et non au modèle de données (_data model_).

### Building blocks

Le pattern building blocks permet de définir les différents éléments du modèle de données.

- **Aggregate**: Groupe d'entités et de valeurs objets qui sont traités comme une seule unité.
  - **Entity**: Objet identifié par un identifiant unique.
  - **Value Object**: Objet sans identifiant unique.
- **Module**: Groupe de concepts qui sont liés entre eux. Cette notion peut être lié au concept de package en Java ou namespace en C#.

Les _aggregates_ sont manipulés par des :

- **Services**: qui définit la liste des opérations effectuées sur des _aggregates_.
- **Repository**: qui permet de persister et récupérer des _aggregates_.

Un _aggregate_ peut émettre des événements (_domain events_) à la suite d'une opération (_command_) effectuée sur lui. Ces événements sont ensuite consommés par d'autres.

### Context mapping

Le _context mapping_ permet de définir comment mettre en relation plusieurs périmètres entre eux. Pour ce faire l'architecture hexagonale (_ports and adapters_) est une des stratégies les plus utilisées où les _adapters_ permettent de convertir les données d'un périmètre à un autre.

## Ubiquitous langage

L'_ubiquitous language_ est un langage partagé par **tous les membres de l'équipe**. Ce langage est utilisé pour décrire les concepts métiers et techniques du modèle de conception. Il permet de réduire les ambiguïtés et les malentendus entre les membres de l'équipe.

> :notebook: **Note**: "Tout les membres de l'équipe" inclut les développeurs, les testeurs, les chefs de projet, les analystes, les commerciaux, etc. même si l'expert métier est celui qui a le plus d'impact sur le choix des termes.

Ce langage commun est lié à un périmètre (_bounded context_) et est défini dans celui-ci. Autrement dit, chaque périmètre possède ses propres termes et définitions. Par conséquent, hors de ce contexte, les termes peuvent (et vont) avoir une signification différente. L'_ubiquitous language_ n'est donc pas universel, et n'est pas destiné à être partagé entre plusieurs périmètres, de même qu'au niveau globale de l'entreprise.

> :warning: **Attention**: Essayer de partager un langage commun entre plusieurs périmètres où de l'étendre à l'ensemble de l'entreprise va mener irrémédiablement à un échec.

En outre, ce langage est vivant et évolue au fil du temps. Il est donc important de le maintenir à jour et de le partager avec les nouveaux membres de l'équipe. Malgré cela, tenir à jour une documentation à jour est souvent difficile, par conséquent, c'est souvent le code qui fait office de documentation.
