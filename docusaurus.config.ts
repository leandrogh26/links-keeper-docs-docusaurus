import type {Config} from '@docusaurus/types';

const config: Config = {
  title: 'Links Keeper',
  tagline: 'Sistema gerenciador de projetos',
  url: 'https://leandrogh26.github.io',
  baseUrl: '/links-keeper-docs-docusaurus/',
  onBrokenLinks: 'throw',
  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR'],
  },
  presets: [
    [
      'classic',
      {
        docs: false,
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],
  themeConfig: {
    navbar: {
      title: 'Links Keeper',
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
    },
  },
};

export default config;
