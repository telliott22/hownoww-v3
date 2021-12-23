import { FunctionComponent } from 'react';
import Image from 'next/image';
import Link from 'next/Link';
import LogoSvg from '../assets/images/logo.svg';
import LogoWhiteSvg from '../assets/images/logo-white.svg';
import LogoMobileSvg from '../assets/images/logo-mobile.svg';

interface LogoProps {
  color: 'blue' | 'white'
  desktopOnly: boolean
}

const defaultProps: LogoProps = {
  color: 'blue',
  desktopOnly: false,
};

const Logo: FunctionComponent<LogoProps> = function ({ color, desktopOnly }) {
  return (
    <Link href="/">
      <>
        <div className={`h-12 w-12 p-1${desktopOnly ? ' hidden ' : ' block lg:hidden '}`}>
          <Image src={color === 'white' ? LogoWhiteSvg : LogoMobileSvg} alt="HowNoww" />
        </div>
        <div className={`h-28 w-[260px] relative cursor-pointer ${desktopOnly ? 'block h-20 w-[220px] lg:h-28 lg:w-[260px] ' : 'hidden lg:block'}`}>
          <Image src={color === 'white' ? LogoWhiteSvg : LogoSvg} alt="HowNoww" layout="fill" />
        </div>
      </>
    </Link>
  );
};

Logo.defaultProps = defaultProps;

export default Logo;
