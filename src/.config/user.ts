import type { UserConfig } from '~/types'

export const userConfig: Partial<UserConfig> = {
  // Override the default config here
  // site: { title: "講評世界" },
  // seo: { twitter: "@moeyua13" },
  site: {
    title: 'Gabriel',
    subtitle: 'Portifolio Blog',
    author: 'GabrielL915',
    description: 'A portifolio',
    socialLinks: [
      {
        name: 'github',
        href: '',
      },
    ],
    navLinks: [
      {
        name: 'Posts',
        href: '/',
      },
      {
        name: 'Archive',
        href: '/archive',
      },
      {
        name: 'Categories',
        href: '/categories',
      },
      {
        name: 'About',
        href: '/about',
      },
      {
        name: 'Projects',
        href: '/projects',
      },
    ],
    footer: [
      '© %year <a target="_blank" href="%website">%author</a>',
      '<a target="_blank" href="https://github.com/Moeyua/astro-theme-typography">GitHub Repository</a>',
    ],
  },
  appearance: {
    theme: 'dark',
    locale: 'en-us',
  },
}
