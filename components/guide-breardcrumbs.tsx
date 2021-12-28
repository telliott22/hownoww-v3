import { ChevronRightIcon, ViewListIcon } from '@heroicons/react/solid';
import { FunctionComponent } from 'react';
import Link from 'next/link';
import { GuidePageNavItem } from '../sanity/types';

const GuideBreadcrumbs: FunctionComponent<{ currentPage ?: GuidePageNavItem, setOpen: Function }> = function ({ currentPage, setOpen }) {
  return (
    <nav className="flex py-8 px-10" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-4">
        <li>
          <div>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="text-gray-400 hover:text-gray-500 relative top-[3px]"
            >
              <ViewListIcon className="flex-shrink-0 h-5 w-5" aria-hidden="true" />
              <span className="sr-only">Home</span>
            </button>
          </div>
        </li>
        <li>
          <div className="flex items-center">
            <ChevronRightIcon className="flex-shrink-0 h-5 w-5 text-gray-400" aria-hidden="true" />

            <Link
              passHref
              href="/guide"

            >
              <a className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700">
                Guide

              </a>
            </Link>
          </div>
        </li>

        {

            currentPage
            && (
            <li>
              <div className="flex items-center">
                <ChevronRightIcon className="flex-shrink-0 h-5 w-5 text-gray-400" aria-hidden="true" />
                <a
                  href={`/guide/${currentPage.slug}`}
                  className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                  aria-current="page"
                >
                  {currentPage.title}
                </a>
              </div>
            </li>
            )
        }

      </ol>
    </nav>
  );
};

GuideBreadcrumbs.defaultProps = {
  currentPage: undefined,
};

export default GuideBreadcrumbs;
