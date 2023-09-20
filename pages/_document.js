import { ColorModeScript } from '@chakra-ui/react'
import { Html, Head, NextScript, Main } from 'next/document'
import theme from '@/config/theme'

const Document = () => {
  return (
    <Html lang="en">
      <Head />
      {/* using for code hight light */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/styles/github-dark.min.css"
      />
      <body>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document
