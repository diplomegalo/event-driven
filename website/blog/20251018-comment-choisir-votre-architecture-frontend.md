---
title: "Comment choisir votre architecture frontend ? SPA, SSR, SSG"
slug: "frontend-choisir-architecture-spa-ssr-ssg"
description: "Définitions, construction, échanges client/serveur et comparaison selon des critères concrets (complexité, performance, SEO, sécurité, éco-conception) pour SPA, SSR et SSG."
authors:
  - name: "Pierre‑Arnaud Delsaut"
    title: "Wavenet Podcast – Focus Tech"
    url: ""
    image_url: ""
tags: ["Frontend", "Architecture", "SPA", "SSR", "SSG", "WavenetPodcast", "FocusTech"]
date: "2025-10-18"
draft: false
---

# 🦆 Comment choisir votre architecture frontend ?
## SPA, SSR, SSG : le match des architectures selon Wavenet

Après avoir exploré dans un précédent épisode la question *« Les clients légers sont-ils devenus trop lourds ? »*, l’équipe du **Wavenet Podcast – Focus Tech** poursuit sa série consacrée au frontend.  
Cette fois, il s’agit de mettre de l’ordre entre trois architectures souvent citées mais rarement comparées en détail : la **SPA**, le **SSR** et le **SSG**.  

Antoine Richez, Olivier Bossaert et Simon Baudart prennent le temps de **définir chacune d’elles**, d’expliquer **comment elles se construisent**, **comment s’effectuent les échanges entre client et serveur**, et surtout de les **évaluer selon des critères concrets** : complexité, performance, référencement, sécurité ou encore éco-conception —  
autant d’éléments **qui permettront de se faire une meilleure idée de comment procéder à un choix**.  

Un épisode complet, pédagogique, et fidèle à l’esprit Wavenet : clair, technique, et sans détour. 🦆  

---

## 🎬 Trois architectures, trois façons de penser le web

> “C’est une commande, c’est clairement le plus simple de tous.”  
> — Antoine Richez

### 🧩 La SPA — *Single Page Application*  

La SPA, pour *Single Page Application*, est un type d’application dans lequel **une seule page HTML** est chargée, puis actualisée dynamiquement par du **JavaScript exécuté côté client**.  
Le navigateur ne recharge donc jamais complètement la page : les transitions, les animations et les changements de contenu se font **sans nouvelle requête vers le serveur**.  

Antoine résume :  
> “On accède à un site web, et en fait il n’y a qu’une seule page. Les changements sont virtuels : tout ce qu’on voit dans le navigateur, ce n’est que du code dynamique rendu à l’utilisateur.”  

Concrètement, au moment du *build*, le framework (comme React ou Angular) **compile tout le code JavaScript dans un bundle** — souvent à l’aide d’un outil comme *webpack* ou *vite* — puis le distribue avec la page HTML principale.  
Une fois le bundle chargé, **les échanges avec le serveur** se limitent à des **requêtes HTTP** via *fetch* ou une API REST : seules les données sont récupérées, plus jamais des pages complètes.  

Ce modèle permet une navigation fluide et une forte réactivité, mais il a une contrepartie : au premier accès, **le navigateur doit télécharger et exécuter l’ensemble du bundle**, ce qui peut ralentir le chargement initial.  
De plus, comme la page HTML est vide avant exécution du JavaScript, **les moteurs de recherche ont du mal à l’indexer correctement**.  

---

### ⚙️ Le SSR — *Server-Side Rendering*  

Le SSR, pour *Server-Side Rendering*, repose sur un principe différent : **le rendu initial est effectué sur le serveur** avant que la page n’arrive dans le navigateur.  
Lorsqu’un utilisateur accède au site, le serveur génère une page HTML complète — déjà remplie de contenu — qu’il renvoie au client.

Simon précise :  
> “On a un bundle client, un bundle serveur, et c’est ce dernier qui va faire la génération complémentaire au moment où on affiche la page.”  

Ce fonctionnement améliore surtout **l’affichage initial** : le contenu apparaît immédiatement, sans attendre que le JavaScript ait tout reconstruit.  
C’est une approche utilisée par des frameworks comme **Next.js** ou **Nuxt.js**, qui combinent un bundle client (pour l’interactivité) et un bundle serveur (pour le rendu).  

Mais cette organisation introduit aussi de la complexité :  
> “Le code JavaScript tourne dans deux environnements différents : côté navigateur et côté serveur. Toutes les API ne sont pas disponibles partout.”  

