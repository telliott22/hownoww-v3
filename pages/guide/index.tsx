import { GetStaticProps } from 'next';
import { FunctionComponent } from 'react';
import { getAllGuidePagesSlugs } from '../../sanity/queries';
import GuidePage from '../../components/guide-page';
import { GuidePageData, GuidePageNavItem } from '../../sanity/types';

const renderPage: FunctionComponent<{ pageData: GuidePageData, pageSlugs: GuidePageNavItem[] }> = ({
  pageData,
  pageSlugs,
}) => <GuidePage pageData={pageData} pageSlugs={pageSlugs} />;

// This also gets called at build time
export const getStaticProps: GetStaticProps = async () => {
  const pageSlugs = await getAllGuidePagesSlugs();

  // Pass page data to the page via props
  return {
    props: {
      pageSlugs,
    },
  };
};

export default renderPage;
