import { Container } from '@chakra-ui/react'
import { AnimatePresence, motion } from 'framer-motion'
import Head from 'next/head'
import { capitalizeString } from '@/utils'

const PageLayoutAnimation = ({ children }) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{
          width: '100%',
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

const PageLayout = ({ title, children }) => {
  const pageTitle = capitalizeString(title) + ' - Lam Nguyen'
  return (
    <PageLayoutAnimation>
      <Container marginTop={5}>
        {title && (
          <Head>
            <title>{pageTitle}</title>
            <meta property="og:title" content={pageTitle} key="title" />
          </Head>
        )}
        {children}
      </Container>
    </PageLayoutAnimation>
  )
}

export default PageLayout
