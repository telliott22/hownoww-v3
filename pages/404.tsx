/* This example requires Tailwind CSS v2.0+ */

import Link from 'next/link';
import Image from 'next/image';
import Logo from '../components/logo';
import Custom404Image from '../public/404.jpg';

const Custom404 = function () {
  return (
    <>
      {/*
          This example requires updating your template:

          ```
          <html class="h-full">
          <body class="h-full">
          ```
        */}
      <div className="bg-white h-screen flex flex-col lg:relative">
        <div className="flex-grow flex flex-col">
          <main className="flex-grow flex flex-col bg-white">
            <div className="flex-grow mx-auto max-w-7xl w-full flex flex-col px-4 sm:px-6 lg:px-8">
              <div className="flex-shrink-0 pt-10 sm:pt-16">
                <Logo />
              </div>
              <div className="flex-shrink-0 my-auto py-16 sm:py-32">
                <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide">404 error</p>
                <h1 className="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
                  Page not found
                </h1>
                <p className="mt-2 text-base text-gray-500">Sorry, we couldn’t find the page you’re looking for.</p>
                <div className="mt-6">
                  <Link href="/" passHref>
                    <a className="text-base font-medium text-blue-600 hover:text-blue-500">
                      Go back home
                      <span aria-hidden="true"> &rarr;</span>
                    </a>
                  </Link>

                </div>
              </div>
            </div>
          </main>
        </div>
        <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <Image src={Custom404Image} />
        </div>
      </div>
    </>
  );
};

export default Custom404;
