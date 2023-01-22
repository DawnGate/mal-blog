import { Box, Image, VStack } from '@chakra-ui/react'
import PageLayout from './pageLayout'
import TechStack from './techStack'
import CustomText from './text'

const ImageBox = ({ source, title, description }) => {
  return (
    <Box>
      <Image src={source} alt={title} />
      <CustomText active={false} textIndent={8}>
        {description}
      </CustomText>
    </Box>
  )
}

const ProjectLayout = ({
  title,
  titleText,
  techStacks,
  descriptionText,
  previewImages,
}) => {
  return (
    <PageLayout title={title}>
      {/* title  */}
      <CustomText fontSize="xl" fontWeight={700}>
        {titleText}
      </CustomText>
      {/* tech stacks */}
      <TechStack techs={techStacks} />
      {/* description */}
      <Box paddingY={8}>
        <CustomText active={false} textIndent={8}>
          {descriptionText}
        </CustomText>
      </Box>
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
