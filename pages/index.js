import BioSection from '../components/bio'
import PageLayout from '../components/pageLayout'

const HomePage = () => {
  return (
    <PageLayout title="HomePage">
      <BioSection />
    </PageLayout>
  )
}

export default HomePage
export { getServerSideProps } from '../components/chakraui'
