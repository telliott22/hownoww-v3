/* This example requires Tailwind CSS v2.0+ */
import { FunctionComponent } from 'react';
import { useRouter } from 'next/router';
import { GuidePageNavItem } from '../sanity/types';
import { classNames } from '../lib/utils';

export const GuideNav:FunctionComponent<{ pageSlugs: GuidePageNavItem[] }> = function ({ pageSlugs }) {
  const router = useRouter();

  return (
    <div className="flex-1 flex flex-col h-full bg-gray-800">
      <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
        <nav className="mt-5 flex-1 px-2 bg-gray-800 space-y-1" aria-label="Sidebar">
          {pageSlugs.map((item) => (
            <a
              key={item.slug}
              href={`/guide/${item.slug}`}
              className={classNames(
                router.asPath.indexOf(item.slug) > -1 ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'group flex items-center px-2 py-2 text-sm font-medium rounded-md',
              )}
            >
              <span className="flex-1">{item.title}</span>
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default GuideNav;
