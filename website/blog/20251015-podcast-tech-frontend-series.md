# Frontend Series – Comment choisir votre architecture frontend

## Introduction

Bonjour et bienvenue dans ce nouvel épisode du podcast Wavenet !  
On poursuit aujourd’hui notre série Frontend Series, suite directe de l’épisode précédent où l’on se posait une question simple : les clients légers sont-ils devenus trop lourds ? Après avoir posé les bases et exploré ensemble ce qu’étaient la SPA (Single Page Application), la SSR (Server-Side Rendering) et la SSG (Static Site Generation), pourquoi elles avaient émergé, et les défis qu’elles posent aujourd’hui, il est temps d’aller plus loin et de mettre un peu d’ordre dans tout ça.  

Dans cet épisode, on va s’atteler à définir ces trois grandes architectures frontend que sont la SPA, la SSR et la SSG en expliquant leurs scénarios de construction et la manière dont s’effectuent les échanges entre client et serveur. Mais on va aussi et surtout les comparer sur base de critères concrets, pour vous donner les clés, chers auditeurs, afin d’y voir plus clair lors de vos choix d’architecture.  

Et pour rendre l’exercice plus vivant, nos invités – Antoine Richez, Olivier Bossaert et Simon Baudart – ont accepté de noter chaque architecture sur une série de critères essentiels : performance, SEO, complexité, scalabilité… De quoi donner un aperçu nuancé des forces et des limites de chaque approche.

## Présentation des invités

Aujourd’hui, j’ai le plaisir d’accueillir :  
- **Antoine Richez**, développeur full stack, à l’aise en .NET, curieux de Go et de Rust. Côté frontend, il pratique surtout des architectures SPA avec Angular et React.  
- **Olivier Bossaert**, architecte solution, passionné de frontend (SPA, SSR, SSG), toujours partant pour explorer de nouvelles technologies.  
- **Simon Baudart**, architecte solution, expert IA, .NET et Azure, impliqué chez Wavenet dans les choix technologiques frontend.  

Tous trois travaillent chez **Wavenet**.

## Chapitre 1 – Les scénarios de build et d’échange client/serveur

### La SPA (Single Page Application)

La SPA repose sur un rendu entièrement côté client. L’application est construite en un ou plusieurs bundles JavaScript et CSS, puis chargée dans le navigateur. Une fois initialisée, elle gère la navigation et les mises à jour de contenu via des appels API (REST ou GraphQL). Ce modèle favorise la fluidité et la réactivité, mais peut allonger le temps de chargement initial.

### La SSR (Server-Side Rendering)

La SSR génère le HTML côté serveur à chaque requête. L’utilisateur reçoit une page déjà rendue, rapidement visible et indexable par les moteurs de recherche. Cette approche renforce la perception de performance mais augmente la charge côté serveur, notamment pour les sites à fort trafic.

### La SSG (Static Site Generation)

La SSG consiste à pré-générer les pages lors du build. Le contenu est servi statiquement depuis un CDN, ce qui garantit une vitesse d’affichage optimale et une empreinte serveur minimale. Cette approche est idéale pour les contenus stables, mais demande des mécanismes de régénération pour les données dynamiques.

## Chapitre 2 – Les critères de comparaison

Les critères retenus pour ce comparatif sont :  
1. Complexité / Flexibilité de mise en œuvre  
2. Performance frontend & réactivité (UX/UI)  
3. Performance backend, scalabilité & coût d’infrastructure  
4. SEO (référencement naturel)  
5. Sécurité & gestion des sessions  
6. Éco-conception  

## Chapitre 3 – Comparatif des architectures

### Complexité / Flexibilité de mise en œuvre

Sur le plan de la mise en œuvre, la SPA s’impose comme la solution la plus simple et la plus flexible. Elle repose sur un build unique côté client et un hébergement statique, ce qui permet de démarrer rapidement et de s’adapter facilement aux besoins du projet.  

