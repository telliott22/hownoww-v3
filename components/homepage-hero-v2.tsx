import { FunctionComponent } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import HeroImage from '../public/hero-2.jpg';

const HomepageHero: FunctionComponent = function () {
  return (

    <div className="relative bg-white overflow-hidden mb-8 md:mb-0">
      <div className="max-w-7xl mx-auto h-screen">
        <div className="relative z-10 pb-8 bg-white sm:pb-10 lg:max-w-2xl lg:w-full">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <main className="p-10 mx-auto max-w-7xl px-4 sm:p-12 sm:px-6 md:p-16 lg:p-20 lg:px-8 xl:pt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight leading-tighter font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="inline">Daily</span>
                <span className="inline text-blue-600"> Nigerian, Ghanaian</span>
                {' '}
                <br />
                {' '}
                <span className="inline">and</span>
                <span className="inline text-blue-600"> Angolan</span>
                <span className="inline"> Eurobond Pricing</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Find out more about Nigerian, Ghanaian and Angolan Eurobonds through HowNoww.
                <br />
                <br />
                Live pricing to stay updated on price performance, coupon calendars & schedules to observe when coupons are due, a cash calculator to determine cash proceeds per bond and a helpful guide to help you understand Eurobonds even better.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Link
                    href="/pricing"
                    passHref
                  >
                    <a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10">
                      Live pricing
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:hero-height"
          src="/hero-2.jpg"
          alt="HowNoww"
        />
      </div>
    </div>
  );
};

export default HomepageHero;
