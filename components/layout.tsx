/* This example requires Tailwind CSS v2.0+ */
import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { FunctionComponent } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Logo from './logo';
import FooterTicker from './ticker';
import { NavItem } from '../sanity/types';
import Container from './container';
import { classNames } from '../lib/utils';

const Layout: FunctionComponent<{ title?:string, description?: string, navigation: NavItem[] }> = function ({
  children, title, description, navigation,
}) {
  const loacation = useRouter();

  return (
    <div className="min-h-full">
      <Disclosure as="nav" className="bg-white border-b border-gray-200">
        {({ open }) => (
          <>
            <Container>
              <div className="flex justify-between lg:justify-center h-24 lg:w-full lg:relative">
                <div className="flex">
                  <div className="flex-shrink-0 flex items-center mr-12 lg:mr-auto lg:absolute lg:left-0 -top-[7px]">

                    <Logo />

                  </div>
                  <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
                    {navigation.map((item) => (

                      <Link
                        key={item.name}
                        href={item.href}
                        passHref
                        aria-current={loacation.pathname === item.href ? 'page' : undefined}
                      >
                        <a className={classNames(
                          loacation.pathname === item.href
                            ? 'border-blue-600 text-blue-600'
                            : 'border-transparent text-gray-500 hover:border-opacity-30 hover:border-blue-600 hover:text-blue-600',
                          'inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium',
                        )}
                        >
                          {item.name}
                        </a>
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="-mr-2 flex items-center sm:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </Container>

            <Disclosure.Panel className="sm:hidden">
              <div className="pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      loacation.pathname === item.href

                        ? 'bg-blue-50 border-blue-default text-blue-default'
                        : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800',
                      'block pl-3 pr-4 py-2 border-l-4 text-base font-medium',
                    )}
                    aria-current={loacation.pathname === item.href ? 'page' : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      <div className="">

        {

            title
            && (
            <header className="mt-8 py-10">

              <Container>
                <div className="md:w-3/4">
                  <h1 className="text-3xl font-bold leading-tight text-gray-900">{title}</h1>

                  {
                    description
                    && <p className="mt-4 text-lg leading-relaxed text-gray-600">{description}</p>
                  }
                </div>
              </Container>

            </header>
            )

          }

        <main>
          { children }
        </main>
      </div>

      <FooterTicker />
    </div>
  );
};

export default Layout;
