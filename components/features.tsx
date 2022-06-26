import { FunctionComponent } from 'react';

import {
  AnnotationIcon, GlobeAltIcon, LightningBoltIcon, ScaleIcon,
} from '@heroicons/react/outline';

const features = [
  {
    name: 'Free',
    description:
        'We believe that the best way to open up Africa’s Eurobond market is by keeping things simple. All our Eurobond data is provided free of charge.',
    icon: GlobeAltIcon,
  },
  {
    name: 'Inclusive',
    description:
        'We offer various tools to allow you to check Eurobond data beyond just pricing information.',
    icon: ScaleIcon,
  },
  {
    name: 'Up to date',
    description:
        ' All our Eurobond prices are updated up to 7 times a day to ensure reliability.',
    icon: LightningBoltIcon,
  },
  {
    name: 'Accurate',
    description:
        'Our algorithm-enhanced Eurobond pricing uses various data variables and is periodically cross-checked to provide you with high levels of accuracy.',
    icon: AnnotationIcon,
  },
];

const Features: FunctionComponent = function () {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Our mission</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Opening up Africa’s Eurobond market for everybody
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            We want to tell everybody about African Eurobonds by getting more people involved with Africa’s capital market and make Eurobonds the simplest asset class.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Features;
