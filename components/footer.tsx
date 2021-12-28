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
