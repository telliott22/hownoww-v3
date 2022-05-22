import { FunctionComponent } from 'react';
import Link from 'next/link';
import Container from './container';

const ContactCta: FunctionComponent = function () {
  return (
    <div className="text-center">
      <Container>
        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
          <span className="block">Still have questions?</span>
          <span className="block">Learn more about Eurobonds in our guide.</span>
        </h2>
        <div className="mt-8 flex justify-center">
          <div className="inline-flex rounded-md shadow">
            <Link
              passHref
              href="/guide"
            >
              <span className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-700 hover:bg-blue-700">
                Take me there
              </span>
            </Link>
          </div>
        </div>
      </Container>
    </div>

  );
};

export default ContactCta;
