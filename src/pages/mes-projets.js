import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import styles from './mes-projets.module.css';

const projects = [
  {
    name: 'Macro Planning',
    href: 'https://macro.h4ck3ur.com',
    status: 'Disponible',
    description:
      "Un projet de planification accessible en ligne pour centraliser et organiser un macro planning.",
  },
  {
    name: 'Estimation de projet',
    href: 'https://estimation.h4ck3ur.com',
    status: 'Disponible',
    description:
      "Un outil pour estimer plus rapidement la charge et le cadrage d'un projet.",
  },
];

export default function MesProjetsPage() {
  return (
    <Layout
      title="Mes projets"
      description="Les projets que je mets en ligne et que je fais évoluer.">
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <p className={styles.eyebrow}>Portfolio</p>
            <h1 className={styles.title}>Mes projets</h1>
            <p className={styles.description}>
              Une page simple pour regrouper les outils, expériences et sites que je publie.
            </p>
          </div>
        </section>

        <section className={styles.projectsSection}>
          <div className={styles.grid}>
            {projects.map((project) => (
              <article key={project.name} className={styles.card}>
                <div className={styles.cardTop}>
                  <span className={styles.badge}>{project.status}</span>
                  <h2 className={styles.cardTitle}>{project.name}</h2>
                </div>
                <p className={styles.cardDescription}>{project.description}</p>
                <Link className={styles.primaryLink} to={project.href}>
                  Ouvrir le projet
                </Link>
              </article>
            ))}
          </div>

          <div className={styles.backRow}>
            <Link className={styles.backLink} to="/">
              Retour à l'accueil
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}
