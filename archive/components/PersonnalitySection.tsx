import React from "react";
import styles from "../css/style.module.css";

/* Section Personnalité repliable */
export function PersonnalitySection() {
  return (
    <section className={styles.profileSection}>
      <details>
        <summary className={styles.title}>Personnalité</summary>
        <div className={styles.titleLine}></div>
        <ul className={styles.profileList}>
          <li>
            🏋️‍♂️Large spectre de compétence & faculté d’adaptation technologique
          </li>
          <li>🤝Orienté travail d’équipe, collaboratif et solution</li>
          <li>👍Bonne communication (formateur et podcaster)</li>
          <li>
            🎖️Fiable et stable, habitué des grandes organisations IT (&gt; 500)
          </li>
        </ul>
      </details>
    </section>
  );
}
