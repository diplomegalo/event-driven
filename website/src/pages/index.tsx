import React from "react";
import Layout from "@theme/Layout";
import { Redirect } from "@docusaurus/router";
// import styles from "../css/style.module.css";
// import { ProfileSection } from "../components/ProfileSection";
// import { PersonnalitySection } from "../components/PersonnalitySection";
// import { SummarySkillsSection } from "../components/SummarySkillsSection";
// import { ExperienceSection } from "../components/ExperienceSection";
// import { TechnicalSkillsSection } from "../components/TechnicalSkillsSection";
// import HeaderSection from "../components/HeaderSection";

export default function PierreArnaudCV() {
  return (
    <Layout>
      <Redirect to="blog" />
      {/* <HeaderSection />
      <div className={styles.page}>
        <div className={styles.container}>
          <div className={styles.columnLarge}>
            <ProfileSection />
            <PersonnalitySection />
            <SummarySkillsSection />
            <TechnicalSkillsSection />
          </div>
          <div className={styles.columnSmall}>
            <ExperienceSection />
          </div>
        </div>
      </div> */}
    </Layout>
  );
}
