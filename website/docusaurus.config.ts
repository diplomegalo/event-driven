import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';

const config: Config = {
  title: 'Pierre-Arnaud Delsaut | Blog',
  tagline: 'Blog personnel de Pierre-Arnaud Delsaut',
  favicon: 'img/favicon.ico',

  markdown: {
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  url: 'https://padelsaut.dev',
  baseUrl: '/',

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
      '@docusaurus/preset-classic',
      {
        docs: {
          onInlineTags: 'throw',
        }, 
        blog: {
          routeBasePath: '/',
          showReadingTime: true,
          blogSidebarCount: 0,
          onInlineTags: 'throw'
        },
      },
    ],
  ],

  themes: ['@docusaurus/theme-mermaid'],

  themeConfig: {
    colorMode: {
      defaultMode: 'light',
    },
    navbar: {
      logo: {
        alt: 'Blog Personnel de Pierre-Arnaud Delsaut',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'methodologie/index',
          position: 'left',
          label: 'Méthodologie',
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
    mermaid: {
      theme: { light: 'neutral', dark: 'forest' },
    },
  },
};

export default config;
