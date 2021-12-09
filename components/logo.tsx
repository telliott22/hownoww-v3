import { FunctionComponent } from 'react'; 
import Image from 'next/image'
import LogoSvg from '../assets/images/logo.svg'
import LogoWhiteSvg from '../assets/images/logo-white.svg'
import LogoMobileSvg from '../assets/images/logo-mobile.svg'
import Link from 'next/Link'

interface LogoProps {
    color: string
}

const defaultProps: LogoProps = {
    color: 'blue'
}

const Logo: FunctionComponent<LogoProps> = ({color}) => {
    return(
        <Link href="/"  >
            <>
                    <div className="block lg:hidden h-12 w-12 p-1">
                        <Image src={color === 'white' ? LogoWhiteSvg : LogoMobileSvg} alt="HowNoww"/>
                    </div>
                    <div className="hidden lg:block h-12 w-[200px] relative cursor-pointer">
                        <Image src={color === 'white' ? LogoWhiteSvg : LogoSvg} alt="HowNoww" layout="fill"/>
                    </div>
            </>
        </Link>
    )
}

Logo.defaultProps = defaultProps

export default Logo;