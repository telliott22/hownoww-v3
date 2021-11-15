import type { NextPage } from 'next'
import Page from '../components/page'
import HomepageHero from '../components/homepage-hero'
import BondTable from '../components/bond-table'

const Home: NextPage = () => {
  return (
    <Page>

      <HomepageHero />

      <BondTable title={'Nigerian Government Eurobonds'} />

    </Page>
  )
}

export default Home
