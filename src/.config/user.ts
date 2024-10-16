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
        href: 'https://github.com/GabrielL915',
      },
    ],
    navLinks: [
      {
        name: 'Posts',
        href: '/GabrielL915.github.io',
      },
      {
        name: 'Archive',
        href: '/GabrielL915.github.io/archive',
      },
      {
        name: 'Categories',
        href: '/GabrielL915.github.io/categories',
      },
      {
        name: 'About',
        href: '/GabrielL915.github.io/about',
      },
      {
        name: 'Projects',
        href: '/GabrielL915.github.io/projects',
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
