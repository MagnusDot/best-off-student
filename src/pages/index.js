import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import SEOHead from '@site/src/components/SEOHead';
import Layout from '@theme/Layout';
import styles from './index.module.css';

export default function Home() {
  const logoUrl = useBaseUrl('/img/image.png');
  
  return (
    <>
      <SEOHead 
        title="Accueil"
        description="Partage de ma vie de développeur, professeur et ingénieur en IA. Blog personnel, documentation et ressources pédagogiques."
        keywords="développement, programmation, étudiants, école ingénieur, IA, LLM, pédagogie, ingénieur IA, développement web, triche académique"
      />
      <Layout
        title="Magnus Dev - Développeur, Professeur et Ingénieur en IA"
        description="Partage de ma vie de développeur, professeur et ingénieur en IA. Blog personnel, documentation et ressources pédagogiques.">
      <main className={styles.homepage}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <img 
              src={logoUrl} 
              alt="Magnus Dev Logo" 
              className={styles.heroLogo}
            />
            <h1 className={styles.heroTitle}>
              Magnus Dev
            </h1>
            <p className={styles.heroSubtitle}>
              Partage de mes expériences et trouvailles intéressantes
            </p>
            <p className={styles.heroDescription}>
              Bienvenue sur mon site personnel ! Je partage ici ma vie de développeur, mes trouvailles 
              sur la triche étudiante en tant que professeur, mes expériences en ingénierie IA, et bien d'autres 
              découvertes intéressantes. L'objectif : partager ce que j'apprends au quotidien.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link
                className={styles.ctaButton}
                to="/blog"
                aria-label="Découvrir les articles du blog">
                Découvrir le blog
              </Link>
              <Link
                className={styles.ctaButton}
                to="/docs"
                aria-label="Accéder à la documentation">
                Documentation
              </Link>
            </div>
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
                <div className={styles.cardIcon}>💻</div>
                <h3 className={styles.cardTitle}>Vie de développeur</h3>
                <p className={styles.cardDescription}>
                  Je partage mes expériences de développement, mes projets, 
                  mes découvertes techniques et les leçons apprises au quotidien.
                </p>
              </div>
              <div className={styles.aboutCard}>
                <div className={styles.cardIcon}>🔍</div>
                <h3 className={styles.cardTitle}>Trouvailles en tant que prof</h3>
                <p className={styles.cardDescription}>
                  Découvrez mes trouvailles sur la triche étudiante, mes méthodes de détection, 
                  et mes réflexions sur l'enseignement et la pédagogie.
                </p>
              </div>
              <div className={styles.aboutCard}>
                <div className={styles.cardIcon}>🤖</div>
                <h3 className={styles.cardTitle}>Expériences en IA</h3>
                <p className={styles.cardDescription}>
                  Partage de mes expériences en ingénierie IA, réflexions sur les LLM, 
                  et leur impact dans le développement et l'éducation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.cta}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>
              Prêt à découvrir mes expériences ?
            </h2>
            <p className={styles.ctaDescription}>
              Explorez mes articles de blog et ma documentation pour découvrir mes trouvailles 
              et expériences en développement, enseignement et IA.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link
                className={styles.ctaButtonSecondary}
                to="/blog"
                aria-label="Voir tous les articles du blog">
                Voir le blog
              </Link>
              <Link
                className={styles.ctaButtonSecondary}
                to="/docs"
                aria-label="Accéder à la documentation">
                Accéder à la documentation
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
    </>
  );
}
