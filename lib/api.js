import fs from 'fs'
import { join } from 'path'
import { serialize } from 'next-mdx-remote/serialize'
import matter from 'gray-matter'

import rehypeHighlight from 'rehype-highlight'

const blogDirectory = join(process.cwd(), '_blog')

const getBlogSlugs = () => {
  return fs.readdirSync(blogDirectory)
}

export const getBlogBySlug = (slug = '') => {
  const realSlug = slug.replace(/\.mdx$/, '')
  const fullPath = join(blogDirectory, `${realSlug}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf-8')
  const mdxSource = serialize(fileContents, {
    parseFrontmatter: true,
    mdxOptions: {
      remarkPlugins: [],
      // @ts-ignore
      rehypePlugins: [rehypeHighlight],
      format: 'mdx',
    },
  })

  return mdxSource
}

const getBlogBySlugGrayMatter = (slug = '', fields = ['slug']) => {
  const realSlug = slug.replace(/\.mdx$/, '')
  const fullPath = join(blogDirectory, `${realSlug}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf-8')
  const { data } = matter(fileContents)

  let item = {}

  fields.forEach((field) => {
    if (field === 'slug') {
      item[field] = realSlug
    }

    if (typeof data[field] !== 'undefined') {
      item[field] = data[field]
    }
  })

  return item
}

const getAllBlog = (fields = ['slug']) => {
  const slugs = getBlogSlugs()
  const posts = slugs
    .map((slug) => getBlogBySlugGrayMatter(slug, fields))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))

  return posts
}

export default getAllBlog
