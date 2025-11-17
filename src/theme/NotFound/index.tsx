import React, {type ReactNode, useEffect, useState} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import styles from './index.module.css';

const errorMessages = [
  "undefined is not a function",
  "Cannot read property 'page' of undefined",
  "404: Page not found (comme une variable non déclarée)",
  "Cette page a fait une erreur de syntaxe",
  "Erreur: Page introuvable (comme un étudiant qui cherche dans la mauvaise documentation)",
];

export default function NotFoundWrapper(): ReactNode {
  const [errorMessage, setErrorMessage] = useState(errorMessages[0]);
  const [showCode, setShowCode] = useState(false);

  useEffect(() => {
    const randomMessage = errorMessages[Math.floor(Math.random() * errorMessages.length)];
    setErrorMessage(randomMessage);
    setShowCode(true);
  }, []);

  return (
    <Layout title="404 - Page introuvable">
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.errorCode}>
            <span className={styles.number}>4</span>
            <span className={styles.zero}>0</span>
            <span className={styles.number}>4</span>
          </div>
          
          <h1 className={styles.title}>Oups ! Page introuvable</h1>
          
          <div className={styles.codeBlock}>
            <div className={styles.codeHeader}>
              <span className={styles.codeDot}></span>
              <span className={styles.codeDot}></span>
              <span className={styles.codeDot}></span>
              <span className={styles.codeTitle}>error.js</span>
            </div>
            <pre className={styles.code}>
              <code>
{showCode && (
  <>
                {`> ${errorMessage}

`}
                <span className={styles.comment}>// Cette page n'existe pas</span>
                {'\n'}
                <span className={styles.comment}>// Comme un étudiant qui copie-colle</span>
                {'\n'}
                <span className={styles.comment}>// sans vérifier l'URL 😅</span>
                {'\n\n'}
                <span className={styles.keyword}>const</span>
                {' '}
                <span className={styles.variable}>solution</span>
                {' = '}
                <span className={styles.string}>'Retourner à l\'accueil'</span>
                {';'}
              </>
            )}
              </code>
            </pre>
          </div>

          <p className={styles.description}>
            Cette page a probablement été supprimée ou n'a jamais existé.
            <br />
            <strong>Comme une variable non déclarée, elle est undefined !</strong>
          </p>

          <div className={styles.actions}>
            <Link
              className={styles.button}
              to="/">
              🏠 Retour à l'accueil
            </Link>
            <Link
              className={styles.buttonSecondary}
              to="/blog">
              📝 Voir le blog
            </Link>
          </div>

          <div className={styles.funFact}>
            <p>💡 <strong>Le saviez-vous ?</strong></p>
            <p>Les erreurs 404 sont comme les bugs dans le code : elles arrivent quand on ne vérifie pas ce qu'on fait !</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
