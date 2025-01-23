import { getCollection } from 'astro:content'
import dayjs from 'dayjs'
import MarkdownIt from 'markdown-it'
import sanitizeHtml from 'sanitize-html'
import type { Post, Project } from '~/types'

export async function getCategories() {
  const posts = await getPosts()
  const categories = new Map<string, Post[]>()

  for (const post of posts) {
    if (post.data.categories) {
      for (const c of post.data.categories) {
        const posts = categories.get(c) || []
        posts.push(post)
        categories.set(c, posts)
      }
    }
  }

  return categories
}

export async function getPosts() {
  const posts = await getCollection('posts')
  posts.sort((a, b) => {
    return dayjs(a.data.pubDate).isBefore(dayjs(b.data.pubDate)) ? 1 : -1
  })
  return posts
}

const parser = new MarkdownIt()
export function getPostDescription(post: Post) {
  if (post.data.description) {
    return post.data.description
  }

  const html = parser.render(post.body)
  const sanitized = sanitizeHtml(html, { allowedTags: [] })
  return sanitized.slice(0, 400)
}

export function formatDate(date: Date, format: string = 'YYYY-MM-DD') {
  return dayjs(date).format(format)
}

export function getPathFromCategory(
  category: string,
  category_map: { name: string, path: string }[],
) {
  const mappingPath = category_map.find(l => l.name === category)
  return mappingPath ? mappingPath.path : category
}

// projectsArray como array de projetos com categorias
const projectsArray: Project[] = [
  {
    slug: 'https://github.com/GabrielL915/auth-api',
    data: {
      title: 'Auth-api',
      categories: ['Backend', "Typescript", "Nestjs", "Knex", "PostgresSQL", "Docker", "JWT", "Clean Architecture", "Layered Architecture"],
    },
  },
  {
    slug: 'https://github.com/GabrielL915/ParkingControl',
    data: {
      title: 'Parking Control',
      categories: ['Backend', "Java", "Spring", "H2", "Junit", "Mockito", "Swagger"],
    },
  },
  {
    slug: 'https://github.com/GabrielL915/escola-ti-backend',
    data: {
      title: 'Escola TI Backend',
      categories: ['Backend', "Typescript", "Nestjs", "PostgresSQL", "Knex", "Jest", "SuperTest", "Swagger"],
    },
  },
  {
    slug: 'https://github.com/GabrielL915/web-search-cli',
    data: {
      title: 'Web-search-cli',
      categories: ['Backend', "Go"],
    },
  },
  {
    slug: 'https://github.com/GabrielL915/backup-system',
    data: {
      title: 'Backup System',
      categories: ['Backend', "Java"],
    },
  },
  {
    slug: 'https://github.com/GabrielL915/VisionUML',
    data: {
      title: 'VisionUML',
      categories: ['Frontend', "Typescript"],
    },
  },
  {
    slug: 'https://github.com/GabrielL915/meal-planner',
    data: {
      title: 'Meal Planner',
      categories: ['Fullstack', 'Typescript', "Nextjs", "React", "DrizzleORM", "PostgresSQL"],
    },
  },

]

// Função para retornar projetos
export async function getProjects(): Promise<Project[]> {
  return projectsArray
}

// Função para mapear projetos em categorias
export async function getProjectCategories() {
  const projects = await getProjects()
  const categories = new Map<string, Project[]>()

  for (const project of projects) {
    if (project.data.categories) {
      for (const c of project.data.categories) {
        const projects = categories.get(c) || []
        projects.push(project)
        categories.set(c, projects)
      }
    }
  }

  return categories
}
