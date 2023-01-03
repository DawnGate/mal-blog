import { Container } from '@chakra-ui/react'
import Head from 'next/head'

const PageLayout = ({ title, children }) => {
  const pageTitle = title + ' - Lam Nguyen'
  return (
    <Container>
      {title && (
        <Head>
          <title>{pageTitle}</title>
          <meta property="og:title" content={pageTitle} key="title" />
        </Head>
      )}
      {children}
    </Container>
  )
}

export default PageLayout
