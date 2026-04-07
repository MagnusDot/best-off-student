import Link from '@docusaurus/Link';
import SEOHead from '@site/src/components/SEOHead';
import Layout from '@theme/Layout';
import {useEffect, useState} from 'react';
import styles from './index.module.css';

const phrases = [
  'C:\\\\BLOG\\\\POSTS> dir /b',
  'agent.think(); agent.act(); agent.learn();',
  'git commit -m "feat: trouvailles du jour"',
  'while (learning) { share(); }',
  'REM pas de videos, juste du texte et du code',
];

const shareRows = [
  {
    icon: '01',
    title: 'Code & dev',
    description:
      "Des bugs memorables, des details d'implementation, et les choix techniques qui valent la peine d'etre expliques.",
    tag: 'CODING',
  },
  {
    icon: '02',
    title: 'Trouvailles de prof',
    description:
      "Des anecdotes de terrain, des methodes vues en cours, et la facon dont j'essaie de rendre tout ca utile plutot que moralisateur.",
    tag: 'PEDAGOGIE',
  },
  {
    icon: '03',
    title: 'Agents IA & LLM',
    description:
      "Orchestration, reasoning, tool calling, gestion d'etat: les bons patterns, les faux bons plans, et les pieges tres reels.",
    tag: 'IA',
  },
];

const projectRows = [
  {
    name: 'Macro Planning',
    status: 'EN LIGNE',
    description:
      'Centraliser un macro planning dans un outil accessible et simple a prendre en main.',
    href: 'https://macro.h4ck3ur.com',
  },
  {
    name: 'Estimation de projet',
    status: 'EN LIGNE',
    description:
      "Un outil pour cadrer plus vite la charge, l'ampleur et les angles morts d'un projet.",
    href: 'https://estimation.h4ck3ur.com',
  },
];

const marqueeItems = [
  'WELCOME TO MAGNUS DEV',
  'BEST VIEWED WITH CURIOSITY',
  'NEW POSTS WHEN SOMETHING INTERESTING HAPPENS',
  'TEXT FIRST, HYPE SECOND',
  'AGENTS IA + BUGS BIZARRES + IDEES UTILES',
];

