// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import dotenv from 'dotenv';
import { themes as prismThemes } from 'prism-react-renderer';

// Load environment variables from .env file
dotenv.config();

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Magnus Dev',
  tagline: 'Partage de ma vie de développeur, professeur et ingénieur en IA',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here (without sub-path)
  url: process.env.SITE_URL || 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: process.env.BASE_URL || '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: process.env.GITHUB_ORG || 'your-github-username', // Usually your GitHub org/user name.
  projectName: process.env.GITHUB_REPO || 'best-off-student', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: 'docs',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            process.env.GITHUB_ORG && process.env.GITHUB_REPO
              ? `https://github.com/${process.env.GITHUB_ORG}/${process.env.GITHUB_REPO}/tree/main/`
              : undefined,
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            process.env.GITHUB_ORG && process.env.GITHUB_REPO
              ? `https://github.com/${process.env.GITHUB_ORG}/${process.env.GITHUB_REPO}/tree/main/`
              : undefined,
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  plugins: [
    [
      require.resolve('docusaurus-lunr-search'),
      {
        languages: ['fr', 'en'], // Support français et anglais
        highlightResult: true, // Mettre en évidence les résultats
        maxHits: 5, // Nombre maximum de résultats
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/image.png',
      metadata: [
        {name: 'keywords', content: 'développement, programmation, étudiants, école ingénieur, erreurs code, IA, LLM, pédagogie, bonnes pratiques, docker, git, formation développeur'},
        {name: 'author', content: 'Magnus'},
        {property: 'og:type', content: 'website'},
        {property: 'og:locale', content: 'fr_FR'},
        {name: 'twitter:card', content: 'summary_large_image'},
      ],
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Magnus Dev',
        logo: {
          alt: 'Magnus Dev - Logo',
          src: 'img/image.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: process.env.GITHUB_ORG && process.env.GITHUB_REPO
              ? `https://github.com/${process.env.GITHUB_ORG}/${process.env.GITHUB_REPO}`
              : 'https://github.com',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              {
                label: 'Documentation',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: process.env.GITHUB_ORG && process.env.GITHUB_REPO
                  ? `https://github.com/${process.env.GITHUB_ORG}/${process.env.GITHUB_REPO}`
                  : 'https://github.com',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Magnus Dev. Tous droits réservés.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
