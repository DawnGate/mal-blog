import { Container } from '@chakra-ui/react'
import Footer from './footer'
import Head from './head'
import Header from './hearder'

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
