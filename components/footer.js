import { Box, Link, Text } from '@chakra-ui/react'
import { EMAIL_LINK } from '@/config/constant'
import NextLink from 'next/link'

const Footer = () => {
  return (
    <Box marginY={3}>
      <Text textAlign="center">
        Made by Lam Nguyen. Contact with me{' '}
        <NextLink href={`mailto: ${EMAIL_LINK}`} passHref>
          <Link color="teal.500">@lamnguyen</Link>
        </NextLink>
        .
      </Text>
    </Box>
  )
}

export default Footer
