import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '466'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '3fc'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '35f'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '0d7'),
            routes: [
              {
                path: '/docs/Communication and Data Contract',
                component: ComponentCreator('/docs/Communication and Data Contract', '961'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Deterministic Stream Processing',
                component: ComponentCreator('/docs/Deterministic Stream Processing', '3b0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Event-Driven Microservices Fundamentals',
                component: ComponentCreator('/docs/Event-Driven Microservices Fundamentals', '7b4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Event-Driven Processing Basics',
                component: ComponentCreator('/docs/Event-Driven Processing Basics', '756'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Integrating Event-Driven Architectures With Existing Systems',
                component: ComponentCreator('/docs/Integrating Event-Driven Architectures With Existing Systems', 'e9a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Why Event-Driven Microservices',
                component: ComponentCreator('/docs/Why Event-Driven Microservices', 'a42'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'e5f'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
