import sanityClient from './client'

type SanityQuery = string

const getAllBondsQuery: SanityQuery = '*[_type == "bond"]{...}'

const getAllBonds = async () =>  await sanityClient().fetch(getAllBondsQuery);

export {  getAllBonds }
