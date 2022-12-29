import { Box, Button, Text, useColorMode } from '@chakra-ui/react'

const HomePage = () => {
  const { toggleColorMode } = useColorMode()
  return (
    <Box m={3}>
      <Text>Hello</Text>
      <Button onClick={toggleColorMode}>Change color</Button>
    </Box>
  )
}

export default HomePage
export { getServerSideProps } from '../components/chakaui'
