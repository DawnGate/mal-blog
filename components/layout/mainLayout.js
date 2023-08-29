import { Container } from '@chakra-ui/react'
import Footer from '@/components/footer'
import Head from '@/components/head'
import Header from '@/components/header'

const MainLayout = ({ children }) => {
  return (
    <>
      <Head />
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
