export type SanityClient = {
  fetch: (query: string) => Promise<any>
}

export type SanityQuery = SanityClient;

export default function sanityClient(): SanityClient {
  const sanityClient = require('@sanity/client')

  const client = sanityClient({
    projectId: 't158jds7',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2021-08-31',
  })

  return client
}