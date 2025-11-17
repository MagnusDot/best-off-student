import Head from '@docusaurus/Head';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import React from 'react';

export default function SEOHead({title, description, keywords, image, type = 'website'}) {
  const {siteConfig} = useDocusaurusContext();
  const siteUrl = siteConfig.url || 'https://your-docusaurus-site.example.com';
  const baseUrl = siteConfig.baseUrl || '/';
  const fullTitle = title ? `${title} | Best Off Student` : 'Best Off Student - Erreurs d\'étudiants en développement';
  const fullDescription = description || 'Blog pédagogique sur les erreurs commises par les étudiants en école d\'ingénieur développeur. Exemples concrets, bonnes pratiques et sensibilisation à l\'utilisation critique des IA et LLM en programmation.';
  const defaultImageUrl = useBaseUrl('/img/bestoff.jpg');
  const fullImage = image || `${siteUrl}${defaultImageUrl}`;
  const defaultKeywords = 'développement, programmation, étudiants, école ingénieur, erreurs code, IA, LLM, pédagogie, bonnes pratiques, docker, git, formation développeur';
  const fullKeywords = keywords ? `${keywords}, ${defaultKeywords}` : defaultKeywords;

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Best Off Student',
    description: fullDescription,
    url: siteUrl,
    author: {
      '@type': 'Person',
      name: 'Magnus',
      jobTitle: 'Prof en école d\'ingénieur développeur',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Best Off Student',
    },
    inLanguage: 'fr-FR',
  };

  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={fullDescription} />
      <meta name="keywords" content={fullKeywords} />
      <meta name="author" content="Magnus" />
      <meta name="language" content="French" />
      <meta name="revisit-after" content="7 days" />
      <meta name="robots" content="index, follow" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:locale" content="fr_FR" />
      <meta property="og:site_name" content="Best Off Student" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={siteUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:image" content={fullImage} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Head>
  );
}

