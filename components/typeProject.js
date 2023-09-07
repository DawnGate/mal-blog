import { Box, Tag } from '@chakra-ui/react'
import CustomText from './text'

const projectTypes = {
  personal: 'blue',
  company: 'green',
}

const TypeProject = ({ type = 'personal' }) => {
  return (
    <Box>
      <CustomText fontWeight={600} textDecoration="underline" mb={2}>
        Type of project:{' '}
      </CustomText>
      <Tag colorScheme={projectTypes[type]}>{type}</Tag>
    </Box>
  )
}

export default TypeProject
