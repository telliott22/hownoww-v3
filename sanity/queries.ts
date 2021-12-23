import sanityClient from './client';

type SanityQuery = string;
type SanityQueryWithProps = Function;

const getAllBondsQuery: SanityQuery = '*[_type == "bond"]{...,"slug": slug.current}';
const getAllBondsTitlesQuery: SanityQuery = '*[_type == "bond"]{title, _id, issuerType, "slug": slug.current}';

const getAllGuidePagesQuery: SanityQuery = '*[_type == "guidePage"] | order(order desc){ "slug": slug.current, title } ';

const getGuidePageQuery: SanityQueryWithProps = (slug: string) => `{
    "page":  *[_type == "guidePage" && slug.current == "${slug}"][0]
}`;

const getAllBonds = async () => sanityClient().fetch(getAllBondsQuery);
const getAllBondsTitles = async () => sanityClient().fetch(getAllBondsTitlesQuery);
const getAllGuidePages = async () => {
  const result = await sanityClient().fetch(getAllGuidePagesQuery);

  if (result && result.length) {
    return result.map((page: { slug: string }) => {
      let { slug } = page;

      // remove leading slash
      slug = slug.replace(/^\//g, '');

      return {
        params: {
          slug: slug.split('/'),
        },
      };
    });
  }

  return [];
};
const getAllGuidePagesSlugs = async () => sanityClient().fetch(getAllGuidePagesQuery);

const getGuidePage = async (slug: string) => sanityClient().fetch(getGuidePageQuery(slug));

export {
  getAllBonds, getAllBondsTitles, getAllGuidePages, getGuidePage, getAllGuidePagesSlugs,
};
