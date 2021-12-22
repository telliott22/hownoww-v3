/* This example requires Tailwind CSS v2.0+ */
import { FunctionComponent } from 'react'
import Container from './container'

const FooterTicker: FunctionComponent = () => {

  
  return (
    <>
      <div className="fixed inset-x-0 top-0">
        <div className="bg-black border-red border-b">
          <Container>
            <div className="flex items-center justify-between flex-wrap h-8">
              <div className="w-0 flex-1 flex items-center">
                <p className="ml-3 font-medium text-white truncate">
                  <span className="md:hidden">We announced a new product!</span>
                  <span className="hidden md:inline">Big news! We're excited to announce a brand new product.</span>
                </p>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </>
  )
}

export default FooterTicker;