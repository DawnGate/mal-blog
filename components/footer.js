import { Box, Link, Text } from '@chakra-ui/react'
import { GITHUB_LINK } from '../config/consts'
import NextLink from 'next/link'

const Footer = () => {
  return (
    <Box marginY={3}>
      <Text>
        Made by Lam Nguyen. Contact with me{' '}
        <Link as={NextLink} href={GITHUB_LINK} color="teal.500">
          @lamnguyen
        </Link>
        .
      </Text>
    </Box>
  )
}

export default Footer
