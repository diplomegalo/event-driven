import React from "react";
import Layout from "@theme/Layout";
import styles from "./style.module.css";

export default function PierreArnaudCV() {
  return (
    <Layout>
      <div className={styles.page}>
        <div className={styles.container}>
          <div className={styles.columnLarge}>
            <h2 className={styles.title}>Profil : Pierre-Arnaud Delsaut</h2>
            <div className={styles.titleLine}></div>
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