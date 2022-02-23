import {
  InstantSearch, SearchBox, Hits, Snippet,
} from 'react-instantsearch-dom';
import Head from 'next/head';
import algoliasearch from 'algoliasearch/lite';
import { useState } from 'react';
import Link from 'next/link';

type HitType = { hit: { slug: { current: string }, title: string } };

const Hit = function ({ hit }: HitType) {
  return (

    <Link href={`/guide/${hit.slug.current}`} passHref>

      <a>

        <article>

          <h1 className="mb-2">{hit.title}</h1>

          <Snippet hit={hit} attribute="content" />

        </article>

      </a>

    </Link>

  );
};

const GuideSearch = function () {
  const searchClient = algoliasearch('VCCRZ08L2G', '17920cb466380668573e5d651fbd95f7');

  const [showHits, setShowHits] = useState(false);

  const onSearchStateChange = (searchState: { query: string }) => {
    if (searchState.query.length > 0) {
      setShowHits(true);
    } else {
      setShowHits(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto z-10 relative">
      <Head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/instantsearch.css@7.3.1/themes/reset-min.css" integrity="sha256-t2ATOGCtAIZNnzER679jwcFcKYfLlw01gli6F6oszk8=" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/instantsearch.css@7.4.5/themes/satellite-min.css" integrity="sha256-TehzF/2QvNKhGQrrNpoOb2Ck4iGZ1J/DI4pkd2oUsBc=" crossOrigin="anonymous" />

      </Head>
      <InstantSearch onSearchStateChange={onSearchStateChange} searchClient={searchClient} indexName="guidePages">
        <SearchBox />

        {
            showHits
            && (
            <div className="z-10 absolute max-w-4xl mx-auto w-full">

              <Hits hitComponent={Hit} />

            </div>
            )
        }

      </InstantSearch>
    </div>
  );
};

export default GuideSearch;
