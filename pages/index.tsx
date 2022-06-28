import type { NextPage } from 'next';
import Page from '../components/page';
import HomepageHero from '../components/homepage-hero-v2';
import { getAllFaqSections } from '../sanity/queries';
import { FaqSection } from '../sanity/types';
import Container from '../components/container';
import Features from '../components/features';
import Features2 from '../components/features-2';
import Flags from './flags';

export async function getStaticProps() {
  const faqSections = await getAllFaqSections();

  return {
    props: {
      faqSections,
    },
    revalidate: 60 * 60 * 6, // 6 hours
  };
}

const Home: NextPage<{ faqSections: FaqSection[] }> = function () {
  return (
    <Page
      title="HowNoww"
      description="Daily Nigerian, Ghanaian
    and Angolan Eurobond Pricing"
    >

      <HomepageHero />

      <Container>

        <div className="space-y-20 pb-8">

          <Features />

          <Features2 />

          <Flags />

        </div>

      </Container>

    </Page>
  );
};

export default Home;
