import React from "react";
import styles from "./style.module.css";

export default function HeaderSection() {
  return (
    <header className={styles.headerSection}>
      <div className={styles.headerContent}>
        <div className={styles.headerLeft}>
          <div className={styles.headerAddress}>
            <div className={styles.headerCompany}>WAVENET SPRL</div>
            <div>Rue de l’Artisanat, 16</div>
            <div>7900 Leuze-en-Hainaut</div>
          </div>
        </div>

        <div className={styles.headerMiddle}>
          <img
            src="https://ik.imagekit.io/wavenet/static/tr:w-256/media/logo.f5d3a04a.svg"
            alt="Wavenet Logo"
            className={styles.headerLogo}
          />
          <div className={styles.headerSlogan}>Intelligent IT Solutions</div>
        </div>

        <div className={styles.headerRight}>
          <div>
            <span className={styles.headerLabel}>Contact</span> : Jean-Noël
            WALLEZ
          </div>
          <div>
            <span className={styles.headerLabel}>Tel</span> :{" "}
            <a href="tel:+3269670335">+32 (0)69/67.03.35</a>
          </div>
          <div>
            <span className={styles.headerLabel}>Fax</span> :{" "}
            <a href="fax:+3269670336">+32 (0)69/67.03.36</a>
          </div>
          <div>
            <a href="mailto:jn.wallez@wavenet.be">jn.wallez@wavenet.be</a>
          </div>
        </div>
      </div>
    </header>
  );
}
