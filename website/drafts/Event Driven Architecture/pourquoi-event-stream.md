## Single Source of Truth vs. Single Version of Truth

_Single Source of Truth_ désigne un modèle de gestion des données où toutes les données sont maintenues et mises à jour à partir d'une seule source centrale. Cette source est considérée comme l'autorité ultime pour les données dans un système.

_Single Version of Truth_ désigne le concept où les données peuvent être distribuées à travers plusieurs systèmes, mais il existe une version consolidée et validée des données qui est considérée comme la version officielle ou "vérité".

### Avec Event Stream

Dans une architecture orienté événement, le _single source of truth_ est l'_event stream_ qui contient l'ensemble des événements qui ont été émis par les différents systèmes. Les _event streams_ sont stockés de manière durable et sont accessibles par tous les systèmes qui en ont besoin. Aucune données ne peut être modifiée ou supprimée dans un _event stream_ et les ajouts se font sur l'event stream, de même quelle ne peuvent être dupliquées dans les systèmes qui les consomment. Néanmoins, chaque microservice peut stocker des données qui lui sont propres et qui sont utiles pour son traitement.

Dans une architecture orientée événement, le _single version of truth_ est distribué à travers les différents systèmes qui consomment les événements. Chaque système est responsable de la gestion des événements qu'il reçoit et stocke les informations utiles pour son traitement. Les données sont gardées et le cas échéant dupliquées dans chaque système qui en a besoin. Les mises à jour des données peuvent se faire de manière décentralisée, mais sont ensuite consolidées dans le _data store_ propriétaire de la donnée.

### Sans Event Stream