import React from "react";
import styles from "./style.module.css";

const skills = [
  { category: ".NET", details: "Web API", stars: 4 },
  { category: ".NET", details: "MVC", stars: 2 },
  { category: ".NET", details: "Blazor", stars: 1 },
  { category: "ORM", details: "EFCore / Entity Framework", stars: 4 },
  { category: "ORM", details: "PetaPoco / Dapper", stars: 2 },
  { category: "Frontend Web", details: "HTML / CSS / JS / TS", stars: 3 },
  {
    category: "Frontend Web",
    details: "React / Webpack / Babel / ESLint / Node.js / Npm",
    stars: 2,
  },
  { category: "Serialisation & Config", details: "XML, YAML, JSON", stars: 4 },
  { category: "Scripts", details: "GO / Python", stars: 2 },
  { category: "Data", details: "T-SQL", stars: 3 },
  { category: "Data", details: "PL-SQL", stars: 2 },
  { category: "Méthodologie", details: "DDD / UML / Agile", stars: 4 },
  { category: "Méthodologie", details: "Event Storming", stars: 3 },
  { category: "Méthodologie", details: "TDD / BDD", stars: 2 },
  { category: "SGBD", details: "SQL Server / Oracle", stars: 3 },
  { category: "SGBD", details: "Redis", stars: 2 },
  { category: "SGBD", details: "Postgree / MongoDB", stars: 1 },
  { category: "Data Virtualisation", details: "Denodo / Polybase", stars: 1 },
  { category: "OS", details: "Windows / Windows Server", stars: 4 },
  { category: "OS", details: "Linux / Unix / Ubuntu", stars: 2 },
  { category: "Shell", details: "PowerShell / Bash", stars: 4 },
  { category: "Shell", details: "Zsh", stars: 2 },
  { category: "ALM", details: "Azure Devops (Board)", stars: 4 },
  { category: "ALM", details: "JIRA", stars: 2 },
  {
    category: "Version Control System (VCS)",
    details: "Azure Devops (Repository) / Pipelines",
    stars: 4,
  },
  {
    category: "Version Control System (VCS)",
    details: "Github / Github Action",
    stars: 3,
  },
  { category: "Bug Tracking", details: "Redmine", stars: 2 },
  { category: "IaC", details: "Terraform", stars: 2 },
  { category: "Container Orchestrator", details: "Docker / Podman", stars: 2 },
  {
    category: "Container Orchestrator",
    details: "Kubernetes / OpenShift / Minikube",
    stars: 1,
  },
  { category: "Service Mesh", details: "Istio", stars: 1 },
  { category: "IDE", details: "Rider / Visual Studio / Code", stars: 4 },
  { category: "IDE", details: "NeoVim", stars: 1 },
  {
    category: "Application Perf. Monitoring",
    details: "Application Insight",
    stars: 3,
  },
  { category: "Application Perf. Monitoring", details: "Grafana", stars: 1 },
  { category: "Monitoring Infra", details: "Zabbix", stars: 2 },
  { category: "Monitoring Infra", details: "Prometheus", stars: 1 },
  { category: "Event-Driven Arch.", details: "Azure Service Bus", stars: 3 },
  { category: "Event-Driven Arch.", details: "MediatR", stars: 2 },
  {
    category: "Event-Driven Arch.",
    details: "Kafka / Azure Event Hub & Grid",
    stars: 1,
  },
  { category: "Moteur d’indexation", details: "Graylog", stars: 2 },
  {
    category: "Moteur d’indexation",
    details: "Elastic Search / Lucene",
    stars: 1,
  },
  { category: "Serveur HTTP", details: "IIS", stars: 4 },
  { category: "Serveur HTTP", details: "Kestrel / Express.js", stars: 2 },
  { category: "Serveur HTTP", details: "Next.js / Node.js", stars: 1 },
];

function renderStars(count: number) {
  return (
    <span>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} >
          ⭐
        </span>
      ))}
    </span>
  );
}

export function TechnicalSkillsSection() {
  return (
    <section className={styles.profileSection}>
      <details>
        <summary className={styles.title}>
          Compétences Techniques Détaillées
        </summary>
        <div className={styles.titleLine}></div>
        <div className={styles.skillsLegendWrapper}>
          <table className={styles.skillsLegendTable}>
            <thead>
              <tr>
                <th colSpan={4} className={styles.skillsLegendTitle}>
                  Légende
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div>⭐⭐⭐⭐</div>
                  <div className={styles.skillsLegendLabel}>Expert</div>
                </td>
                <td>
                  <div>⭐⭐⭐</div>
                  <div className={styles.skillsLegendLabel}>Maîtrise</div>
                </td>
                <td>
                  <div>⭐⭐</div>
                  <div className={styles.skillsLegendLabel}>Autonomie</div>
                </td>
                <td>
                  <div>⭐</div>
                  <div className={styles.skillsLegendLabel}>Théorie ou POC</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={styles.skillsTableWrapper}>
          <table className={styles.skillsTable}>
            <thead>
              <tr>
                <th>Catégorie</th>
                <th>Détail</th>
                <th>Niveau</th>
              </tr>
            </thead>
            <tbody>
              {(() => {
                let lastCategory = "";
                return skills.map((skill, idx) => {
                  const showCategory = skill.category !== lastCategory;
                  lastCategory = skill.category;
                  return (
                    <tr key={idx}>
                      <td
                        className={
                          showCategory ? styles.skillsCategory : undefined
                        }
                      >
                        {showCategory ? skill.category : ""}
                      </td>
                      <td>{skill.details}</td>
                      <td>{renderStars(skill.stars)}</td>
                    </tr>
                  );
                });
              })()}
            </tbody>
          </table>
        </div>
      </details>
    </section>
  );
}