> "C’est une commande, c’est clairement le plus simple de tous."  
> — *Antoine Richez*

Le SSR, en revanche, introduit une couche supplémentaire de complexité. Il nécessite un rendu côté serveur, un hébergement dynamique et des compétences plus variées pour mettre en place la chaîne complète. C’est une architecture plus lourde à déployer et à maintenir, mais qui offre en contrepartie plus de contrôle sur le rendu.  

> "Ah ben d’office là c’est un peu plus compliqué, on est obligé d’implémenter un hébergement côté serveur… Ça, c’est le plus difficile à mettre en place."  
> — *Simon Baudart*

Enfin, le SSG se positionne entre les deux : il conserve la simplicité du statique tout en ajoutant une étape de génération au moment du build. Cette étape nécessite une organisation adaptée du contenu, mais elle reste accessible et prévisible à l’échelle d’un projet.  

En résumé, la SPA offre une grande facilité de mise en œuvre, le SSR demande une architecture plus complexe à orchestrer, et le SSG représente un compromis efficace entre simplicité et rigueur dans la préparation du contenu.  

---

### Performance frontend et réactivité (UX/UI)

Sur le plan de la performance ressentie par l’utilisateur, les trois architectures se distinguent avant tout par leur manière de gérer le rendu des pages et la dynamique du contenu.  

Le SSG se montre imbattable en matière de vitesse d’affichage : les pages sont déjà prêtes et servies telles quelles, sans traitement serveur au moment de la consultation. Cette approche garantit une expérience ultra fluide sur des sites dont le contenu change peu. Mais elle atteint ses limites dès qu’il s’agit de données actualisées en temps réel ou de contenus fréquemment modifiés.  

> "Le SSG, c’est imbattable pour le temps de chargement, parce que la page est déjà calculée. Mais dès qu’on veut de la donnée qui bouge, il faut régénérer ou bricoler des mécanismes de rafraîchissement."  
> — *Olivier Bossaert*

Le SSR, lui, restitue le contenu côté serveur à chaque requête. L’affichage initial est rapide et complet, ce qui renforce la perception de performance, mais la navigation successive peut se révéler plus lente, car chaque changement de page nécessite un nouvel aller-retour avec le serveur.  

> "C’est surtout visible quand on a des pages de contenu. Après, dès qu’on navigue, ça peut être plus lent, parce qu’il faut tout recharger côté serveur."  
> — *Antoine Richez*

Enfin, la SPA inverse cette logique : le premier chargement est plus long, car tout le code de l’application est téléchargé au départ, mais une fois en mémoire, la navigation devient instantanée. C’est un modèle qui excelle dans les applications riches en interactions ou en transitions fluides.  

> "La SPA, c’est long à charger, mais après, tout se passe côté client, donc c’est fluide."  
> — *Simon Baudart*

---

### Performance backend, scalabilité et coût d’infrastructure

La différence entre les trois architectures se ressent fortement sur la charge serveur et le coût d’exploitation.  

Le SSR est la solution la plus exigeante : chaque requête implique un rendu complet côté serveur, ce qui augmente mécaniquement la consommation de ressources et complique la montée en charge. Ce modèle reste pertinent pour les sites dont le contenu doit être personnalisé ou actualisé en temps réel, mais il se révèle coûteux à grande échelle.  

> "Le SSR, c’est celui qui fait le plus bosser le serveur, parce qu’il doit tout recalculer à chaque requête. Donc si t’as beaucoup de monde, il faut scaler ou mettre du cache."  
> — *Simon Baudart*

Le SSG, à l’inverse, repose sur une génération statique des pages au moment du build, puis sur une diffusion via CDN. Aucun calcul n’est effectué à la volée, ce qui en fait le modèle le plus sobre et le plus scalable.  

> "En SSG, le serveur ne fait rien du tout, tout est prêt à l’avance. T’envoies juste du statique, donc c’est rapide et ça coûte quasi rien."  
> — *Olivier Bossaert*

