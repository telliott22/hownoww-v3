import { FunctionComponent } from 'react';
import { Disclosure } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/outline';
import { classNames } from '../../lib/utils';
import { Faq, FaqSection } from '../../sanity/types';
import RichText from '../rich-text';
import GuideCta from '../guide-cta';

const FaqSections: FunctionComponent<{ faqSections: FaqSection[] }> = function ({ faqSections }) {
  return (

    <div className="relative overflow-hidden">

      <div className="absolute inset-0 h-full">

        <div className="relative h-full text-lg max-w-prose mx-auto" aria-hidden="true">

          <svg
            className="absolute top-12 left-full transform translate-x-32"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width={404} height={384} fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)" />
          </svg>
          <svg
            className="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width={404} height={384} fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
          </svg>
          <svg
            className="absolute bottom-12 left-full transform translate-x-32"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="d3eb07ae-5182-43e6-857d-35c643af9034"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width={404} height={384} fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)" />
          </svg>
        </div>

      </div>

      <h2 className="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">Frequently asked questions</h2>

      <div className="py-10">

        {faqSections.map((faqSection) => (

          <div className="">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
              <div className="max-w-3xl mx-auto divide-y-2 divide-gray-200">
                <h3 className="text-2xl leading-6 text-blue-600 mb-2">{faqSection.title}</h3>
                <dl className="mt-6 space-y-6 divide-y divide-gray-200">
                  {faqSection.faqs.map((faq: Faq) => (
                    <Disclosure as="div" key={faq.question} className="pt-6">
                      {({ open }) => (
                        <>
                          <dt className="text-lg">
                            <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">
                              <span className="font-medium text-gray-900">{faq.question}</span>
                              <span className="ml-6 h-7 flex items-center">
                                <ChevronDownIcon
                                  className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform')}
                                  aria-hidden="true"
                                />
                              </span>
                            </Disclosure.Button>
                          </dt>
                          <Disclosure.Panel as="dd" className="mt-2 pr-12">
                            <RichText className="text-base text-gray-500" content={faq.answer} />
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  ))}
                </dl>
              </div>
            </div>
          </div>

        ))}
      </div>

      <GuideCta />
    </div>

  );
};

export default FaqSections;
