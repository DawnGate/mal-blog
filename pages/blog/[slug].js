import PageLayout from '@/components/layout/pageLayout'
import getAllBlog, { getBlogBySlug } from '@/lib/api'
import markdownToHtml from '@/lib/markdownToHtml'

const Blog = ({ blog }) => {
  return (
    <PageLayout title={blog.title}>
      <div dangerouslySetInnerHTML={{ __html: blog.content }} />
    </PageLayout>
  )
}

export async function getStaticProps({ params }) {
  const blog = getBlogBySlug(params.slug, ['title', 'date', 'slug', 'content'])
  const content = await markdownToHtml(blog.content || '')
  return {
    props: {
      blog: {
        ...blog,
        content,
      },
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
