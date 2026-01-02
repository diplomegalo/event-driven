---
title: Deroulement d'un atelier
description: Les phases types d'un Event Storming
id: event-storming-deroulement
slug: /event-storming/deroulement
sidebar_position: 4
---

1. **Kick-off** : lancer l'atelier en rappelant le but (ex : "parcourir le processus du dossier de la creation a la cloture") sans detailler les etapes.

1. **Exploration** : collecte libre des evenements au passe sur Post-its orange, encore non ordonnes.

1. **Chronologie** : reorganisation chronologique. Possibles organisations :
    - **Pivot** : evenements a fort impact.
    - **Swimlanes** : lignes par acteur, systeme externe ou sous-processus.
    - **Milestones** : ordres de grandeur temporels (jour, semaine, mois...).
    - **Chapitre** : regroupements par theme.

1. **Description des etapes** :
    1. Les **commandes** (Post-its bleus) derriere les evenements associes et leurs **acteurs** (jaune) ; pour un systeme declencheur, le systeme est note comme commande+acteur.
    1. Les **attributs** necessaires (Post-its verts) pour realiser l'etape.
    1. Les **policy** (Post-its mauves) qui definissent les conditions d'execution.

1. **Parcours utilisateur** : lecture a voix haute du processus pour faire emerger risques et opportunites, noter ce qui reste a traiter.

1. **Narration inversee** : lecture depuis la fin pour trouver les manques (30-40% d'evenements manquants apparaissent souvent). Les evenements de cloture ou pivots sont de bons points de depart.

1. **Perimetre fonctionnel** (bounded context) : tracer les limites de responsabilite et les interactions entre domaines. Peut se faire en fin d'atelier ou dans un atelier dedie.
