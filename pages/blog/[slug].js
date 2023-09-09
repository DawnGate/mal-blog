import PageLayout from '@/components/layout/pageLayout'
import mdxComponents from '@/components/mdx-components'
import getAllBlog, { getBlogBySlug } from '@/lib/api'
import { MDXRemote } from 'next-mdx-remote'

const Blog = ({ blogMdxSource }) => {
  return (
    <PageLayout title={blogMdxSource.frontmatter.title}>
      <MDXRemote components={mdxComponents} {...blogMdxSource} />
    </PageLayout>
  )
}

export async function getStaticProps({ params }) {
  const blogMdxSource = await getBlogBySlug(params.slug)
  return {
    props: {
      blogMdxSource,
    },
  }
}

export async function getStaticPaths() {
  const blogs = getAllBlog(['slug'])

  return {
    paths: blogs.map((item) => ({
      params: {
        slug: item.slug,
      },
    })),
    fallback: false,
  }
}

export default Blog
