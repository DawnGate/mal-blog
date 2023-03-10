import {
  Avatar,
  Box,
  Center,
  Container,
  HStack,
  Link,
  Text,
} from '@chakra-ui/react'
import CustomText from './text'
import { motion } from 'framer-motion'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import IconChangeColor from './iconChangeColor'

const Logo = () => {
  return (
    <HStack
      as={motion.div}
      whileHover={{ scale: 1.1 }}
      transition="0.1s linear"
    >
      <Avatar
        size="md"
        name="Lam Nguyen"
        src="/assets/images/logo-kraken.jpeg"
      />
      <Text fontSize="2xl" fontWeight="bold">
        Lam Nguyen
      </Text>
    </HStack>
  )
}

const NavBarItem = ({ title, src, isActive }) => {
  return (
    <Link as={NextLink} href={src} variant="hoverCustom">
      <Box padding={2} textTransform="capitalize">
        <CustomText fontSize="xl" fontWeight={500} active={isActive}>
          {title}
        </CustomText>
        {
          <Box
            className="box-underline"
            transitionDuration={'1s'}
            borderTop="2px"
            display="none"
          />
        }
      </Box>
    </Link>
  )
}

const HeaderContent = ({ currentRoute }) => {
  const routes = ['project', 'blog']
  return (
    <HStack paddingX={5} flex={'1'}>
      {routes.map((item) => (
        <NavBarItem
          key={item}
          title={item}
          src={`/${item}`}
          isActive={`/${item}` === currentRoute}
        />
      ))}
    </HStack>
  )
}

const Header = () => {
  const router = useRouter()
  return (
    <Center>
      <Container display="flex" padding={2}>
        <Link as={NextLink} href="/" variant="noUnderline">
          <Logo />
        </Link>
        <HeaderContent currentRoute={router.asPath} />
        <IconChangeColor />
      </Container>
    </Center>
  )
}

export default Header
