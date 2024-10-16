import type { UserConfig } from '~/types'

export const userConfig: Partial<UserConfig> = {
  // Override the default config here
  // site: { title: "講評世界" },
  // seo: { twitter: "@moeyua13" },
  site: {
    title: 'Gabriel Luiz',
    subtitle: 'Portifolio',
    author: 'GabrielL915',
    description: 'A portifolio',
    website: 'https://gabriell915.github.io',
    socialLinks: [
      {
        name: 'github',
        href: 'https://github.com/GabrielL915https://github.com/GabrielL915',
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
      '<a target="_blank" href="https://github.com/GabrielL915/GabrielL915.github.io">GitHub Repository</a>',
    ],
  },
  appearance: {
    theme: 'dark',
    locale: 'en-us',
  },
}
