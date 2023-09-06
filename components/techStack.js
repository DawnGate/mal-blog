import { Tag, Wrap, WrapItem } from '@chakra-ui/react'
import CustomText from './text'

const techStacks = [
  { title: 'chakra-ui', bg: 'teal' },
  { title: 'firebase', bg: 'yellow' },
  { title: 'framer-motion', bg: 'orange' },
  { title: 'lottie', bg: 'teal' },
  { title: 'mui', bg: 'blue' },
  { title: 'nextjs', bg: 'black' },
  { title: 'nextjs13', bg: 'black' },
  { title: 'react', bg: 'blue' },
]

const defaultTech = {
  title: '',
  bg: 'black',
}

const TechStack = ({ techs }) => {
  const techTitles = techStacks.map((item) => item.title)
  return (
    <Wrap>
      <WrapItem>
        <CustomText fontWeight={600} textDecoration="underline">
          Tech stacks:{' '}
        </CustomText>
      </WrapItem>
      {techs.map((item) => {
        let renderItem = { ...defaultTech, title: item }
        if (techTitles.includes(item)) {
          renderItem = techStacks.find((tech) => tech.title === item)
        }
        return (
          <WrapItem key={item}>
            <Tag colorScheme={renderItem.bg} border={`2px solid ${renderItem.bg}`}>
              {renderItem.title}
            </Tag>
          </WrapItem>
        )
      })}
    </Wrap>
  )
}

export default TechStack
