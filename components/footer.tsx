import { FunctionComponent } from 'react';
import Link from 'next/link';
import { NavItem } from '../sanity/types';
import Container from './container';
import Logo from './logo';

const Footer: FunctionComponent<{ navigation: NavItem[] }> = function ({ navigation }) {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 bg-blue py-12 " aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <Container>
        <div>
          <ul className="mt-4 space-y-4 flex flex-col md:flex-row w-full justify-between">
            <li className="mb-8">
              <Logo color="white" desktopOnly />
            </li>
            <li>

              <ul className="flex flex-col md:flex-row md:space-x-4 md:relative md:top-[10px] space-y-4 md:space-y-0">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} passHref>
                      <a className="text-base text-gray-300 hover:text-white">
                        {item.name}
                      </a>
                    </Link>
                  </li>
                ))}

              </ul>
            </li>

          </ul>
          {/* <div className="mt-8 xl:mt-0">
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Subscribe to our newsletter
            </h3>
            <p className="mt-4 text-base text-gray-300">
              The latest news, articles, and resources, sent to your inbox weekly.
            </p>
            <form className="mt-4 sm:flex sm:max-w-md">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                type="email"
                name="email-address"
                id="email-address"
                autoComplete="email"
                required
                className="appearance-none min-w-0 w-full bg-white border border-transparent rounded-md py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white focus:border-white focus:placeholder-gray-400"
                placeholder="Enter your email"
              />
              <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                <button
                  type="submit"
                  className="w-full bg-blue-600 border border-transparent rounded-md py-2 px-4 flex items-center justify-center text-base font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-blue-500"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div> */}
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between">
          <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
            &copy;
            {' '}
            {year}
            {' '}
            HowNoww. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
