import { GetStaticProps, GetStaticPaths } from 'next';
import { FunctionComponent } from 'react';
import { getAllGuidePages, getAllGuidePagesSlugs, getGuidePage } from '../../sanity/queries';
import GuidePage from '../../components/guide-page';
import { GuidePageData, GuidePageNavItem } from '../../sanity/types';

const renderPage: FunctionComponent<{ pageData: GuidePageData, pageSlugs: GuidePageNavItem[] }> = ({
  pageData,
  pageSlugs,
}) => <GuidePage pageData={pageData} pageSlugs={pageSlugs} />;

// This function gets called at build time
export const getStaticPaths: GetStaticPaths = async () => {
  // Call an external API endpoint to get pages

  const pageSlugs = await getAllGuidePages();

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths: pageSlugs, fallback: false };
};

// This also gets called at build time
export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (params && params.slug) {
    const slug = Array.isArray(params.slug) ? params.slug.join('/') : params.slug;

    const data = await getGuidePage(slug);

    const pageSlugs = await getAllGuidePagesSlugs();

    // Pass page data to the page via props
    return {
      props: {
        pageData: data.page,
        pageSlugs,
      },
    };
  }
  return {
    props: {
    },
  };
};

export default renderPage;
