import React from "react";
import Layout from "@theme/Layout";
import styles from "./style.module.css";

export default function PierreArnaudCV() {
  return (
    <Layout>
      <div className={styles.page}>
        <div className={styles.container}>
          <div className={styles.columnLarge}>
            <h2 className={styles.title}>Profil</h2>
            <div className={styles.titleLine}></div>
            {/* Section Profil */}
            <div className={styles.profileSection}>
              <img
                src="/img/profil.jpg"
                alt="Pierre-Arnaud Delsaut"
                className={styles.profilePhoto}
              />
              <div className={styles.profileDetails}>
                <ul>
                  <li>🎯Analyste-Développeur Full-Stack</li>
                  <li>🎯Architecte Transversal-Solution-Intégration</li>
                  <li>🛠️.NET / JS / SQL / Azure</li>
                  <li>🏗️ Microservices / Event-Driven Architecture</li>
                  <li>📦 Docker / Kubernetes</li>
                  <li>♻️Agile / DevOps</li>
                  <li>🗣️Français-Anglais-Néerlandais</li>
                  <li>👉 + 15 ans d’expérience</li>
                </ul>
              </div>
            </div>
            {/* Fin Section Profil */}
            <p></p>
          </div>
          <div className={styles.columnSmall}>
            <h2>Colonne 2</h2>
            <p>Contenu de la deuxième colonne.</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}