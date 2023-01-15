import CardItem from '../components/cardItem'
import PageLayout from '../components/pageLayout'

const Posts = () => {
  return (
    <PageLayout title="posts">
      <CardItem />
    </PageLayout>
  )
}

export default Posts

export { getServerSideProps } from '../components/chakraui'
