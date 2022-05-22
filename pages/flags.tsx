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
    <div>
      <Container>
        <p className="text-center text-sm font-semibold uppercase text-gray-500 tracking-wide">
          Featuring Eurobond data from 3 African countries with more coming in the future
        </p>
        <div className="mt-6 grid grid-cols-3 gap-8 opacity-90 max-w-2xl m-auto">
          <div className="col-span-1 flex justify-center">
            {renderFlag('nigeria')}
          </div>
          <div className="col-span-1 flex justify-center">
            {renderFlag('angola')}
          </div>
          <div className="col-span-1 flex justify-center">
            {renderFlag('ghana')}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Flags;
