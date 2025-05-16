import React from 'react';
import styles from '../css/style.module.css';

export function ExperienceSection() {
  return (
    <section className={styles.profileSection}>
      <details open>
        <summary className={styles.title}>Expérience</summary>
        <div className={`${styles.titleLine}`}></div>
        <div className={styles.timeline}>
          {/* FOREM */}
          <section className={styles.timelineItem}>
            <details open>
              <summary className={styles.timelineDate}>
                📌 FOREM (En Cours)
              </summary>
              <div>
                <div className={styles.timelineSubTitle}>Mission</div>
                <ul className={styles.timelineList}>
                  <li>
                    🎯 Portail des aides à l’emploi pour les chercheurs d’emploi
                    et les entreprises
                  </li>
                  <li>🎯 Gouvernance, Référent Technique et R&D</li>
                  <li>🎯 Architecture Transversale</li>
                </ul>
                <div className={styles.timelineSubTitle}>Technologies</div>
                <ul className={styles.timelineList}>
                  <li>🛠️ .NET | Web Component | SQL Server</li>
                  <li>🏗️ Microservice REST & Event-Driven</li>
                  <li>🔐 OIDC, OAuth2, SAML</li>
                  <li>📩 Service Mix & Azure Service Bus</li>
                </ul>
              </div>
            </details>
          </section>
          {/* Banque CPH */}
          <section className={styles.timelineItem}>
            <details>
              <summary className={styles.timelineDate}>
                📌 Banque CPH (2021)
              </summary>
              <div>
                <div className={styles.timelineSubTitle}>Mission</div>
                <ul className={styles.timelineList}>
                  <li>🎯 Home Bank (Web & Mobile)</li>
                  <li>🎯 Intranet moteur de règle</li>
                </ul>
                <div className={styles.timelineSubTitle}>Technologies</div>
                <ul className={styles.timelineList}>
                  <li>🛠️ .NET | Knockout JS | SQL Server</li>
                  <li>🛠️ Selenium & XUnit</li>
                  <li>🏗️ Architecture Microservice REST</li>
                  <li>🔐 Bearer, Connective (eId) & Vasco</li>
                  <li>📩 Bizztalk</li>
                </ul>
              </div>
            </details>
          </section>
          {/* Divers */}
          <section className={styles.timelineItem}>
            <details>
              <summary className={styles.timelineDate}>
                📌 Divers (2017)
              </summary>
              <div>
                <div className={styles.timelineSubTitle}>Mission</div>
                <ul className={styles.timelineList}>
                  <li>🎯 Formateur centre de compétence</li>
                  <li>🎯 Lead Dev, Analyste, Testing & Livraison</li>
                  <li className={styles.timelineItemItalic}>
                    Bipa : Configurateur de châssis en ligne
                  </li>
                  <li className={styles.timelineItemItalic}>
                    Entra : Application Timesheet, Reporting & Maintenance du
                    site Web
                  </li>
                </ul>
                <div className={styles.timelineSubTitle}>Technologies</div>
                <ul className={styles.timelineList}>
                  <li>🛠️ .NET | Knockout JS | DotNetNuke | SQL Server</li>
                  <li>💼 Agile Scrum</li>
                </ul>
              </div>
            </details>
          </section>
          {/* STIB-MIVB */}
          <section className={styles.timelineItem}>
            <details>
              <summary className={styles.timelineDate}>
                📌 STIB-MIVB (2017)
              </summary>
              <div>
                <div className={styles.timelineSubTitle}>Mission</div>
                <ul className={styles.timelineList}>
                  <li>🎯 eCommerce B2C (Mybootik) & B2B</li>
                  <li>🎯 Chargement MOBIB Online</li>
                </ul>
                <div className={styles.timelineSubTitle}>Technologies</div>
                <ul className={styles.timelineList}>
                  <li>🛠️ .NET / WCF / Oracle</li>
                  <li>🏗️ Architecture Microservice SOAP</li>
                </ul>
              </div>
            </details>
          </section>
          {/* Delta Lloyd Bank */}
          <section className={styles.timelineItem}>
            <details>
              <summary className={styles.timelineDate}>
                📌 Delta Lloyd Bank (2012)
              </summary>
              <div>
                <div className={styles.timelineSubTitle}>Mission</div>
                <ul className={styles.timelineList}>
                  <li>🎯 Intégrateur CRM</li>
                  <li>🎯 Scoring clients</li>
                </ul>
              </div>
            </details>
          </section>
        </div>
      </details>
    </section>
  );
}