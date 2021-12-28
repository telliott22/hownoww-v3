import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import Container from '../components/container';
import Page from '../components/page';
import BondTable from '../components/bond-table';
import { Price, Bond, FaqSection } from '../sanity/types';
import { getAllBonds } from '../sanity/queries';

export async function getStaticProps() {
  const bonds = await getAllBonds();

  return {
    props: {
      bonds,
    },
    revalidate: 60 * 60 * 6, // 6 hours
  };
}

const Pricing: NextPage<{ bonds: Bond[], faqSections: FaqSection[] }> = function ({ bonds }) {
  const [prices, setPrices] = useState<Price[]>();

  const fetchPricing = async () => {
    try {
      const url = `${process.env.NEXT_PUBLIC_PRICING_API}/prices`;
      const response = await fetch(url);

      const json: Price[] = await response.json();

      setPrices(json);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPricing();
  }, []);

  return (
    <Page title="Pricing" description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.">

      <Container>

        <div className="space-y-20">

          <BondTable type="bond" title="Nigerian Government Eurobonds" prices={prices || []} bonds={bonds.filter((bond) => bond.issuerType === 'government' && bond.country === 'nigeria' && bond.expired !== true)} />

          <BondTable type="bond" title="Ghanaian Government Eurobonds" prices={prices || []} bonds={bonds.filter((bond) => bond.issuerType === 'government' && bond.country === 'ghana' && bond.expired !== true)} />

          <BondTable type="bond" title="Angolan Government Eurobonds" prices={prices || []} bonds={bonds.filter((bond) => bond.issuerType === 'government' && bond.country === 'angola' && bond.expired !== true)} />

          <BondTable type="bond" title="Nigerian Bank Eurobonds" prices={prices || []} bonds={bonds.filter((bond) => bond.issuerType === 'bank' && bond.country === 'nigeria' && bond.expired !== true)} />

          <BondTable type="bond" title="Expired Eurobonds" prices={prices || []} bonds={bonds.filter((bond) => bond.expired === true)} />

          <small className="text-xs text-grey-dark block">All prices and yields are purely indicative and should not be interpreted as live. Although we verify data accuracy, HowNoww expressly disclaims the accuracy, adequacy, or completeness of any data and shall not be liable for any errors, omissions or other defects in, delays or interruptions in such data, or for any actions taken in reliance thereon. HowNoww will not be liable for any damages relating to your use of the information provided herein. All data and information is provided “as is” for personal informational purposes only, and is not intended for trading purposes or advice. Please consult your broker or financial representative to verify pricing before executing any trade. HowNoww has exclusive proprietary rights in the data and information provided.</small>

        </div>

      </Container>

    </Page>
  );
};

export default Pricing;
