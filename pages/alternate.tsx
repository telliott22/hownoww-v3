import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import Page from '../components/page';
import HomepageHero from '../components/homepage-hero';
import BondTable from '../components/bond-table';
import { getAllBonds, getAllFaqSections } from '../sanity/queries';
import { Bond, FaqSection, Price } from '../sanity/types';
import Container from '../components/container';
import FaqSections from '../components/faqs/faq-section';

export async function getStaticProps() {
  const bonds = await getAllBonds();
  const faqSections = await getAllFaqSections();

  return {
    props: {
      bonds,
      faqSections,
    },
    revalidate: 60 * 60 * 6, // 6 hours
  };
}

const Home: NextPage<{ bonds: Bond[], faqSections: FaqSection[] }> = function ({ bonds, faqSections }) {
  const [prices, setPrices] = useState<Price[]>();

  const fetchPricing = async () => {
    try {
      const url = `${process.env.NEXT_PUBLIC_PRICING_API}/prices`;
      const response = await fetch(url);

      const json: Price[] = await response.json();

      setPrices(json);
    } catch (error) {
      //
    }
  };

  useEffect(() => {
    fetchPricing();
  }, []);

  return (
    <Page>

      <HomepageHero />

      <Container>

        <div className="space-y-20">

          <BondTable type="bond" title="Nigerian Government Eurobonds" prices={prices || []} bonds={bonds.filter((bond) => bond.issuerType === 'government' && bond.country === 'nigeria' && bond.expired !== true)} />

          <BondTable type="bond" title="Ghanaian Government Eurobonds" prices={prices || []} bonds={bonds.filter((bond) => bond.issuerType === 'government' && bond.country === 'ghana' && bond.expired !== true)} />

          <BondTable type="bond" title="Angolan Government Eurobonds" prices={prices || []} bonds={bonds.filter((bond) => bond.issuerType === 'government' && bond.country === 'angola' && bond.expired !== true)} />

          <BondTable type="bond" title="Nigerian Bank Eurobonds" prices={prices || []} bonds={bonds.filter((bond) => bond.issuerType === 'bank' && bond.country === 'nigeria' && bond.expired !== true)} />

          <BondTable type="bond" title="Expired Eurobonds" prices={prices || []} bonds={bonds.filter((bond) => bond.expired === true)} />

          <small className="text-xs text-grey-dark block">All prices and yields are purely indicative and should not be interpreted as live. Although we verify data accuracy, HowNoww expressly disclaims the accuracy, adequacy, or completeness of any data and shall not be liable for any errors, omissions or other defects in, delays or interruptions in such data, or for any actions taken in reliance thereon. HowNoww will not be liable for any damages relating to your use of the information provided herein. All data and information is provided “as is” for personal informational purposes only, and is not intended for trading purposes or advice. Please consult your broker or financial representative to verify pricing before executing any trade. HowNoww has exclusive proprietary rights in the data and information provided.</small>

        </div>

        <div>

          <FaqSections faqSections={faqSections} />

        </div>

      </Container>

    </Page>
  );
};

export default Home;
