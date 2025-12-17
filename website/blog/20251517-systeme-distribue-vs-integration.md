---
title: Système distribué vs intégration - quand le manque de cohésion crée l’incohérence
slug: systeme-distribue-vs-integration
description: Dans de nombreuses architectures modernes, le problème du découplage est souvent mal abordé. Cet article explore pourquoi plus de cohérence, et non moins de cohésion, est la clé d’une architecture robuste et fait la distinction entre système distribué et intégration.
date: 2025-12-17
category: Architecture & Design
tags: 
  - Architecture logicielle
  - Architecture d’entreprise
  - Microservices
  - Système distribué
  - Intégration applicative
  - DDD
  - Bounded Context
  - Event-Driven Architecture
  - ESB
  - EAI
authors:
    - pierre-arnaud-delsaut
draft: false
---

# Système distribué vs intégration : quand le manque de cohésion crée l’incohérence

**Plus de cohérence, moins de cohésion — pas l’inverse.**

## Chapeau

Dans de nombreuses architectures modernes dites **microservices**, au cœur de l’**architecture logicielle** et de l’**architecture d’entreprise**, le problème est souvent attaqué par le mauvais angle. On cherche d’abord à réduire la cohésion, à découpler, à isoler les fonctionnalités, en partant du principe que moins de dépendances visibles mènera mécaniquement à de meilleurs systèmes. Or, un principe simple mérite d’être rappelé — transmis par l’un de mes professeurs et largement confirmé par l’expérience de terrain : **plus de cohérence, moins de cohésion**, et non l’inverse.

La cohésion n’est pas un objectif en soi, c’est une conséquence. Ce qui doit guider une architecture, c’est d’abord la cohérence du processus métier, de ses étapes et des données qu’elles manipulent. Chercher à réduire la cohésion sans s’assurer de cette cohérence revient à déplacer les problèmes plutôt qu’à les résoudre.

## Isolation n’est pas autonomie

Est-ce que l'extraction d'un ensemble de fonctionnalités d'une application (A) pour aller simplement les isoler dans une autre application (B) respecte-t-il réellement le principe de découplage ? Pas vraiment, car même si on a tendance à les considérer comme découplées parce qu’elles sont regroupées dans une application (B) qui possède son propre cycle de développement et de livraison, en pratique, la nouvelle application (B) isolée reste toujours dépendante de données et de fonctionnalités de l'application (A) initiale. En outre cette nouvelle application (B) isolées ne maîtrise plus ces dépendances parce qu'elles sont déplacées hors de son périmètre de contrôle.

Dans une solution cohérente, où plusieurs projets ou fonctionnalités vivent au sein d’un même code source, une dépendance cassée se voit immédiatement. Une interface change : le code ne compile plus. Une fonctionnalité est modifiée : les tests tombent. Le problème est clair, localisé et corrigé rapidement.

Dans des architectures beaucoup plus distribuées, une application peut être isolée tout en restant fortement dépendante. Le même changement passe alors souvent inaperçu : le build est vert, le déploiement se fait, et l’erreur n’apparaît qu’à l’exécution d’un cas d’usage précis. Parfois en production. Parfois sans alerte explicite.

En isolant l'application de cette manière, on ne l’a pas rendue autonome. On l’a rendue plus dépendante de contrats de données et de règles qu’elle ne contrôle pas. Casser un lien fort inhérent au processus métier fragilise alors l’architecture au lieu de la rendre robuste. Les erreurs deviennent plus difficiles à détecter, plus coûteuses à diagnostiquer, la maintenance se complique et la lisibilité du système diminue.

Cette distinction entre séparation technique et autonomie réelle est au cœur de l’approche **Domain-Driven Design** telle que formulée par Vaughn Vernon. Celui-ci insiste sur le fait qu’un *bounded context* se construit autour d’un modèle métier cohérent, avec des règles claires et des frontières explicites, et qu’il définit précisément la manière dont il interagit avec les autres contextes, plutôt que de chercher une isolation purement technique.

> "A bounded context defines the boundary within which a domain model applies. Inside this boundary, the model is consistent and unified, and relationships with other bounded contexts are explicitly defined."

*— Vaughn Vernon, **Domain-Driven Design Distilled**, chap. 2 – Bounded Context*

En conclusion, l’autonomie ne se décrète pas par le découplage technique. Elle se construit par la cohérence : cohérence du modèle, des règles et des données qu’un périmètre maîtrise réellement. Le découplage n’est qu’un outil ; sans cohérence préalable, il affaiblit le système au lieu de le renforcer.

## Le vrai scope de la cohérence

Comment définir concrètement le bon périmètre de cohérence ? Où placer le curseur ? Sur le terrain, les mauvaises décisions viennent souvent d’une confusion entre ce qui est **séquentiel**, ce qui est **souhaitable**, et ce qui est **réellement dépendant**.

La première erreur consiste à raisonner en termes d’enchaînement d’étapes. Si une étape vient après une autre, on en déduit qu’elle en dépend. En pratique, ce raisonnement ne tient pas. La séquence décrit un flux nominal, pas une dépendance structurelle. Le bon point de départ n’est pas l’ordre, mais ce qui est nécessaire pour exister : **les données**, et la **tension** que l’on ressent quand on tente de découper.

Les données sont un indicateur simple et brutal. Si une étape doit systématiquement connaître l’état exact d’une autre pour fonctionner, si elle doit relire ou vérifier ailleurs avant de pouvoir décider, alors la dépendance est réelle. Elle n’est pas technique, elle est métier. La déplacer dans un autre système ne la supprime pas ; elle devient simplement plus diffuse et plus difficile à maîtriser.

