import {
  Avatar,
  Box,
  Center,
  Container,
  HStack,
  Link,
  Text,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { useRouter } from 'next/router'

const Logo = () => {
  return (
    <HStack>
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
    <Link as={NextLink} href={src}>
      <Box
        padding={2}
        textTransform="capitalize"
        {...(isActive && {
          textDecoration: 'underline solid 3px',
          textDecorationColor: 'blue.500',
        })}
      >
        <Text fontSize="xl">{title}</Text>
      </Box>
    </Link>
  )
}

const HeaderContent = ({ currentRoute }) => {
  const routes = ['posts', 'projects']
  return (
    <HStack paddingX={5}>
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
      </Container>
    </Center>
  )
}

export default Header
