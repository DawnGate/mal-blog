import ProjectLayout from '@/components/layout/projectLayout'
import CustomText from '@/components/text'

const initData = {
  title: 'blog-mal',
  titleText: 'Blog Mal',
  techStacks: ['nextjs', 'chakra-ui', 'emotion', 'framer-motion'],
  previewImages: [
    {
      title: 'blog mal homepage',
      source: '/assets/images/projects/blog-mal-home-page.png',
      description: 'Home page, the picture I take from the home page of blog project',
    },
  ],
  typeProject: 'personal',
}
const BlogMal = () => {
  const descriptionBody = (
    <>
      <CustomText active={true} textIndent={8} marginBottom={1}>
        This is blog for me can sharing some projects I do and some blogs I write.
      </CustomText>
      <CustomText active={false} textIndent={8}>
        Long time working with react, so I chose the NextJs for next technology will need to achieve. Because I see how
        a framework support better for scratch building.
      </CustomText>
      <CustomText active={false} textIndent={8}>
        Why chakraui? When I build this project I need chose between chakraui and antdesign. I come with chakra because
        with a ui library it has the easy for new learner and give you a power to full control and settings. Different
        with antd, where you hardly start from 0.
      </CustomText>
      <CustomText active={false} textIndent={8}>
        Lastly, emotion and framer motion. The first time when I read 2 doc, I see how powerfull of css for react. Where
        animation now can logic with math, and easy to understand. I give it a try in my project.
      </CustomText>
      <CustomText active={true} textIndent={8} marginTop={1}>
        All code I have long time to start. But it will opensource for any others want to see.
      </CustomText>
    </>
  )
  return <ProjectLayout {...initData} descriptionBody={descriptionBody} />
}

export default BlogMal

export { getServerSideProps } from '@/components/chakraui'
