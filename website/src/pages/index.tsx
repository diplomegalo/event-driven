import React from "react";
import Layout from "@theme/Layout";
import styles from "./style.module.css";
import { ProfileSection } from "./ProfileSection";
import { PersonnalitySection } from "./PersonnalitySection";
import { SummarySkillsSection } from "./SummarySkillsSection";
import { ExperienceSection } from "./ExperienceSection";
import { TechnicalSkillsSection } from "./TechnicalSkillsSection";
import HeaderSection from "./HeaderSection";

export default function PierreArnaudCV() {
  return (
    <Layout>
      <HeaderSection />
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
      </div>
    </Layout>
  );
}