Entre ces deux extrêmes, la SPA offre un équilibre intéressant : elle délègue la logique applicative au client et ne sollicite le serveur que pour les appels API. La charge est donc reportée sur le front, et la scalabilité dépend essentiellement de la conception et du dimensionnement des services backend.  

> "La SPA, elle tape dans les API. Si ton backend est bien dimensionné, ça encaisse. C’est juste un autre type de charge."  
> — *Antoine Richez*

En résumé, le SSG l’emporte en efficacité et en coût d’exploitation, le SSR se justifie pour des besoins de personnalisation avancée, et la SPA s’impose comme une solution intermédiaire, souple mais dépendante de la robustesse de son backend.  

---

### SEO (référencement naturel)

Sur le plan du référencement, la différence entre les trois approches est nette et souvent décisive dans le choix d’une architecture.  

Le SSG et le SSR partagent un avantage majeur : le contenu est déjà présent dans le HTML au moment du chargement, ce qui facilite grandement le travail des moteurs de recherche. Le SSG se distingue encore davantage, car les pages statiques, servies instantanément, améliorent les indicateurs de vitesse et donc le score SEO global.  

> "Le SSG, c’est clairement le top pour le SEO. Google adore la vitesse, et comme tout est déjà prêt, ça passe direct."  
> — *Olivier Bossaert*

Le SSR obtient également de très bons résultats, notamment pour les sites dont le contenu évolue fréquemment.  

> "Avec le SSR, la page est rendue à la volée, donc les robots reçoivent déjà le contenu complet, sans devoir exécuter le JavaScript."  
> — *Simon Baudart*

La SPA, en revanche, reste la moins adaptée au référencement naturel. Le contenu étant généré côté client après exécution du JavaScript, il n’est pas directement accessible aux crawlers. Certaines solutions permettent d’atténuer cette faiblesse, comme le prébuild ou le prerendering, qui consistent à générer une version statique des pages à l’avance. Mais ces options ajoutent de la complexité à la chaîne de build et contredisent en partie la philosophie initiale de la SPA, ce qui en fait une solution rarement optimale pour le SEO.  

> "Une SPA, si on ne fait rien de spécial, Google ne voit quasiment rien. Il faut rajouter une couche de rendu ou du prébuild pour que ça marche bien."  
> — *Antoine Richez*

---

### Sécurité et gestion des sessions

La sécurité et la gestion des sessions varient fortement selon l’architecture choisie, car elles dépendent du mode d’exécution du code et de la manière dont les données sensibles transitent entre client et serveur.  

Dans le cas du SSR, la gestion des sessions repose souvent sur le serveur, via des cookies ou des tokens stockés côté backend. Ce modèle centralisé offre un certain contrôle, mais augmente aussi la surface d’exposition et la complexité de gestion, notamment en cas de montée en charge.  

> "Avec le SSR, tu peux tout gérer côté serveur, donc t’as plus la main sur les sessions, mais c’est aussi plus lourd à maintenir et à sécuriser."  
> — *Simon Baudart*

La SPA et le SSG adoptent une approche inverse : l’authentification se fait côté client via des protocoles comme OAuth2 ou OpenID Connect, et les appels API s’occupent de vérifier les autorisations. Ce découplage rend la sécurité plus prévisible et plus facile à auditer, surtout dans un contexte distribué ou multi-application.  

> "Sur une SPA ou un site statique, t’as un token côté client et les API qui font le job derrière. C’est plus simple à scaler et tu maîtrises mieux ce qui transite."  
> — *Olivier Bossaert*

Le SSG tire parti de son absence de logique serveur en production : il sert uniquement du contenu statique, limitant fortement les vecteurs d’attaque. La sécurité se concentre alors sur les endpoints d’API et la gestion des clés d’accès, sans exposition directe du code applicatif.  

