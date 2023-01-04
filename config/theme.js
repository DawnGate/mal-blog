import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: (props) => ({
    body: {
      bg: mode('white', 'gray.800')(props),
      color: mode('gray.800', 'white.300')(props),
    },
  }),
}

const LinkTheme = {
  variants: {
    noUnderline: {
      _hover: {
        textDecoration: 'none',
        transform: 'scale(1.05, 1.05)',
      },
    },
  },
}

const components = {
  Link: LinkTheme,
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const theme = extendTheme({ config, styles, components })

export default theme
