
import { FunctionComponent } from 'react'; 
import Ticker from '../components/ticker'

const HomepageHero: FunctionComponent = () => {

  return (

    <>


      <div className="relative overflow-hidden">

        <div className="relative pt-6 pb-16 sm:pb-24">
          <div className="mx-auto max-w-7xl px-4 ">
            <div className="text-center">
              <h1 className="text-4xl tracking-tight leading-tighter font-extrabold text-gray-900 sm:text-5xl md:text-6xl md:max-w-3xl m-auto">
                <span className="inline">Daily</span>
                <span className="inline text-blue-600"> Nigerian, Ghanaian</span> <span className="inline">and</span>
                <span className="inline text-blue-600"> Angolan</span><span className="inline"> Eurobond Pricing</span>
              </h1>
              <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                Find out more about Nigerian, Ghanaian and Angolan Eurobonds through HowNoww.
              </p>
              <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                Live pricing to see how Nigerian, Ghanaian and Angolan Eurobonds perform, an annual coupon schedule to observe when coupons are due and a helpful guide to help you understand Eurobonds even better.
              </p>
              {/* <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
                <div className="rounded-md shadow">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                  >
                    Get started
                  </a>
                </div>
                <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
                  >
                    Live demo
                  </a>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomepageHero;