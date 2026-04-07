import React, {type ReactNode, useEffect, useState} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import styles from './index.module.css';

const errorMessages = [
  'Cette page s est probablement deplacee.',
  "Quelqu'un a peut-etre change l'adresse.",
  "Le lien etait bon un jour, moins aujourd'hui.",
  'Cette note ne vit plus a cet endroit.',
  "On dirait une URL qui a rate son virage.",
];

export default function NotFoundWrapper(): ReactNode {
  const [errorMessage, setErrorMessage] = useState(errorMessages[0]);

  useEffect(() => {
    const randomMessage =
      errorMessages[Math.floor(Math.random() * errorMessages.length)];
    setErrorMessage(randomMessage);
  }, []);

  return (
    <Layout title="404 - Page introuvable">
      <main className={`retro-theme retro-page-shell ${styles.container}`}>
        <div className={`retro-page-width ${styles.wrapper}`}>
          <div className="retro-marquee" aria-hidden="true">
            <div className="retro-marquee-track">
              {[
                'PAGE INTROUVABLE',
                'RETROUVER LE FIL',
                'RETOUR A L ACCUEIL',
                'OUVRIR LE BLOG',
                'PAGE INTROUVABLE',
                'RETROUVER LE FIL',
              ].map((item, index) => (
                <span key={`${item}-${index}`}>{item}</span>
              ))}
            </div>
          </div>

          <section className={styles.section}>
            <div className={`retro-window retro-window-strong ${styles.paperStack}`}>
              <div className={`retro-window-body ${styles.content}`}>
                <div className={styles.topRow}>
                  <div className={styles.headlineBlock}>
                    <span className="retro-eyebrow">Oups, feuille egaree</span>
                    <h1 className={styles.errorCode}>404</h1>
                    <p className={styles.lead}>
                      La page que vous cherchez n&apos;est plus sur ce bout de carnet.
                    </p>
                  </div>

                  <div className={`retro-panel retro-panel-yellow ${styles.quoteCard}`}>
                    <span className={styles.pin} aria-hidden="true" />
                    <p className={styles.quoteLabel}>Pense-bete</p>
                    <p className={styles.quoteText}>{errorMessage}</p>
                  </div>
                </div>

                <div className={styles.grid}>
                  <div className={`retro-panel ${styles.messagePanel}`}>
                    <h2 className={styles.title}>Reprendre le fil</h2>
                    <p className={styles.description}>
                      Le plus simple est souvent de repartir depuis une page stable. Le blog et la
                      documentation couvrent la plupart des sujets de ce site.
                    </p>
                    <div className={styles.actions}>
                      <Link className="retro-button retro-button-primary" to="/">
                        Retour a l&apos;accueil
                      </Link>
                      <Link className="retro-button retro-button-outline" to="/blog">
                        Voir le blog
                      </Link>
                    </div>
                  </div>

                  <div className={`retro-panel ${styles.doodleCard}`}>
                    <svg viewBox="0 0 320 220" className={styles.doodle} aria-hidden="true">
                      <path d="M28 50 C80 26, 118 24, 168 46" />
                      <path d="M168 46 l46 10 l-30 26" />
                      <path d="M38 160 C108 128, 148 198, 286 130" />
                      <rect x="52" y="76" width="90" height="60" rx="18" />
                      <rect x="182" y="108" width="82" height="56" rx="16" />
                      <circle cx="234" cy="54" r="24" />
                      <text x="69" y="112">home</text>
                      <text x="197" y="141">blog</text>
                      <text x="216" y="60">doc</text>
                    </svg>
                    <p className={styles.doodleCaption}>
                      Un petit raccourci griffonne vers les pages qui servent le plus souvent de
                      point de reprise.
                    </p>
                  </div>
                </div>

                <div className="retro-construction">
                  <div className={`retro-construction-inner ${styles.tip}`}>
                    <span className="retro-badge retro-badge-hot">Conseil</span>
                    <p>
                      Si vous arrivez ici depuis un ancien lien, le contenu existe peut-etre encore
                      ailleurs avec un titre ou une structure plus claire qu&apos;avant.
                    </p>
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
