const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {},
})

const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  reactStrictMode: true,
}

module.exports = withMDX(nextConfig)
