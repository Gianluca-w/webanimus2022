import Link from 'next/link';
import Image from 'next/image';

import asterisk from '../public/assets/icons/asterisc.svg'
import animus from '../public/assets/icons/logoanimus-w.svg'
import LanguageChangeButton from './LanguageButton';
import SkyboxBackground from './SkyboxBackground';

const Asterisk = ({ hide , Size }) => (
    <>
        {!hide && <div className='AsteriskWrapperRemaster' style={{width:`${Size}`,height:`${Size}`}}><Image className='AsteriskSvg'
            src={asterisk.src}
            width={Size}
            height={Size}
            layout='responsive'
            alt='*'/></div>
        }
    </>
);
const Nav = ({ }) => (
    <div className="NavMainWrapper">
        <div className="NavIcon">
            <Link href="/">
                <Image className='PointerCursor'
                    src={animus.src}
                    width={'200%'}
                    height={'100%'}
                    
                    alt='ANIMUS' />
            </Link>
        </div>
        <div className='NavMenuSeparator'></div>
        <div className="NavMenuLink AltHoverableLink"><Link href="/about">About</Link></div>
        <div className="NavMenuLink AltHoverableLink"><Link href="/contact" >Contact</Link></div>
        <div className="NavMenuLink"><LanguageChangeButton/></div>


    </div>
);
const HeroSectionParent = ({ children, AsteriskSize ='74px', backgroundImageToUse="none" ,AltBackgroundStyle,SkyboxVIsibility, BackgroundStyle="",Filtered}) => {

    return<div className="Blak">
        <SkyboxBackground className="SkyboxBackground"/>
        <Nav/>
        <div>
            {children}
        </div>
        <Asterisk Size={AsteriskSize}/>
    </div>

}
const HeroSkyboxBackground = ({Visibility} )=>{

}


const HeroSectionRemastered = ({ Slogan, AsteriskVisibility, MaxWidth, AlternativeTitleContent,BackgroundImageSrc, BasicBackgroundStyle="BaseHero",AsteriskSize ='74px', Skybox, BlackFIlter=false}) => (
    <HeroSectionParent  backgroundImageToUse={`/assets/img/${BackgroundImageSrc}`} AltBackgroundStyle={BasicBackgroundStyle} SkyboxVIsibility={Skybox} Filtered={BlackFIlter}>
    </HeroSectionParent>
);
export default HeroSectionRemastered;
