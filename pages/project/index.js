import { HStack } from '@chakra-ui/react'
import CardItem from '../../components/cardItem'
import GridLayout from '../../components/layout/gridLayout'
import PageLayout from '../../components/layout/pageLayout'
import CustomText from '../../components/text'

const posts = [
  {
    imageSrc: '/assets/images/blog-mal.png',
    imageAlt: 'Blog Mal',
    linkHref: '/project/blog-mal',
    title: 'Quyen Lam Blog',
  },
]

const NoPost = () => {
  return (
    <HStack justifyContent="center">
      <CustomText fontSize="xl">No Project, visit later for update</CustomText>
    </HStack>
  )
}

const Posts = () => {
  return (
    <PageLayout title="project">
      {posts.length ? (
        <GridLayout>
          {posts.map((item) => (
            <CardItem key={item.linkHref} {...item} />
          ))}
        </GridLayout>
      ) : (
        <NoPost />
      )}
    </PageLayout>
  )
}

export default Posts