export default function Home() {
  const [typedText, setTypedText] = useState('');

  useEffect(() => {
    let currentPhrase = 0;
    let currentChar = 0;
    let deleting = false;
    let timeoutId;

    const tick = () => {
      const phrase = phrases[currentPhrase];

      if (deleting) {
        currentChar -= 1;
      } else {
        currentChar += 1;
      }

      setTypedText(phrase.slice(0, currentChar));

      if (!deleting && currentChar === phrase.length) {
        deleting = true;
        timeoutId = window.setTimeout(tick, 1400);
        return;
      }

      if (deleting && currentChar === 0) {
        deleting = false;
        currentPhrase = (currentPhrase + 1) % phrases.length;
      }

      timeoutId = window.setTimeout(tick, deleting ? 45 : 85);
    };

    timeoutId = window.setTimeout(tick, 500);

    return () => window.clearTimeout(timeoutId);
  }, []);

  return (
    <>
      <SEOHead
        title="Accueil"
        description="Magnus Dev partage du code, des trouvailles de prof, des retours sur les agents IA et des projets perso dans une ambiance retro assumee."
        keywords="developpement, programmation, agents IA, LLM, orchestration, reasoning, blog dev, pedagogie, projets web"
      />
      <Layout
        title="Magnus Dev"
        description="Du texte, du code, des trouvailles utiles et une interface qui sent bon 1997.">
        <main className={`retro-theme retro-page-shell ${styles.homepage}`}>
          <div className="retro-page-width">
            <div className="retro-marquee" aria-label="Bandeau d'annonces">
              <div className="retro-marquee-track" aria-hidden="true">
                {[...marqueeItems, ...marqueeItems].map((item, index) => (
                  <span key={`${item}-${index}`}>{item}</span>
                ))}
              </div>
            </div>

            <section className={styles.heroSection}>
              <div className={`retro-window retro-window-strong ${styles.heroWindow}`}>
                <div className="retro-window-titlebar">
                  <span>magnus_dev.exe</span>
                  <div className="retro-window-controls" aria-hidden="true">
                    <span className="retro-window-control" />
                    <span className="retro-window-control" />
                    <span className="retro-window-control" />
                  </div>
                </div>

                <div className={`retro-window-body ${styles.heroBody}`}>
                  <div className={styles.heroMeta}>
                    <span className="retro-eyebrow">Internet personnel depuis 1997*</span>
                    <span className="retro-badge retro-badge-hot">NEW!</span>
                  </div>

                  <div className={styles.heroGrid}>
                    <div className={styles.heroCopy}>
                      <p className={styles.kicker}>Bienvenue sur mon coin de web bricole</p>
                      <h1 className={`${styles.heroTitle} retro-rainbow`}>
                        MAGNUS DEV
                      </h1>
                      <p className={styles.heroLead}>
                        Un site pour partager ce que j&apos;apprends vraiment: bugs, outils,
                        articles, projets et retours d&apos;experience sur les agents IA.
                      </p>

                      <div className={`retro-panel retro-panel-yellow ${styles.terminalPanel}`}>
                        <p className={styles.terminalLabel}>Derniere ligne de commande:</p>
                        <code className={`retro-code ${styles.terminalCode}`}>
                          {typedText}
                          <span className={styles.cursor} aria-hidden="true">
                            _
                          </span>
                        </code>
                      </div>

                      <div className={styles.heroActions}>
                        <Link className="retro-button retro-button-primary" to="/blog">
                          Lire le blog
                        </Link>
                        <Link className="retro-button retro-button-outline" to="/docs/intro">
                          Ouvrir la doc
                        </Link>
                      </div>
                    </div>

                    <aside className={styles.heroSidebar}>
                      <div className="retro-counter">
                        <div>VISITORS: <strong>0001297</strong></div>
                        <div>SINCE: <strong>1995</strong></div>
                        <div>STATUS: <strong>MODE DEV ACTIF</strong></div>
                      </div>

                      <div className={`retro-panel ${styles.notePanel}`}>
                        <h2 className={styles.sideTitle}>Pourquoi rester ici ?</h2>
                        <p>
                          Parce qu&apos;ici on prend le temps d&apos;expliquer. Pas de bruit de
                          fond, juste des idees qui peuvent servir demain.
                        </p>
                      </div>

                      <div className={styles.squareSection} aria-hidden="true">
                        <div className="retro-color-squares">
                          {['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'].map(
                            (color) => (
                              <span
                                key={color}
                                className="retro-color-square"
                                style={{background: color}}
                              />
                            ),
                          )}
                        </div>
                      </div>
                    </aside>
                  </div>
                </div>
              </div>
            </section>

            <hr className="retro-groove" />

            <section className={styles.section}>
              <div className="retro-window">
                <div className="retro-window-titlebar">
                  <span>ce_que_je_partage.dat</span>
                  <span>3 entrees</span>
                </div>
                <div className={`retro-window-body ${styles.sectionBody}`}>
                  <p className={styles.sectionIntro}>
                    Une interface retro, oui, mais un contenu tres concret: ce que j&apos;observe,
                    ce que je teste et ce que j&apos;aurais aime lire plus tot.
                  </p>

                  <div className={styles.shareTable}>
                    {shareRows.map((row) => (
                      <article key={row.title} className={`retro-table-row ${styles.shareRow}`}>
                        <div className={`retro-table-cell ${styles.shareIndex}`}>{row.icon}</div>
                        <div className={`retro-table-cell ${styles.shareMain}`}>
                          <h2 className={styles.rowTitle}>{row.title}</h2>
                          <p>{row.description}</p>
                        </div>
                        <div className={`retro-table-cell ${styles.shareTag}`}>
                          <span className="retro-badge">{row.tag}</span>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <section className={styles.section}>
              <div className={styles.twoColumn}>
                <div className="retro-window">
                  <div className="retro-window-titlebar">
                    <span>agent-pattern.ts</span>
                    <span>lecture seule</span>
                  </div>
                  <div className="retro-window-body">
                    <pre className={`retro-panel ${styles.codePanel}`}>
{`class AIAgent {
  async think(context) {
    return this.reasoner.analyze(context);
  }

  async act(plan) {
    return this.executor.run(plan);
  }

  async learn(feedback) {
    this.memory.update(feedback);
  }
}`}
                    </pre>
                  </div>
                </div>

                <div className="retro-window">
                  <div className="retro-window-titlebar">
                    <span>agents_ia.txt</span>
                    <span>notes terrain</span>
                  </div>
                  <div className={`retro-window-body ${styles.agentBody}`}>
                    <h2 className={styles.sectionHeading}>Agents IA: les vraies lecons</h2>
                    <p>
                      J&apos;ai travaille sur des systemes d&apos;agents IA assez complexes, donc je
                      partage surtout les details qui comptent quand on sort des slides:
                      orchestration, etat, erreurs, recuperation et choix d&apos;outils.
                    </p>
                    <ul className={styles.agentList}>
                      <li>Les patterns qui survivent au reel.</li>
                      <li>Les bugs subtils qui coutent du temps.</li>
                      <li>Les compromis que je referais volontiers.</li>
                    </ul>
                    <div className={styles.heroActions}>
                      <Link className="retro-button retro-button-success" to="/blog">
                        Voir les articles
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className={styles.section}>
              <div className="retro-window">
                <div className="retro-window-titlebar">
                  <span>mes_projets.tbl</span>
                  <span>tableau public</span>
                </div>
                <div className={`retro-window-body ${styles.sectionBody}`}>
                  <div className={styles.projectsHeader}>
                    <div>
                      <h2 className={styles.sectionHeading}>Quelques projets en ligne</h2>
                      <p>
                        Des outils que je fais evoluer en dehors des articles, avec une logique
                        simple: utile d&apos;abord, joli apres.
                      </p>
                    </div>
                    <Link className="retro-button retro-button-outline" to="/mes-projets">
                      Tous les projets
                    </Link>
                  </div>

                  <div className="retro-table">
                    <div className={`retro-table-row ${styles.projectHeaderRow}`}>
                      <div className="retro-table-cell">STATUT</div>
                      <div className="retro-table-cell">PROJET</div>
                      <div className="retro-table-cell">DESCRIPTION</div>
                      <div className="retro-table-cell">ACTION</div>
                    </div>

                    {projectRows.map((project) => (
                      <div key={project.name} className={`retro-table-row ${styles.projectRow}`}>
                        <div className="retro-table-cell">
                          <span className="retro-badge retro-badge-new">{project.status}</span>
                        </div>
                        <div className="retro-table-cell">
                          <strong>{project.name}</strong>
                        </div>
                        <div className="retro-table-cell">{project.description}</div>
                        <div className="retro-table-cell">
                          <Link className="retro-button" to={project.href}>
                            Ouvrir
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <section className={styles.section}>
              <div className="retro-construction">
                <div className={`retro-construction-inner ${styles.ctaBlock}`}>
                  <span className="retro-badge">WORK IN PROGRESS</span>
                  <h2 className={styles.ctaTitle}>Zone de decouverte en construction permanente</h2>
                  <p>
                    Si vous aimez les interfaces sans filtre et les retours d&apos;experience
                    utiles, le blog et la doc sont juste en dessous.
                  </p>
                  <div className={styles.heroActions}>
                    <Link className="retro-button retro-button-danger" to="/blog">
                      Explorer le blog
                    </Link>
                    <Link className="retro-button retro-button-outline" to="/docs/intro">
                      Lire la doc
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>
      </Layout>
    </>
  );
}
