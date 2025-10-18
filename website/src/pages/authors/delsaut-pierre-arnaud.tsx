import React from 'react';
import Layout from '@theme/Layout';
import { ProfileSection } from '../../components/ProfileSection';

export default function AuthorPierreArnaud() {
  return (
    <Layout title="Pierre-Arnaud Delsaut" description="Profil de Pierre-Arnaud Delsaut">
      <main style={{ maxWidth: 900, margin: '0 auto', padding: '2rem' }}>
        <ProfileSection />
      </main>
    </Layout>
  );
}
