import React from "react";
import styles from "./style.module.css";

export function ProfileSection() {
    return (
        <section className={styles.profileSection}>
            <details open>
                <summary className={styles.title}>Profil</summary>
                <div className={styles.titleLine}></div>
                <div className={styles.profileContent}>
                    <img
                        src="/img/profil.jpg"
                        alt="Pierre-Arnaud Delsaut"
                        className={styles.profilePhoto}
                    />
                    <ul className={styles.profileList}>
                        <li>🎯Analyste - Développeur Full-Stack</li>
                        <li>🎯Architecte Transversal - Solution - Intégration</li>
                        <li>🛠️.NET / JS / SQL / Azure</li>
                        <li>🏗️Microservices & Event-Driven Architecture</li>
                        <li>⚙️Agile / DevOps</li>
                        <li>📦Docker / Kubernetes</li>
                        <li>🗣️Français - Anglais - Néerlandais</li>
                        <li>👉15+ ans d’expérience</li>
                    </ul>
                </div>
            </details>
        </section>
    );
}
