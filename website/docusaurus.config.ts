import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Pierre-Arnaud Delsaut | Blog',
  tagline: 'Blog personnel de Pierre-Arnaud Delsaut',
  favicon: 'img/favicon.ico',

  markdown: {
    mermaid: true
  },
  themes: ['@docusaurus/theme-mermaid'],

  // Set the production url of your site here
  url: 'https://agreeable-stone-05e821510.5.azurestaticapps.net',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'diplomegalo', // Usually your GitHub org/user name.
  projectName: 'event-driven', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr'],
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/docs',
          sidebarPath: './sidebars.ts',
          // editUrl: 'https://github.com/diplomegalo/event-driven/tree/master/website/docs',

        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: 'all',
            title: 'Blog personnel de Pierre-Arnaud Delsaut',
            description: 'Blog personnel de Pierre-Arnaud Delsaut',
          }
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],


  themeConfig: {
    colorMode: {
      defaultMode: 'light', // Définit le mode par défaut sur "light"
      disableSwitch: false, // Permet à l'utilisateur de changer de mode (optionnel)
    },
    navbar: {
      title: 'Pierre-Arnaud Delsaut',
      logo: {
        alt: 'Blog Personnel de Pierre-Arnaud Delsaut',
        src: 'img/logo.jpg',
      },
      items: [
        {
          to: '/blog',
          label: 'Blog',
          position: 'left',
        },
        {
          to: '/docs/eda',
          label: 'Event-Driven Architecture',
          position: 'left',
          activeBaseRegex: '/docs/eda',
        },
        {
          href: 'https://github.com/diplomegalo',
          position: 'right',
          className: 'navbar-github',
          'aria-label': 'GitHub',
        },
        {
          href: 'https://www.linkedin.com/in/pierre-arnaud-delsaut-b6a9a742/',
          position: 'right',
          className: 'navbar-linkedin',
          'aria-label': 'LinkedIn',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Pierre-Arnaud Delsaut, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
