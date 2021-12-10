import sanityClient from './client'

type SanityQuery = string

const getAllBondsQuery: SanityQuery = '*[_type == "bond"]{...,"slug": slug.current}'
const getAllBondsTitlesQuery: SanityQuery = '*[_type == "bond"]{title, _id, issuerType, "slug": slug.current}'

const getAllBonds = async () =>  await sanityClient().fetch(getAllBondsQuery);
const getAllBondsTitles = async () =>  await sanityClient().fetch(getAllBondsTitlesQuery);

export {  getAllBonds, getAllBondsTitles }