> "En SSG, y a pas de serveur applicatif, donc moins de surface d’attaque. Le vrai sujet, c’est les API, pas le rendu."  
> — *Antoine Richez*

En résumé, le SSR offre un contrôle accru sur les sessions mais complexifie la maintenance, tandis que la SPA et le SSG privilégient des mécanismes modernes et découplés, plus simples à sécuriser et à faire évoluer dans des environnements distribués.  

---

### Éco-conception

La question de l’impact environnemental prend une place croissante dans les choix d’architecture, et les différences entre SPA, SSR et SSG sont ici particulièrement visibles.  

Le SSR est le modèle le plus énergivore. En générant les pages à chaque requête, il sollicite fortement le serveur et consomme davantage de ressources, surtout en cas de trafic important. Cette approche nécessite un dimensionnement plus conséquent et une surveillance continue de la charge.  

> "Le SSR, ça consomme plus, parce que tu refais du calcul en permanence. Si t’as beaucoup de hits, tu fais tourner les serveurs pour rien sur du contenu qui change pas."  
> — *Simon Baudart*

Le SSG, à l’inverse, est celui qui se rapproche le plus des principes de sobriété numérique. Les pages sont construites une seule fois, puis servies sans calcul supplémentaire. La diffusion via CDN limite les traitements à la demande et réduit la consommation énergétique globale.  

> "Le SSG, c’est le plus propre. Tu construis une fois, et après tu sers du statique. Moins de calcul, moins d’énergie, moins de serveurs."  
> — *Olivier Bossaert*

La SPA se situe entre les deux : elle diminue la charge côté serveur, mais peut transférer une lourde empreinte côté client si les bundles JavaScript sont volumineux ou mal optimisés. Les outils modernes de build, comme Vite ou Webpack 5, atténuent ce problème, mais une attention particulière doit être portée à la taille du code distribué et au cache.  

> "La SPA, ça peut être léger si tu bosses bien ton bundle, mais sinon tu fais télécharger 3 Mo de JS à tout le monde. C’est pas très green."  
> — *Antoine Richez*

En somme, le SSG incarne aujourd’hui le meilleur compromis entre performance et sobriété énergétique, là où le SSR reste le plus coûteux à faire tourner et la SPA dépend étroitement de la rigueur appliquée à son optimisation.  

---

## Conclusion

Au terme de ce comparatif, une idée s’impose : il n’existe pas de solution universelle. Le choix entre SPA, SSR et SSG dépend avant tout du contexte, du type de contenu et des priorités du projet.  

La SPA séduit par sa simplicité et sa fluidité côté client, idéale pour les interfaces riches et les applications interactives. Le SSR s’impose lorsqu’il faut concilier fraîcheur des données et accessibilité immédiate, au prix d’une infrastructure plus lourde. Quant au SSG, il reste le modèle le plus sobre et le plus rapide pour les sites à contenu majoritairement statique.  

> "Le choix dépend toujours du besoin et du contexte. On ne fait pas du SSG ou du SSR pour le principe, mais parce que c’est cohérent avec ce qu’on veut faire."  
> — *Olivier Bossaert*

> "Aujourd’hui, on fait rarement du pur SSG ou du pur SSR, c’est souvent un mélange des deux."  
> — *Simon Baudart*

> "Faut pas opposer les technos, faut juste savoir pourquoi on les choisit."  
> — *Antoine Richez*

En pratique, les projets modernes combinent de plus en plus ces approches : pages statiques pour le contenu stable, rendu serveur pour les parties dynamiques, et composants clients pour les interactions. Ce modèle hybride, rendu possible par les frameworks actuels, permet d’adapter le rendu aux besoins tout en maîtrisant les performances et les coûts.  

Cet épisode a donc tenu sa promesse : donner les clés pour comprendre les différences entre les architectures frontend et aider chacun à choisir la solution la plus adaptée à son projet.
