import React, {type ReactNode, useEffect, useState} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import styles from './index.module.css';

const errorMessages = [
  '404: FILE NOT FOUND',
  'BAD URL OR TYPING INCIDENT DETECTED',
  'CANNOT OPEN PAGE.BAT',
  'THIS ADDRESS DOES NOT EXIST ANYMORE',
  'PAGE NOT FOUND (CHECK YOUR BOOKMARKS)',
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
                '404 ALERT',
                'UNDER CONSTRUCTION SOMEWHERE ELSE',
                'TRY HOME OR BLOG',
                'MAGNUS DEV ERROR CENTER',
                'CHECK THE URL',
                '404 ALERT',
                'UNDER CONSTRUCTION SOMEWHERE ELSE',
                'TRY HOME OR BLOG',
              ].map((item, index) => (
                <span key={`${item}-${index}`}>{item}</span>
              ))}
            </div>
          </div>

          <section className={styles.section}>
            <div className="retro-window retro-window-strong">
              <div className="retro-window-titlebar">
                <span>error_404.exe</span>
                <div className="retro-window-controls" aria-hidden="true">
                  <span className="retro-window-control" />
                  <span className="retro-window-control" />
                  <span className="retro-window-control" />
                </div>
              </div>

              <div className={`retro-window-body ${styles.content}`}>
                <div className={styles.topRow}>
                  <div>
                    <span className="retro-eyebrow">Module introuvable</span>
                    <h1 className={`${styles.errorCode} retro-rainbow`}>404</h1>
                  </div>
                  <div className="retro-counter">
                    <div>STATUS: <strong>NOT FOUND</strong></div>
                    <div>RETRY: <strong>ADVISED</strong></div>
                    <div>MOOD: <strong>OUPS</strong></div>
                  </div>
                </div>

                <div className={styles.grid}>
                  <div className={`retro-panel retro-panel-yellow ${styles.messagePanel}`}>
                    <h2 className={styles.title}>Page introuvable</h2>
                    <p className={styles.description}>
                      Cette page a probablement ete deplacee, supprimee ou n&apos;a jamais existe.
                      Le classique accident de navigation du web.
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

                  <div className="retro-window">
                    <div className="retro-window-titlebar">
                      <span>error_log.txt</span>
                      <span>lecture seule</span>
                    </div>
                    <div className="retro-window-body">
                      <pre className={`retro-panel ${styles.codeBlock}`}>
{`> ${errorMessage}

// Diagnostic rapide:
// - verifier l'URL
// - revenir a l'accueil
// - ouvrir le blog ou la documentation

const solution = 'repartir sur une page valide';`}
                      </pre>
                    </div>
                  </div>
                </div>

                <div className="retro-construction">
                  <div className={`retro-construction-inner ${styles.tip}`}>
                    <span className="retro-badge retro-badge-hot">TIP</span>
                    <p>
                      Si vous arrivez ici depuis un ancien lien, la page d&apos;accueil ou la doc
                      ont probablement ce qu&apos;il vous faut.
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
