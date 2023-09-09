import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const blogDirectory = join(process.cwd(), '_blog')

const getBlogSlugs = () => {
  return fs.readdirSync(blogDirectory)
}

export const getBlogBySlug = (slug, fields) => {
  const realSlug = slug.replace(/.mdx$/, '')
  const fullPath = join(blogDirectory, `${realSlug}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf-8')
  const { data, content } = matter(fileContents)

  // ensure only minimal field need can expose

  let item = {}

  fields.forEach((field) => {
    if (field === 'slug') {
      item[field] = realSlug
    }
    if (field === 'content') {
      item[field] = content
    }

    if (typeof data[field] !== 'undefined') {
      item[field] = data[field]
    }
  })

  return item
}

const getAllBlog = (fields) => {
  const slugs = getBlogSlugs()
  const posts = slugs
    .map((slug) => getBlogBySlug(slug, fields))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))

  return posts
}

export default getAllBlog
