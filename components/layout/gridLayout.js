import { SimpleGrid } from '@chakra-ui/react'

const GridLayout = ({ children }) => {
  return (
    <SimpleGrid columns={[1, null, 2]} spacing={4}>
      {children}
    </SimpleGrid>
  )
}

export default GridLayout
