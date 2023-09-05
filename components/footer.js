import { Box, Link, Text } from '@chakra-ui/react'
import { EMAIL_LINK } from '@/config/constant'
import NextLink from 'next/link'

const Footer = () => {
  return (
    <Box marginY={3}>
      <Text>
        Made by Lam Nguyen. Contact with me{' '}
        <Link as={NextLink} href={`mailto: ${EMAIL_LINK}`} color="teal.500">
          @lamnguyen
        </Link>
        .
      </Text>
    </Box>
  )
}

export default Footer
