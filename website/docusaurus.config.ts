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
          docId: 'event-storming/event-storming',
          position: 'left',
          label: 'Event Storming',
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
  },
};

export default config;
