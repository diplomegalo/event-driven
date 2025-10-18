import React from 'react';
import Layout from '@theme/Layout';
import { ProfileSection } from '@site/src/components/ProfileSection';
import { SummarySkillsSection } from '@site/src/components/SummarySkillsSection';
import { TechnicalSkillsSection } from '@site/src/components/TechnicalSkillsSection';
import { PersonnalitySection } from '@site/src/components/PersonnalitySection';

export default function AuthorPierreArnaud(): JSX.Element {
  return (
    <Layout title="Pierre‑Arnaud Delsaut" description="Profil et publications de Pierre‑Arnaud Delsaut">
      <main style={{ maxWidth: 1100, margin: '0 auto', padding: '2rem' }}>
        <div className="page">
          {/* première ligne : colonne gauche (profil) + colonne droite (summary + personnalité) */}
          <div className="container" style={{ alignItems: 'start', marginBottom: '2rem' }}>
            <aside className="columnSmall" aria-labelledby="author-profile">
              <ProfileSection />
            </aside>

            <section className="columnLarge">
              <div style={{ marginBottom: '1.5rem' }}>
                <SummarySkillsSection />
              </div>

              <div>
                <PersonnalitySection />
              </div>
            </section>
          </div>

          {/* deuxième ligne : compétences techniques pleine largeur */}
          <div className="container">
            <div className="columnLarge" style={{ width: '100%' }}>
              <TechnicalSkillsSection />
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
