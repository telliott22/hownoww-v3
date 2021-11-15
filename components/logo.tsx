import { FunctionComponent } from 'react'; 
import Image from 'next/image'
import LogoPng from '../assets/images/logo.png'
import LogoMobilePng from '../assets/images/logo-mobile.png'

const Logo: FunctionComponent = () => {
    return(
        <>
            <div className="block lg:hidden h-12 w-12 w-auto">
                <Image src={LogoMobilePng} alt="HowNoww"/>
            </div>
            <div className="hidden lg:block h-12 w-[242px] relative">
                <Image src={LogoPng} alt="HowNoww" layout="fill"/>
            </div>
        </>
    )
}

export default Logo;