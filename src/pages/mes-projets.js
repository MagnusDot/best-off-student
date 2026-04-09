import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import styles from './mes-projets.module.css';

const projects = [
  {
    name: 'Macro Planning',
    href: 'https://macro.h4ck3ur.com',
    status: 'Disponible',
    category: 'Organisation',
    description:
      'Un outil de planification en ligne pour centraliser un macro planning sans friction.',
    note: 'Pour garder une vue d ensemble',
    angle: '-1.8deg',
  },
  {
    name: 'Estimation de projet',
    href: 'https://estimation.h4ck3ur.com',
    status: 'Disponible',
    category: 'Pilotage',
    description:
      "Un raccourci utile pour estimer plus vite la charge, le cadrage et les zones floues d'un projet.",
    note: 'Quand il faut cadrer vite',
    angle: '1.2deg',
  },
  {
    name: 'Timeline',
    href: 'https://timeline.h4ck3ur.com/',
    status: 'Disponible',
    category: 'Visualisation',
    description:
      'Un outil pour creer des timelines de projet, de formation, ou un melange des deux.',
    note: 'Pour raconter une progression',
    angle: '-0.7deg',
  },
  {
    name: 'Burnup',
    href: 'https://burnup.h4ck3ur.com/',
    status: 'Disponible',
    category: 'Pilotage',
    description:
      'Un burnup visuel pour suivre un sprint avec le scope initial, les ajouts, le done cumule, le reste a faire et la trajectoire optimale.',
    note: 'Pour garder le sprint lisible',
    angle: '1.6deg',
  },
];

const marqueeItems = [
  'OUTILS MAISON',
  'PETIT LABO',
  'PROJETS EN EVOLUTION',
  'POST-IT PUBLICS',
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
            <div className={`retro-window retro-window-strong ${styles.heroWindow}`}>
              <div className={`retro-window-body ${styles.heroBody}`}>
                <div className={styles.heroCopy}>
                  <span className="retro-eyebrow">Mur de projets</span>
                  <h1 className={styles.title}>Des outils simples pour de vrais besoins.</h1>
                  <p className={styles.heroLead}>
                    Cette page rassemble les petits services et prototypes qui ont gagne le droit de
                    rester visibles. Pas parce qu&apos;ils sont parfaits, mais parce qu&apos;ils
                    rendent deja service.
                  </p>
                  <div className={styles.heroActions}>
                    <Link className="retro-button retro-button-primary" to="/blog">
                      Lire les coulisses
                    </Link>
                    <Link className="retro-button retro-button-outline" to="/">
                      Retour a l&apos;accueil
                    </Link>
                  </div>
                </div>

                <aside className={styles.heroSidebar}>
                  <div className={`retro-panel retro-panel-yellow ${styles.sidebarCard}`}>
                    <span className={styles.pin} aria-hidden="true" />
                    <p className={styles.sidebarTitle}>Regle simple</p>
                    <p className={styles.sidebarText}>
                      Si une idee devient vraiment utile, elle finit ici avec un sous-domaine et
                      une interface suffisamment claire pour servir sans explication supplementaire.
                    </p>
                  </div>

                  <div className={`retro-panel ${styles.legendCard}`}>
                    <span className="retro-badge">Petit pense-bete</span>
                    <ul className={styles.legendList}>
                      <li>Utile d&apos;abord</li>
                      <li>Copiable ensuite</li>
                      <li>Plus propre a chaque iteration</li>
                    </ul>
                  </div>
                </aside>
              </div>
            </div>
          </section>

          <section className={styles.projectsSection}>
            <div className={styles.notesGrid}>
              {projects.map((project) => (
                <article
                  key={project.name}
                  className={`retro-panel retro-panel-yellow ${styles.projectCard}`}
                  style={{transform: `rotate(${project.angle})`}}>
                  <span className={styles.tape} aria-hidden="true" />
                  <div className={styles.cardMeta}>
                    <span className="retro-badge retro-badge-new">{project.status}</span>
                    <span className={styles.category}>{project.category}</span>
                  </div>
                  <h2 className={styles.projectTitle}>{project.name}</h2>
                  <p className={styles.projectNote}>{project.note}</p>
                  <p className={styles.projectDescription}>{project.description}</p>
                  <Link className="retro-button retro-button-primary" to={project.href}>
                    Ouvrir le projet
                  </Link>
                </article>
              ))}
            </div>
          </section>

          <section className={styles.bottomSection}>
            <div className={styles.bottomGrid}>
              <div className={`retro-window ${styles.storyWindow}`}>
                <div className="retro-window-titlebar">
                  <span>Ce qu&apos;il y a derriere les liens</span>
                  <span>contexte inclus</span>
                </div>
                <div className={`retro-window-body ${styles.storyBody}`}>
                  <h2 className={styles.storyTitle}>Chaque projet commence comme une note de travail.</h2>
                  <p>
                    Souvent, le blog raconte le moment ou un besoin revient trop souvent pour
                    rester dans un coin de tete. Quand le besoin se precise, il devient un outil.
                  </p>
                  <p>
                    J&apos;essaie de garder cette logique visible: l&apos;outil, son intention, et
                    les apprentissages qu&apos;il laisse derriere lui.
                  </p>
                </div>
              </div>

              <div className="retro-construction">
                <div className={`retro-construction-inner ${styles.ctaCard}`}>
                  <span className="retro-badge">Pour aller plus loin</span>
                  <h2 className={styles.ctaTitle}>Le blog sert de cahier de bord pour ces outils.</h2>
                  <p>
                    Si tu veux comprendre pourquoi un projet existe, ce qu&apos;il essaie de
                    simplifier, ou comment il a evolue, c&apos;est souvent la meilleure entree.
                  </p>
                  <div className={styles.ctaActions}>
                    <Link className="retro-button retro-button-danger" to="/blog">
                      Ouvrir le blog
                    </Link>
                    <Link className="retro-button retro-button-outline" to="/docs/intro">
                      Parcourir la doc
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </Layout>
  );
}
