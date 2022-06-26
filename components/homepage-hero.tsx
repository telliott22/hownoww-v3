import { FunctionComponent } from 'react';
import Container from './container';

const HomepageHero: FunctionComponent = function () {
  return (

    <div className="relative overflow-hidden">

      <div className="relative py-16 sm:pb-24">
        <Container>
          <div className="">
            <h1 className="text-4xl tracking-tight leading-tighter font-extrabold text-gray-900 sm:text-5xl md:text-6xl md:max-w-3xl">
              <span className="inline">Daily</span>
              <span className="inline text-blue-600"> Nigerian, Ghanaian</span>
              {' '}
              <br />
              {' '}
              <span className="inline">and</span>
              <span className="inline text-blue-600"> Angolan</span>
              <span className="inline"> Eurobond Pricing</span>
            </h1>
            <p className="mt-3 max-w-lg text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-4xl">
              Find out more about Nigerian, Ghanaian and Angolan Eurobonds through HowNoww.
            </p>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default HomepageHero;
