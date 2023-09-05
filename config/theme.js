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
      },
      _visited: {
        textDecoration: 'none',
      },
    },
    hoverCustom: {
      _hover: {
        textDecoration: 'none',
      },
    },
    blogItem: {
      _hover: {
        '.blog-item-title': {
          textDecoration: 'underline',
        },
        textDecoration: 'none',
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
