import { Box, VStack } from '@chakra-ui/react'
import Image from 'next/image'
import PageLayout from './pageLayout'
import TechStack from '@/components/techStack'
import CustomText from '@/components/text'
import TypeProject from '../typeProject'

const ImageBox = ({ source, title, description }) => {
  return (
    <Box>
      <Box padding={2} boxShadow="0 0 2px 2px" borderRadius="md" textAlign="center">
        <Image
          alt={title}
          src={source}
          height={300}
          width={500}
          priority
          style={{ objectFit: 'cover', margin: 'auto' }}
        />
      </Box>
      <CustomText mt={1} active={false} textIndent={8}>
        {description}
      </CustomText>
    </Box>
  )
}

const ProjectLayout = ({ title, titleText, techStacks, typeProject, descriptionBody, previewImages }) => {
  return (
    <PageLayout title={title}>
      {/* title  */}
      <CustomText fontSize="xl" fontWeight={700} paddingBottom={2}>
        {titleText}
      </CustomText>
      {/* tech stacks */}
      <TechStack techs={techStacks} />
      {/* project type */}
      <TypeProject type={typeProject} />
      {/* description */}
      <Box paddingY={8}>{descriptionBody}</Box>
      {/* example view */}
      <VStack>
        {previewImages.map((item) => (
          <ImageBox key={item.title} {...item} />
        ))}
      </VStack>
    </PageLayout>
  )
}

export default ProjectLayout
