import CardItem from '../components/cardItem'
import GridLayout from '../components/gridLayout'
import PageLayout from '../components/pageLayout'

const posts = [
  {
    imageSrc: '/assets/images/blog-mal.png',
    imageAlt: 'Blog Mal',
    linkHref: '/posts/blog-mal',
    title: 'Quyen Lam Blog',
  },
]

const Posts = () => {
  return (
    <PageLayout title="posts">
      <GridLayout>
        {posts.map((item) => (
          <CardItem key={item.linkHref} {...item} />
        ))}
      </GridLayout>
    </PageLayout>
  )
}

export default Posts

export { getServerSideProps } from '../components/chakraui'
