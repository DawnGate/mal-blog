import { Chakra } from '../components/chakaui'

const MyApp = ({ Component, pageProps }) => {
  console.log(pageProps)
  return (
    <Chakra cookies={pageProps.cookies}>
      <Component {...pageProps} />
    </Chakra>
  )
}

export default MyApp
