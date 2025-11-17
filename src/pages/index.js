import Link from '@docusaurus/Link';
import SEOHead from '@site/src/components/SEOHead';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './index.module.css';

export default function Home() {
  const logoUrl = useBaseUrl('/img/Image transparente remove.bg.png');
  
  return (
    <>
      <SEOHead 
        title="Accueil"
        description="Blog pédagogique sur les erreurs commises par les étudiants en école d'ingénieur développeur. Exemples concrets, bonnes pratiques et sensibilisation à l'utilisation critique des IA et LLM en programmation."
        keywords="développement, programmation, étudiants, école ingénieur, erreurs code, IA, LLM, pédagogie, bonnes pratiques"
      />
      <Layout
        title="Best Off Student - Erreurs d'étudiants en développement"
        description="Blog pédagogique sur les erreurs commises par les étudiants en école d'ingénieur développeur. Exemples concrets, bonnes pratiques et sensibilisation à l'utilisation critique des IA et LLM en programmation.">
      <main className={styles.homepage}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <img 
              src={logoUrl} 
              alt="Best Off Student Logo" 
              className={styles.heroLogo}
            />
            <h1 className={styles.heroTitle}>
              Best Off Student
            </h1>
            <p className={styles.heroSubtitle}>
              Une collection des meilleurs moments
            </p>
            <p className={styles.heroDescription}>
              Ce blog rassemble les perles, les réponses créatives et les moments mémorables 
              que mes étudiants en école d'ingénieur développeur ont partagés lors des contrôles.
            </p>
            <Link
              className={styles.ctaButton}
              to="/blog"
              aria-label="Découvrir les articles du blog Best Off Student">
              Découvrir les articles
            </Link>
          </div>
        </section>

        {/* About Section */}
        <section className={styles.about}>
          <div className={styles.aboutContent}>
            <h2 className={styles.sectionTitle}>
              À propos
            </h2>
            <div className={styles.aboutGrid}>
              <div className={styles.aboutCard}>
                <div className={styles.cardIcon}>💡</div>
                <h3 className={styles.cardTitle}>Réponses créatives</h3>
                <p className={styles.cardDescription}>
                  Les solutions les plus originales et inattendues que j'ai pu découvrir 
                  dans les copies de mes étudiants.
                </p>
              </div>
              <div className={styles.aboutCard}>
                <div className={styles.cardIcon}>🎯</div>
                <h3 className={styles.cardTitle}>Moments mémorables</h3>
                <p className={styles.cardDescription}>
                  Les citations, les explications et les réalisations qui m'ont marqué 
                  au fil des années d'enseignement.
                </p>
              </div>
              <div className={styles.aboutCard}>
                <div className={styles.cardIcon}>🚀</div>
                <h3 className={styles.cardTitle}>Apprentissage</h3>
                <p className={styles.cardDescription}>
                  Une façon légère et positive de partager l'expérience de l'enseignement 
                  et de célébrer la créativité des étudiants.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.cta}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>
              Prêt à découvrir ?
            </h2>
            <p className={styles.ctaDescription}>
              Explorez les articles et découvrez les meilleurs moments de mes étudiants.
            </p>
            <Link
              className={styles.ctaButtonSecondary}
              to="/blog"
              aria-label="Voir tous les articles du blog Best Off Student">
              Voir tous les articles
            </Link>
          </div>
        </section>
      </main>
    </Layout>
    </>
  );
}
