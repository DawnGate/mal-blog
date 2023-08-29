import ProjectLayout from '@/components/layout/projectLayout'

const initData = {
  title: 'blog-mal',
  titleText: 'Blog Mal',
  techStacks: ['nextjs', 'chakra-ui', 'emotion', 'framer-motion'],
  descriptionText:
    'This is blog for me can sharing some projects I do and some blogs I write.',
  previewImages: [
    {
      title: 'blog mal homepage',
      source: '/assets/images/projects/blog-mal-home-page.png',
      description: 'Home page',
    },
  ],
}
const BlogMal = () => {
  return <ProjectLayout {...initData} />
}

export default BlogMal

export { getServerSideProps } from '@/components/chakraui'
