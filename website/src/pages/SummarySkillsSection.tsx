import React from "react";
import styles from "./style.module.css";

/* Section Compétences repliable */
export function SummarySkillsSection() {
  return (
    <section className={styles.profileSection}>
      <details>
        <summary className={styles.title}>Résumé des Compétences</summary>
        <div className={styles.titleLine}></div>
        <ul className={styles.profileList}>
          <li>
            💻 .NET, GO, Python | HTML, CSS, JS, TS | React, Web Component
          </li>
          <li>🔎 T-SQL, PL-SQL | SQL Server, Oracle, Redis</li>
          <li>
            👷 Pattern de développement et d’intégration | DDD, TDD & BDD |
            Clean Architecture
          </li>
          <li>🤸 Agile Scrum | Event Storming | UML</li>
          <li>🚚 Terraform, Kubernetes (AKS, Openshift, Minikube), Istio</li>
          <li>🏗️ Architecture Microservice (SOAP & REST) & Event-Driven</li>
          <li>
            ☁️ Certification Designing Azure Infrastructure Solutions en cours
          </li>
        </ul>
      </details>
    </section>
  );
}
