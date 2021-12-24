import sanityClient from './client';

type SanityQuery = string;
type SanityQueryWithProps = Function;

const getNotificationQuery: SanityQuery = '*[_type == "notification"][0]{...}';
const getAllBondsQuery: SanityQuery = '*[_type == "bond"]{...,"slug": slug.current, "prospectus": prospectus.asset->url }';
const getAllBondsTitlesQuery: SanityQuery = '*[_type == "bond"]{title, _id, issuerType, "slug": slug.current}';
const getAllFaqSectionsQuery: SanityQuery = '*[_type == "faqSection"]{...}';

const getAllGuidePagesQuery: SanityQuery = '*[_type == "guidePage"] | order(order asc){ "slug": slug.current, title, order } ';

const getGuidePageQuery: SanityQueryWithProps = (slug: string) => `{
    "page":  *[_type == "guidePage" && slug.current == "${slug}"][0]
}`;

const getAllBonds = async () => sanityClient().fetch(getAllBondsQuery);
const getAllBondsTitles = async () => sanityClient().fetch(getAllBondsTitlesQuery);
const getAllFaqSections = async () => sanityClient().fetch(getAllFaqSectionsQuery);
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
const getNotification = () => sanityClient().fetch(getNotificationQuery);

export {
  getAllBonds, getAllBondsTitles, getAllGuidePages, getGuidePage, getAllGuidePagesSlugs, getNotification, getAllFaqSections,
};
