import { FunctionComponent, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/solid';
import Link from 'next/link';
import { GuidePageData, GuidePageNavItem } from '../sanity/types';
import GuideSlideOver from './guide-slide-over';
import GuideBreadcrumbs from './guide-breardcrumbs';
import RichText from './rich-text';

const GuideContent: FunctionComponent<{ pageData: GuidePageData, pageSlugs: GuidePageNavItem[] }> = function ({ pageData, pageSlugs }) {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState<GuidePageNavItem>();

  useEffect(() => {
    setCurrentPageIndex(pageSlugs.findIndex((item) => router.asPath.indexOf(item.slug) > -1));
  }, [router.asPath]);

  useEffect(() => {
    setCurrentPage(pageSlugs[currentPageIndex]);
  }, [currentPageIndex]);

  return (
    <div className="relative py-16 bg-white overflow-hidden">

      <GuideSlideOver open={open} setOpen={setOpen} pageSlugs={pageSlugs} />

      <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">

        <div className="max-w-4xl mx-auto">
          <GuideBreadcrumbs setOpen={setOpen} currentPage={currentPage} />
        </div>

        <div className="relative h-full text-lg max-w-prose mx-auto" aria-hidden="true">

          <svg
            className="absolute top-12 left-full transform translate-x-32"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width={404} height={384} fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)" />
          </svg>
          <svg
            className="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width={404} height={384} fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
          </svg>
          <svg
            className="absolute bottom-12 left-full transform translate-x-32"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="d3eb07ae-5182-43e6-857d-35c643af9034"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width={404} height={384} fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)" />
          </svg>
        </div>
      </div>
      <div className="relative px-4 sm:px-6 lg:px-8">
        <div className="text-lg max-w-prose mx-auto mb-12 mt-10">
          <h1>
            <span className="block text-base text-center text-blue-600 font-semibold tracking-wide uppercase">
              Guide
            </span>
            <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              { pageData ? pageData.title : 'HowNoww Guide' }
            </span>
          </h1>
        </div>
        <div className="mt-6 prose prose-blue prose-lg text-gray-500 mx-auto">

          {

                pageData

                  ? <RichText content={pageData.content} />

                  : (
                    <>

                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque obcaecati non provident aspernatur, pariatur laborum ex consequatur iure in. Nostrum aspernatur perspiciatis reprehenderit magni consectetur asperiores vel unde atque architecto.
                      </p>

                      <ol>
                        {pageSlugs.map((item) => (

                          <li
                            key={item.slug}
                          >
                            <a
                              href={`/guide/${item.slug}`}
                              className="text-gray-600  hover:text-blue-900 flex items-center rounded-md"
                            >
                              <span className="truncate">{item.title}</span>
                            </a>

                          </li>

                        ))}

                      </ol>
                    </>
                  )

            }

        </div>

        <div className="flex justify-between text-black max-w-4xl mx-auto mt-20 px-10">

          {

                pageSlugs[currentPageIndex - 1]
                && (
                <div className="mr-auto">

                  <Link href={`/guide/${pageSlugs[currentPageIndex - 1].slug}`} passHref>
                    <a className="flex underline text-blue-700">
                      <ChevronLeftIcon className="flex-shrink-0 h-6 w-6 text-gray-400 relative bottom-[px]" aria-hidden="true" />
                      {`Previous page: ${pageSlugs[currentPageIndex - 1].title}`}
                    </a>

                  </Link>

                </div>
                )
            }

          {

                pageSlugs[currentPageIndex + 1]
                && (
                <div className="ml-auto">

                  <Link href={`/guide/${pageSlugs[currentPageIndex + 1].slug}`} passHref>

                    <a className="flex underline text-blue-700">
                      {`Next page: ${pageSlugs[currentPageIndex + 1].title}`}
                      <ChevronRightIcon className="flex-shrink-0 h-6 w-6 text-gray-600 relative bottom-[2px]" aria-hidden="true" />
                    </a>

                  </Link>

                </div>
                )

            }

          <div />

        </div>

      </div>

    </div>
  );
};

export default GuideContent;
