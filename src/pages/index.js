import Link from '@docusaurus/Link';
import SEOHead from '@site/src/components/SEOHead';
import Layout from '@theme/Layout';
import {useEffect, useState} from 'react';
import styles from './index.module.css';

const scribbleNotes = [
  "Aujourd'hui: partager ce qui marche vraiment.",
  "A garder: les details qu'on oublie dans les slides.",
  "Rappel: expliquer sans faire perdre du temps.",
  "A tester: outils utiles avant effets de mode.",
];

const shareCards = [
  {
    number: '01',
    title: 'Code & terrain',
    description:
      "Des bugs memorables, des choix techniques, et les compromis qui deviennent interessants des qu'on raconte le contexte.",
    note: 'Brouillons, patterns, post-mortems',
  },
  {
    number: '02',
    title: 'Pedagogie utile',
    description:
      "Des retours de cours, des facons d'expliquer plus clairement, et des idees pour rendre un sujet technique vraiment transmissible.",
    note: 'Exemples, anecdotes, structure',
  },
  {
    number: '03',
    title: 'Agents IA & LLM',
    description:
      "Orchestration, outils, etat, erreurs, reprise: surtout les details qui comptent quand un systeme doit tenir au-dela d'une demo.",
    note: 'Workflow, fiabilite, realite',
  },
];

const processSteps = [
  {
    title: 'Observer',
    body: "Je note les details qui coincent en vrai: une integration fragile, une UX mal comprise, ou un pattern prometteur qui craque.",
  },
  {
    title: 'Tester',
    body: "Je passe par des prototypes, de la doc, et parfois un petit outil maison pour verifier si l'idee tient.",
  },
  {
    title: 'Partager',
    body: "Je garde ensuite l'essentiel: ce qui peut faire gagner du temps a quelqu'un d'autre sans emballage inutile.",
  },
];

const projectRows = [
  {
    name: 'Macro Planning',
    status: 'Pret a l emploi',
    description:
      'Centraliser un macro planning dans un outil accessible et simple a prendre en main.',
    href: 'https://macro.h4ck3ur.com',
    angle: '-1.6deg',
  },
  {
    name: 'Estimation de projet',
    status: 'Utilise en vrai',
    description:
      "Un outil pour cadrer plus vite la charge, l'ampleur et les angles morts d'un projet.",
    href: 'https://estimation.h4ck3ur.com',
    angle: '1.4deg',
  },
  {
    name: 'Timeline',
    status: 'Toujours pratique',
    description:
      'Un outil pour creer des timelines de projet, de formation, ou un melange des deux.',
    href: 'https://timeline.h4ck3ur.com/',
    angle: '-0.9deg',
  },
];

const marqueeItems = [
  'NOTES DE DEV',
  'PEDAGOGIE DE TERRAIN',
  'AGENTS IA',
  'OUTILS MAISON',
  'IDEES UTILES',
];

