import { HStack } from '@chakra-ui/react'
import CustomText from '../../components/text'
import { CardBlogItem } from '../../components/cardItem'
import GridLayout from '../../components/layout/gridLayout'

import PageLayout from '../../components/layout/pageLayout'
import getAllBlog from '../../lib/api'

const NoBlog = () => {
  return (
    <HStack justifyContent="center">
      <CustomText fontSize="xl">No Blog, visit later for update</CustomText>
    </HStack>
  )
}

const Projects = ({ allBlogs }) => {
  return (
    <PageLayout title="blog">
      {allBlogs.length ? (
        <GridLayout>
          {allBlogs.map((item) => (
            <CardBlogItem
              key={item.slug}
              linkHref={`/blog/${item.slug}`}
              {...item}
            />
          ))}
        </GridLayout>
      ) : (
        <NoBlog />
      )}
    </PageLayout>
  )
}

export default Projects

export const getStaticProps = async () => {
  const allBlogs = getAllBlog(['title', 'date', 'slug', 'excerpt'])

  return {
    props: { allBlogs },
  }
}
