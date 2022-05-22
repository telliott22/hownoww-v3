import { GetStaticProps, GetStaticPaths } from 'next';
import { FunctionComponent } from 'react';
import { getAllBonds } from '../../sanity/queries';
import HistoryPage from '../../components/history-page';
import { Price } from '../../sanity/types';

const renderPage: FunctionComponent<{ prices: Price[], title: string }> = ({
  prices,
  title,
}) => <HistoryPage prices={prices} title={title} />;

export const getStaticPaths: GetStaticPaths = async () => {
  // Call an external API endpoint to get pages

  const result = await getAllBonds();

  if (result && result.length) {
    const paths = result.map((bond: { slug: string }) => {
      let { slug } = bond;

      // remove leading slash
      slug = slug.replace(/^\//g, '');

      return {
        params: {
          slug: slug.split('/'),
        },
      };
    });

    return { paths, fallback: false };
  }

  return { paths: [], fallback: false };

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
};
// This also gets called at build time
export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (params && params.slug) {
    const slug = Array.isArray(params.slug) ? params.slug.join('/') : params.slug;

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_PRICING_API}/price?slug=${slug}`);

      const prices = await response.json();

      return {
        props: {
          prices,
          title: slug.split('-').join(' ').toLocaleUpperCase(),
        },
      };
    } catch (error) {
      // console.log(error);
    }

    // Pass page data to the page via props
  }
  return {
    props: {
    },
  };
};

export default renderPage;
