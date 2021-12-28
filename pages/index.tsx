import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import Page from '../components/page';
import HomepageHero from '../components/homepage-hero-v2';
import { getAllBonds, getAllFaqSections } from '../sanity/queries';
import { Bond, FaqSection, Price } from '../sanity/types';
import Container from '../components/container';
import FaqSections from '../components/faqs/faq-section';
import Features from '../components/features';
import Features2 from '../components/features-2';
import Flags from './flags';
import BondTable from '../components/bond-table';

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
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPricing();
  }, []);

  return (
    <Page>

      <HomepageHero />

      <Container>

        <div className="space-y-20 pb-20">

          <Features />

          <Features2 />

          <FaqSections faqSections={faqSections} />

          <Flags />

        </div>

      </Container>

    </Page>
  );
};

export default Home;
