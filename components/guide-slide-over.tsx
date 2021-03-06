import { Fragment, FunctionComponent } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';
import { useRouter } from 'next/router';
import { GuidePageNavItem } from '../sanity/types';
import { classNames } from '../lib/utils';

const GuideSlideOver: FunctionComponent<{ pageSlugs: GuidePageNavItem[], open: boolean, setOpen: Function }> = function ({ pageSlugs, open, setOpen }) {
  const router = useRouter();

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="absolute inset-0 overflow-hidden z-10" onClose={() => setOpen(false)}>
        <div className="absolute inset-0 overflow-hidden">
          <Dialog.Overlay className="absolute inset-0" />

          <div className="absolute inset-y-0 left-0 lg:pr-10 max-w-full flex">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <div className="w-screen max-w-md">
                <div className="h-full flex flex-col py-6 bg-white shadow-xl overflow-y-scroll">
                  <div className="px-4 sm:px-6">
                    <div className="flex items-start justify-between">
                      <Dialog.Title className="text-lg font-medium text-gray-900">Guide Pages</Dialog.Title>
                      <div className="ml-3 h-7 flex items-center">
                        <button
                          type="button"
                          className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                          onClick={() => setOpen(false)}
                        >
                          <span className="sr-only">Close panel</span>
                          <XIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 relative flex-1 px-4 sm:px-6">

                    <nav className="space-y-1" aria-label="Sidebar">
                      {pageSlugs.map((item) => (
                        <a
                          key={item.slug}
                          href={`/guide/${item.slug}`}
                          className={classNames(
                            router.asPath.indexOf(item.slug) > -1 ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                            'flex items-center px-3 py-2 text-sm font-medium rounded-md',
                          )}
                          aria-current={router.asPath.indexOf(item.slug) > -1 ? 'page' : undefined}
                        >
                          <span className="truncate">{item.title}</span>
                        </a>
                      ))}
                    </nav>

                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default GuideSlideOver;
