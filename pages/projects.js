import { Text } from '@chakra-ui/react'
import PageLayout from '../components/pageLayout'

const Projects = () => {
  return (
    <PageLayout title="projects">
      <Text>Projects</Text>
    </PageLayout>
  )
}

export default Projects

export { getServerSideProps } from '../components/chakraui'
