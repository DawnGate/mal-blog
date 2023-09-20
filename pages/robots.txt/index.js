const baseUrl = process.env.NEXT_PUBLIC_HOST_URL ? process.env.NEXT_PUBLIC_HOST_URL : 'http://localhost:3000'

function Robots() {
  // Empty file
}

export async function getServerSideProps({ res }) {
  res.setHeader('Content-Type', 'text/plain')
  const robotsTxt = `User-agent: *\nAllow: /\nSitemap: ${baseUrl}/sitemap_three.xml\nHost: ${baseUrl}
  `

  res.write(robotsTxt)
  res.end()
  return {
    props: {},
  }
}

export default Robots
