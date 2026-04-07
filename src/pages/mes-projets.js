import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import styles from './mes-projets.module.css';

const projects = [
  {
    name: 'Macro Planning',
    href: 'https://macro.h4ck3ur.com',
    status: 'DISPONIBLE',
    category: 'ORGANISATION',
    description:
      'Un outil de planification en ligne pour centraliser un macro planning sans friction.',
  },
  {
    name: 'Estimation de projet',
    href: 'https://estimation.h4ck3ur.com',
    status: 'DISPONIBLE',
    category: 'PILOTAGE',
    description:
      "Un raccourci utile pour estimer plus vite la charge, le cadrage et les zones floues d'un projet.",
  },
];

const marqueeItems = [
  'PROJECT DATABASE ONLINE',
  'OUTILS MAISON',
  'WORK IN PROGRESS ASSUME',
  'CLIQUER SANS MODERATION',
];

export default function MesProjetsPage() {
  return (
    <Layout
      title="Mes projets"
      description="Les projets, outils et experiences que je mets en ligne et fais evoluer.">
      <main className={`retro-theme retro-page-shell ${styles.page}`}>
        <div className="retro-page-width">
          <div className="retro-marquee" aria-label="Bandeau projets">
            <div className="retro-marquee-track" aria-hidden="true">
              {[...marqueeItems, ...marqueeItems].map((item, index) => (
                <span key={`${item}-${index}`}>{item}</span>
              ))}
            </div>
          </div>

          <section className={styles.hero}>
            <div className="retro-window retro-window-strong">
              <div className="retro-window-titlebar">
                <span>mes_projets.exe</span>
                <span>portfolio public</span>
              </div>
              <div className={`retro-window-body ${styles.heroBody}`}>
                <div className={styles.heroTop}>
                  <div>
                    <span className="retro-eyebrow">Portfolio personnel</span>
                    <h1 className={styles.title}>MES PROJETS</h1>
                  </div>
                  <span className="retro-badge retro-badge-hot">ACTIVE</span>
                </div>

                <div className={styles.heroGrid}>
                  <div className={`retro-panel retro-panel-yellow ${styles.heroPanel}`}>
                    <p>
                      Une page simple pour regrouper les outils et experiences que je publie en
                      dehors des articles. Le but est de montrer des choses utiles, pas de faire
                      semblant d&apos;avoir une licorne a chaque clic.
                    </p>
                  </div>
                  <div className="retro-counter">
                    <div>PROJECTS: <strong>0002</strong></div>
                    <div>UPDATED: <strong>2026</strong></div>
                    <div>MOOD: <strong>SHIP IT</strong></div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <hr className="retro-groove" />

          <section className={styles.projectsSection}>
            <div className="retro-window">
              <div className="retro-window-titlebar">
                <span>projets.tbl</span>
                <span>2 lignes</span>
              </div>
              <div className={`retro-window-body ${styles.projectsBody}`}>
                <div className="retro-table">
                  <div className={`retro-table-row ${styles.headerRow}`}>
                    <div className="retro-table-cell">STATUT</div>
                    <div className="retro-table-cell">CATEGORIE</div>
                    <div className="retro-table-cell">PROJET</div>
                    <div className="retro-table-cell">DESCRIPTION</div>
                    <div className="retro-table-cell">ACTION</div>
                  </div>

                  {projects.map((project) => (
                    <article key={project.name} className={`retro-table-row ${styles.projectRow}`}>
                      <div className="retro-table-cell">
                        <span className="retro-badge retro-badge-new">{project.status}</span>
                      </div>
                      <div className="retro-table-cell">{project.category}</div>
                      <div className="retro-table-cell">
                        <h2 className={styles.projectTitle}>{project.name}</h2>
                      </div>
                      <div className="retro-table-cell">
                        <p className={styles.projectDescription}>{project.description}</p>
                      </div>
                      <div className="retro-table-cell">
                        <Link className="retro-button retro-button-primary" to={project.href}>
                          Ouvrir
                        </Link>
                      </div>
                    </article>
                  ))}
                </div>

                <div className={styles.bottomRow}>
                  <div className={`retro-panel ${styles.asidePanel}`}>
                    <h2 className={styles.asideTitle}>Note de service</h2>
                    <p>
                      D&apos;autres outils arriveront ici au fil du temps. Si une idee merite un
                      sous-domaine, elle finit generalement dans cette liste.
                    </p>
                  </div>
                  <Link className="retro-button retro-button-outline" to="/">
                    Retour a l&apos;accueil
                  </Link>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.ctaSection}>
            <div className="retro-construction">
              <div className={`retro-construction-inner ${styles.ctaInner}`}>
                <span className="retro-badge">WORK IN PROGRESS</span>
                <h2 className={styles.ctaTitle}>Besoin de contexte avant de cliquer ?</h2>
                <p>
                  Le blog raconte souvent pourquoi ces projets existent, ce qu&apos;ils reglent et
                  ce que j&apos;ai appris en les construisant.
                </p>
                <div className={styles.ctaActions}>
                  <Link className="retro-button retro-button-danger" to="/blog">
                    Lire le blog
                  </Link>
                  <Link className="retro-button retro-button-outline" to="/docs/intro">
                    Parcourir la doc
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </Layout>
  );
}
