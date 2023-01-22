import { Button, Flex, Link, VStack } from '@chakra-ui/react'
import CustomText from '../components/text'

import NextLink from 'next/link'

const Custom404 = () => {
  return (
    <VStack height={300}>
      <Flex alignItems="center" flex={1}>
        <CustomText fontSize="3xl" fontWeight={700}>
          PAGE NOT FOUND
        </CustomText>
      </Flex>
      <Link as={NextLink} href="/">
        <Button>Back to homepage</Button>
      </Link>
    </VStack>
  )
}

export default Custom404