export default function Home() {
  const [activeNote, setActiveNote] = useState(scribbleNotes[0]);

  useEffect(() => {
    let currentIndex = 0;
    const intervalId = window.setInterval(() => {
      currentIndex = (currentIndex + 1) % scribbleNotes.length;
      setActiveNote(scribbleNotes[currentIndex]);
    }, 2800);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <>
      <SEOHead
        title="Accueil"
        description="Magnus Dev partage du code, des trouvailles de prof, des retours sur les agents IA et des projets perso dans une ambiance hand-drawn assumee."
        keywords="developpement, programmation, agents IA, LLM, orchestration, reasoning, blog dev, pedagogie, projets web"
      />
      <Layout
        title="Magnus Dev"
        description="Du texte, du code, des trouvailles utiles et un site qui ressemble a un carnet de travail vivant.">
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
              <div className={`${styles.heroFrame} retro-window retro-window-strong`}>
                <div className={`retro-window-body ${styles.heroBody}`}>
                  <div className={styles.heroLeadColumn}>
                    <div className={styles.heroIntro}>
                      <span className="retro-eyebrow">Carnet de travail public</span>
                      <span className={`retro-badge retro-badge-hot ${styles.heroBadge}`}>
                        Notes fraiches
                      </span>
                    </div>

                    <div className={styles.heroHeadlineWrap}>
                      <span className={styles.kicker}>Bonjour, je m'appelle Magnus.</span>
                      <h1 className={styles.heroTitle}>
                        Je transforme des idees techniques en notes claires, outils utiles et
                        retours d'experience sans vernis corporate.
                      </h1>
                      <p className={styles.heroLead}>
                        Ici, tout est pense comme un tableau de travail: des articles, des projets
                        et des explications qui assument les ratures, les essais, et les vraies
                        decisions prises en cours de route.
                      </p>
                    </div>

                    <div className={styles.heroActions}>
                      <Link className="retro-button retro-button-primary" to="/blog">
                        Aller au blog
                      </Link>
                      <Link className="retro-button retro-button-outline" to="/docs/intro">
                        Ouvrir la doc
                      </Link>
                    </div>

                    <div className={styles.metricsRow}>
                      <div className={`retro-panel ${styles.metricCard}`}>
                        <strong>3 sujets qui reviennent</strong>
                        <span>Code, transmission, agents IA</span>
                      </div>
                      <div className={`retro-panel retro-panel-yellow ${styles.metricCard}`}>
                        <strong>1 principe</strong>
                        <span>Rendre le technique plus lisible</span>
                      </div>
                    </div>
                  </div>

                  <aside className={styles.heroSketchColumn}>
                    <div className={`retro-panel retro-panel-yellow ${styles.noteCard}`}>
                      <span className={styles.pin} aria-hidden="true" />
                      <p className={styles.noteTitle}>Sur le bureau aujourd&apos;hui</p>
                      <p className={styles.noteBody}>{activeNote}</p>
                    </div>

                    <div className={`retro-panel ${styles.sketchBoard}`}>
                    <div className={styles.sketchHeader}>
                      <span className="retro-badge">Pourquoi ce site</span>
                    </div>

                      <div className={styles.sketchCanvas} aria-hidden="true">
                        <div className={styles.reasonList}>
                          <div className={styles.reasonItem}>
                            <span className={styles.reasonTitle}>Expliquer</span>
                            <span className={styles.reasonCaption}>
                              rendre un sujet technique plus clair
                            </span>
                          </div>
                          <div className={styles.reasonItem}>
                            <span className={styles.reasonTitle}>Verifier</span>
                            <span className={styles.reasonCaption}>
                              tester les idees dans de vrais projets
                            </span>
                          </div>
                          <div className={styles.reasonItem}>
                            <span className={styles.reasonTitle}>Partager</span>
                            <span className={styles.reasonCaption}>
                              garder en ligne ce qui peut vraiment servir
                            </span>
                          </div>
                        </div>
                      </div>

                      <p className={styles.boardText}>
                        Ce site sert surtout a conserver des explications utiles, des essais
                        verifies et quelques ressources assez claires pour etre retrouvees plus
                        tard sans friction.
                      </p>
                    </div>
                  </aside>
                </div>
              </div>
            </section>

            <section className={styles.section}>
              <div className={styles.sectionHeader}>
                <span className={`retro-badge ${styles.sectionTag}`}>Ce que vous trouverez ici</span>
                <h2 className={styles.sectionTitle}>Trois piles de notes, pas une vitrine generique.</h2>
              </div>

              <div className={styles.shareGrid}>
                {shareCards.map((card, index) => (
                  <article
                    key={card.title}
                    className={`retro-panel ${styles.shareCard}`}
                    style={{transform: `rotate(${index % 2 === 0 ? '-1.2deg' : '1deg'})`}}>
                    <div className={styles.shareCardTop}>
                      <span className={styles.shareNumber}>{card.number}</span>
                      <span className="retro-badge">{card.note}</span>
                    </div>
                    <h3 className={styles.shareTitle}>{card.title}</h3>
                    <p className={styles.shareDescription}>{card.description}</p>
                  </article>
                ))}
              </div>
            </section>

            <section className={styles.section}>
              <div className={styles.processLayout}>
                <div className={`retro-window ${styles.processWindow}`}>
                  <div className="retro-window-titlebar">
                    <span>Comment je construis ces contenus</span>
                    <span>observe / teste / partage</span>
                  </div>
                  <div className={`retro-window-body ${styles.processBody}`}>
                    {processSteps.map((step, index) => (
                      <article key={step.title} className={styles.processStep}>
                        <div className={styles.processIndex}>{index + 1}</div>
                        <div>
                          <h3 className={styles.processTitle}>{step.title}</h3>
                          <p className={styles.processText}>{step.body}</p>
                        </div>
                      </article>
                    ))}
                    <svg viewBox="0 0 600 120" className={styles.processLine} aria-hidden="true">
                      <path d="M14 70 C140 20, 210 110, 320 56 S470 22, 586 68" />
                    </svg>
                  </div>
                </div>

                <div className={`retro-panel retro-panel-yellow ${styles.pullQuote}`}>
                  <p className={styles.pullQuoteLead}>Ce site prefere les explications utiles aux effets de manche.</p>
                  <p className={styles.pullQuoteText}>
                    Si un sujet est ici, c&apos;est qu&apos;il a laisse une trace dans un projet,
                    un cours, un test, ou une discussion qui valait la peine d&apos;etre remise a
                    plat.
                  </p>
                </div>
              </div>
            </section>

            <section className={styles.section}>
              <div className={`retro-window ${styles.projectsWindow}`}>
                <div className="retro-window-titlebar">
                  <span>Quelques outils en ligne</span>
                  <span>petit mur de post-it</span>
                </div>
                <div className={`retro-window-body ${styles.projectsBody}`}>
                  <div className={styles.projectsHeader}>
                    <div>
                      <h2 className={styles.sectionTitle}>Des projets simples, concrets, et deja utiles.</h2>
                      <p className={styles.projectsIntro}>
                        Des outils que je fais evoluer en dehors des articles, avec une logique
                        stable: utile d&apos;abord, lisible ensuite, et assez souple pour vivre
                        longtemps.
                      </p>
                    </div>
                    <Link className="retro-button retro-button-outline" to="/mes-projets">
                      Voir tous les projets
                    </Link>
                  </div>

                  <div className={styles.projectNotes}>
                    {projectRows.map((project) => (
                      <article
                        key={project.name}
                        className={`retro-panel retro-panel-yellow ${styles.projectNote}`}
                        style={{transform: `rotate(${project.angle})`}}>
                        <span className={styles.noteTape} aria-hidden="true" />
                        <span className="retro-badge">{project.status}</span>
                        <h3 className={styles.projectTitle}>{project.name}</h3>
                        <p className={styles.projectDescription}>{project.description}</p>
                        <Link className="retro-button retro-button-primary" to={project.href}>
                          Ouvrir l&apos;outil
                        </Link>
                      </article>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <section className={styles.section}>
              <div className="retro-construction">
                <div className={`retro-construction-inner ${styles.ctaBlock}`}>
                  <span className="retro-badge">A suivre</span>
                  <h2 className={styles.ctaTitle}>Envie de fouiller un peu plus loin ?</h2>
                  <p>
                    Le blog sert de carnet de bord. La documentation sert de base plus posee.
                    Ensemble, les deux racontent pourquoi les projets existent et ce qu&apos;ils
                    m&apos;ont appris.
                  </p>
                  <div className={styles.heroActions}>
                    <Link className="retro-button retro-button-danger" to="/blog">
                      Explorer le blog
                    </Link>
                    <Link className="retro-button retro-button-outline" to="/docs/intro">
                      Lire la documentation
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
