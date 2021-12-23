import type { NextPage } from 'next';
import Page from '../components/page';
import HomepageHero from '../components/homepage-hero';
import BondTable from '../components/bond-table';
import { getAllBonds } from '../sanity/queries';
import { Bond } from '../sanity/types';
import Container from '../components/container';

export async function getStaticProps() {
  const bonds = await getAllBonds();

  return {
    props: {
      bonds,
    },
    revalidate: 60 * 60 * 6, // 6 hours
  };
}

const Home: NextPage<{ bonds: Bond[] }> = function ({ bonds }) {
  return (
    <Page>

      <HomepageHero />

      <Container>

        <div className="space-y-20">

          <BondTable type="bond" title="Nigerian Government Eurobonds" bonds={bonds} />

          <BondTable type="bond" title="Ghanaian Government Eurobonds" bonds={bonds} />

          <BondTable type="bond" title="Angolan Government Eurobonds" bonds={bonds} />

          <BondTable type="bond" title="Nigerian Bank Eurobonds" bonds={bonds} />

          <BondTable type="bond" title="Expired Eurobonds" bonds={bonds} />

          <small className="text-xs text-grey-dark block">All prices and yields are purely indicative and should not be interpreted as live. Although we verify data accuracy, HowNoww expressly disclaims the accuracy, adequacy, or completeness of any data and shall not be liable for any errors, omissions or other defects in, delays or interruptions in such data, or for any actions taken in reliance thereon. HowNoww will not be liable for any damages relating to your use of the information provided herein. All data and information is provided “as is” for personal informational purposes only, and is not intended for trading purposes or advice. Please consult your broker or financial representative to verify pricing before executing any trade. HowNoww has exclusive proprietary rights in the data and information provided.</small>

        </div>

      </Container>

    </Page>
  );
};

export default Home;