Par exemple, une fonction de géolocalisation fonctionnera côté client, mais pas côté serveur.  
Cette dualité demande donc une rigueur accrue dans le développement, mais elle permet **un rendu perçu plus rapide au chargement initial**.  
Ensuite, la SPA reprend l’avantage : **une fois le bundle chargé, la navigation devient instantanée**, car tout se joue dans le navigateur sans nouvel appel serveur.

---

### 🪶 Le SSG — *Static Site Generation*  

Le SSG, ou *Static Site Generation*, est la troisième approche abordée par les invités.  
Ici, le site est **généré entièrement à l’avance**, avant d’être mis en ligne.  
Chaque page est préconstruite, optimisée et stockée sur le serveur, prête à être servie sans aucun calcul supplémentaire.  

Olivier explique :  
> “Quand on fait une génération statique, on sait exactement ce qu’on va sortir, donc on peut compresser au maximum. Les pages peuvent être précompresser en Gzip ou Brotli, plus efficacement qu’un serveur ne le ferait à la volée.”  

Ce modèle ramène à l’essentiel : **aucun traitement dynamique à la requête**, un hébergement simplifié et **des performances remarquables** —  
au point de permettre **le support d’un grand nombre d’utilisateurs simultanés** sans infrastructure complexe.  
Le serveur se contente de distribuer des fichiers statiques, ce qui réduit la latence et la consommation de ressources.  

Simon ajoute :  
> “Le SSG, c’est du neuf avec du vieux. On revient aux sites statiques, mais avec les outils d’aujourd’hui.”  

Le revers, c’est le **manque de dynamisme** : pour actualiser le contenu, il faut relancer la génération.  
Mais pour des sites à contenu stable — **vitrines, blogs, documentations techniques ou catalogues e-commerce à faible fréquence de mise à jour** —, le SSG offre un excellent compromis entre rapidité, simplicité et capacité de montée en charge.

---

## 🪶 Conclusion – tout est une question de choix

> “En résumé, le SSG gagne sur les performances et la sécurité,  
> le SSR reste l’entre-deux,  
> et la SPA s’impose dès qu’on cherche du dynamisme.”  
> — Pierre-Arnaud Delsaut  

À la fin de l’épisode, les invités tombent d’accord sur un point : **aucune architecture n’est universellement meilleure**.  
Chacune répond à des besoins précis, et c’est la nature du projet — sa fréquence de mise à jour, son public, ses exigences de rapidité ou de référencement — qui détermine le bon choix.  

### ⚙️ Dynamisme et expérience utilisateur  

Le **dynamisme** est souvent l’argument décisif.  
Antoine, Simon et Olivier en discutent longuement : la **SPA** reste la plus interactive, car tout s’exécute côté client.  
Une fois le bundle chargé, la navigation devient immédiate, les transitions sont fluides et l’expérience utilisateur reste constante.  

Le **SSR**, lui, offre un bon compromis : la première page s’affiche très vite, et la suite repose sur une logique hybride.  
Mais chaque nouvelle page déclenche un rendu serveur, ce qui introduit une légère latence entre les interactions.  

Le **SSG**, enfin, est le **plus statique** des trois modèles.  
Les pages sont **pré-générées et servies telles quelles**, sans logique applicative ni mise à jour à la volée.  
Cette absence de calcul en temps réel explique ses performances et sa stabilité, mais limite naturellement la capacité à intégrer du contenu dynamique.  

### 🎯 Adapter le modèle au contexte  

| Besoin principal | Architecture la plus adaptée |
|------------------|------------------------------|
| Application interactive ou Intranet | **SPA** |
| Site à forte visibilité nécessitant référencement et contenu dynamique | **SSR** |
| Contenu stable, fort trafic, recherche de performance | **SSG** |

Le **SSG** se distingue par sa vitesse, sa sécurité et sa sobriété.  
Le **SSR** équilibre les contraintes de SEO et d’interactivité.  
Et la **SPA** reste incontournable pour les applications riches ou connectées.  

Tout est donc une question de priorité : performance, dynamisme ou simplicité.

---

### 🔮 Et la suite ?  

L’épisode se termine sur une ouverture vers le prochain sujet : le **Headless**.  
> “C’est un peu le teasing de l’épisode prochain, sur lequel on essaiera de parler du headless.”  

Ce nouveau modèle, qui sépare le contenu (géré dans un CMS) de la présentation (rendu par une SPA, un SSR ou un SSG), sera au cœur du prochain épisode de la *Frontend Series – Focus Tech*.

---

**Tags :** #Frontend #Architecture #SPA #SSR #SSG #WavenetPodcast #FocusTech  
**Auteur :** Pierre‑Arnaud Delsaut  
