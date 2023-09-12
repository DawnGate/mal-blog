import { Container } from '@chakra-ui/react'
import Footer from '@/components/footer'
import Head from '@/components/head'
import Header from '@/components/header'
import GoogleAnalytics from '../googleAnalytics'

const MainLayout = ({ children }) => {
  return (
    <>
      <Head />
      <GoogleAnalytics />
      <>
        <Header />
        <main>
          <Container maxW="3xl" centerContent>
            {children}
            <Footer />
          </Container>
        </main>
      </>
    </>
  )
}

export default MainLayout
