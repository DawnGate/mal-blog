import { HStack, Tag } from '@chakra-ui/react'

const TechStack = ({ techs }) => {
  return (
    <HStack>
      {techs.map((item) => (
        <Tag colorScheme="blue" key={item}>
          {item}
        </Tag>
      ))}
    </HStack>
  )
}

export default TechStack
