import { Text } from '@chakra-ui/react'
import PageLayout from '../components/pageLayout'

const Projects = () => {
  return (
    <PageLayout title="blog">
      <Text>Blogs</Text>
    </PageLayout>
  )
}

export default Projects

export { getServerSideProps } from '../components/chakraui'
