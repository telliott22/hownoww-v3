import { FunctionComponent } from 'react';
import Image from 'next/image';
import Container from '../components/container';
import NigerianFlag from '../public/flags/nigeria.png';
import AngolanFlag from '../public/flags/angola.png';
import GhanaianFlag from '../public/flags/ghana.png';

const Flags: FunctionComponent = function () {
  const renderFlag = (country: string) => {
    let imageSrc;
    switch (country) {
      case 'nigeria':
        imageSrc = NigerianFlag;
        break;
      case 'angola':
        imageSrc = AngolanFlag;
        break;
      case 'ghana':
        imageSrc = GhanaianFlag;
        break;

      default:
        return '';
    }

    return <Image height={44} width={68} src={imageSrc} />;
  };

  return (
    <div className="py-20">
      <Container>
        <p className="text-center text-sm font-semibold uppercase text-gray-500 tracking-wide">
          Featuring Eurobond data from 3 African countries with more coming in the future
        </p>
        <div className="mt-6 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5 opacity-90">
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
            {renderFlag('nigeria')}
          </div>
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
            {renderFlag('angola')}
          </div>
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
            {renderFlag('ghana')}
          </div>
          <div className="col-span-1 flex justify-center md:col-span-2 md:col-start-2 lg:col-span-1">
            <img
              className="h-12"
              src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg"
              alt="Transistor"
            />
          </div>
          <div className="col-span-2 flex justify-center md:col-span-2 md:col-start-4 lg:col-span-1">
            <img
              className="h-12"
              src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg"
              alt="Workcation"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Flags;
