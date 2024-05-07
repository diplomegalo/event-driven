# Event Driven

## Domain Driven Design and Bounded Contexts

- **Domaine** : Le domaine définie l'ensemble des concepts, des règles métier et des entités qui sont liées entre elles et qui définissent un certain contexte métier.
- **Sous-domaine** : Un sous domaine est un sous-ensemble spécifique du domaine qui se concentre sur un aspect particulier du domaine global..
- **Modèle** : Le modèle est une représentation abstraite et simplifiée du domaine et des sous-domaine qui est utilisée pour répondre aux fonctionnalités de ce domaine.
- **Bounded context** : Le contexte limité est une frontière conceptuelle dans laquelle un modèle spécifique est défini et maintenu, de même que les processus, les événements, les règles métier et les entités qui sont liées à ce modèle et pertinent pour un ou plusieurs sous-domaines.

## Communication Structure

Plusieurs manières de voir une structure d'entreprise :

- **Data** : comment les données sont organisées et échangées.
- **Organisationnel** : comment les départements échanges entre eux.
- **Métier** : comment les fonctionnalités sont organisées dans des domaines.

Traditionnellement, une application va gérer les trois. Mais à partir du moment où, de nouvelles données, de nouveaux départements, de nouvelles fonctionnalités viennent s'ajouter, la question se pose de savoir si l'application doit être étendue ou splité.

### Event Driven Communication

L'architecture Event Driven va découpler la production et l'ownership de l'accès à la data. En effet, ce type d'architecture ne propose pas d'accès (via requête ou recherche) aux données, mais l'émission d'event qui vont être consommé par des clients pour traitement. La logique fonctionnelle est donc partagée entre le producteur et le consommateur.

La responsabilité de structure et enrichissement du modèle revient au consommateur qui va implémenter le traitement en fonction de ces besoins sur base d'un ou d'une combinaison d'event, tandis que le producteur va simplement implémenter la notification de l'event selon son propre modèle sans prendre en compte les besoins des consommateurs.

Les events sont donc centralisés sur une event stream et celle-ci devient dès lors la seul source de vérité. Par conséquent, c'est par ce biai qu'un consommateur peut récupérer une information émise par un producteur et les applications se retrouvent libérées de devoir fournir des interfaces de récupération de données.

> Un système peut donc être totalement décommissionné, sans pour autant perdre les données des events.

## Asynchronous Event-Driven Microservices

- **Granularity** : 
- **Scalability**
- **Technology Flexibility**
- **Business Requirement Flexibility**
- **Loosely Coupling**
- **Continuous delivery support**
- **High Testability**