La tension, elle, se ressent immédiatement lorsqu’on va trop loin dans le découpage. Elle apparaît quand « ça force » : quand on doit appeler un autre système juste pour vérifier, quand on ajoute du transactionnel ou des retries pour masquer un problème logique. Cette tension est un signal. Elle indique que la cohérence du processus dépasse le découpage appliqué. 

Prenons un exemple très concret et proche du quotidien : le processus de commande, paiement et livraison d'un site ecommerce. Ces trois étapes semblent dépendantes l'une de l'autre, notamment parce que le paiement a comme pré-requis la commande. De même pour la livraison qui a pour pré-requis le paiement. Mais est-ce vraiment une dépendance ou est ce que ces étapes sont liés à des domaines différents ? Pour y répondre il faut se poser la question : est ce que l'un peut exister sans l'autre ? Est-ce que je peut payer sans avoir commander un article, ou encore est-ce que je peux être livré sans avoir payé ? Instinctivement on pourrait dire que non, mais en êtes-vous seulement sûr ? 

Allez, au hasard un portefeuille électronique à charger. On peut effectuer un paiement valide sans avoir passé la moindre commande. Le paiement existe donc avant la commande, sans ambiguïté.

Autre situation tout aussi banale : commander une pizza par téléphone et la payer après livraison. Là encore, la livraison a lieu avant le paiement.

Ces exemples montrent que le paiement n’est pas une dépendance structurelle de la commande ou de la livraison, mais un prérequis fonctionnel qui peut être satisfait avant ou après, indépendamment de la chronologie du flux nominal. Ces trois étapes sont donc très indépendantes l'une de l'autre et sont issues de domaines très différents et autonomes. 

Une dépendance réelle est plus stricte : c’est quelque chose qui **ne peut pas exister sans l’autre**. Pas « ne devrait pas ». Pas « ce serait mieux si ». **Ne peut pas**.

Lorsque cette distinction n’est pas faite, on découpe trop tôt, on distribue trop fort, et on crée artificiellement de la tension. Le scope de la cohérence ne se décrète pas ; il se découvre, en observant les données et les fonctionnalités nécessaires, en identifiant ce qui résiste quand on tente de couper, **et en le construisant conjointement avec le métier**.

## Système distribué vs intégration

Lorsqu’on parle de système distribué, on désigne une architecture qui répartit les **étapes d’un même processus cohérent** sur plusieurs composants. La cohérence est partagée et assumée : les étapes restent liées par un langage commun, des règles partagées et des dépendances explicites. C’est ce que Gregor Hohpe et Bobby Woolf décrivent comme une *distributed application*, où la logique globale reste unifiée, bien que physiquement répartie.

À l’inverse, l’intégration correspond à un ensemble de mécanismes permettant à des **systèmes réellement indépendants** de communiquer sans partager une cohérence globale. Chaque système conserve son propre modèle, son cycle de vie et sa responsabilité métier. L’intégration relie, expose et permet l’enrichissement, mais **n’a pas pour objectif de reconstituer un processus de bout en bout**.

Cette distinction est explicitement posée par Hohpe et Woolf dans l’introduction de *Enterprise Integration Patterns*, lorsqu’ils opposent *distributed applications* et *integration*.

*— Gregor Hohpe & Bobby Woolf, **Enterprise Integration Patterns**, Introduction – « Distributed Applications versus Integration », p. xxxviii.*

Les systèmes distribués sont une réponse légitime à un problème précis : **découpler les étapes d’un même processus**. Distribuer, c’est répartir la responsabilité d’un processus cohérent sur plusieurs composants. Et dans ce cadre, cela fonctionne.

La confusion apparaît lorsque l’on utilise des mécanismes d’intégration pour distribuer un processus sans assumer la cohérence qu’il impose. Le transactionnel apparaît, l’orchestration se généralise, la lisibilité disparaît, et la moindre erreur peut faire tomber l’ensemble du système d’information.

Cela ressemble à une cour de récréation sans structure, où un éducateur débordé ne gère plus que les accidents graves. Ce n’est qu’au moment où la sonnerie retentit, que les élèves se rangent par classe et que chaque instituteur reprend la gestion de son groupe, que l’ordre revient. De la même manière, un système d’information retrouve lisibilité et robustesse lorsque chaque cohérence est clairement identifiée et confiée au bon niveau de responsabilité.

## Conclusion

Cet article ne cherche ni à réhabiliter le monolithe, ni à condamner les microservices, ni à ériger l’intégration en solution universelle. Il rappelle l’essentiel : **la qualité d’une architecture ne se mesure pas à son niveau de découplage, mais à la cohérence qu’elle préserve**.

Distribuer un processus est un choix valide, à condition d’assumer la cohérence qu’il impose **et d’éviter une isolation excessive des étapes**. Intégrer des systèmes est pertinent lorsqu’ils sont réellement indépendants. Les problèmes apparaissent quand ces approches sont poussées trop loin ou utilisées hors de leur périmètre.

**Un système n’est pas robuste parce qu’il est fortement découplé, mais parce qu’il est cohérent.  
La cohérence doit précéder la cohésion, pas l’inverse.**

---

## Références

- **Vaughn Vernon**, *Domain-Driven Design Distilled*, Addison-Wesley, 2016.
- **Gregor Hohpe & Bobby Woolf**, *Enterprise Integration Patterns*, Addison-Wesley, 2003.

---

### Note de transparence (IA Act)

Cet article a été rédigé par l’auteur sur la base de son expérience professionnelle. Un outil d’intelligence artificielle a été utilisé **comme aide à la rédaction et à la reformulation**, sans génération autonome de contenu ni substitution à l’analyse humaine. Les positions, exemples et conclusions restent entièrement sous la responsabilité de l’auteur.
