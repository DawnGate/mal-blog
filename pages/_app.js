import { Chakra } from '../components/chakraui'
import MainLayout from '../components/mainLayout'

const MyApp = ({ Component, pageProps, ...otherProps }) => {
  return (
    <Chakra cookies={pageProps.cookies}>
      <MainLayout>
        <Component {...pageProps} {...otherProps} />
      </MainLayout>
    </Chakra>
  )
}

export default MyApp
