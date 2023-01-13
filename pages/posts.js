import { Text } from '@chakra-ui/react'
import PageLayout from '../components/pageLayout'

const Posts = () => {
  return (
    <PageLayout title="posts">
      <Text>Posts</Text>
    </PageLayout>
  )
}

export default Posts

export { getServerSideProps } from '../components/chakraui'
