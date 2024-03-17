import getAllBlog, { getAllProject } from '@/lib/api'

const HOST_URL = process.env.NEXT_PUBLIC_HOST_URL

function generateSiteMap(projects, blogs) {
  const projectUrls = projects
    .map((id) => {
      return `<url><loc>${HOST_URL}/project/${id}</loc></url>`
    })
    .join('')

  const blogUrls = blogs
    .map((id) => {
      return `<url><loc>${HOST_URL}/blog/${id}</loc></url>`
    })
    .join('')

  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url><loc>${HOST_URL}</loc></url>
      <url><loc>${HOST_URL}/project</loc></url>
      <url><loc>${HOST_URL}/blog</loc></url>
      ${projectUrls}
      ${blogUrls}
    </urlset>
  `
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  const projects = getAllProject()
  const blogs = getAllBlog(['slug']).map((item) => item.slug)

  const sitemap = generateSiteMap(projects, blogs)

  res.setHeader('Content-Type', 'text/xml')
  res.write(sitemap)
  res.end()

  return {
    props: {},
  }
}

export default SiteMap
