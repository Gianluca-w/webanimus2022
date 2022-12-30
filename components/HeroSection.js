import Link from 'next/link';
import Image from 'next/image';

import asterisk from '../public/assets/icons/asterisc.svg'
import animus from '../public/assets/icons/logoanimus-w.svg'
import LanguageChangeButton from './LanguageButton';
import SkyboxBackground from './SkyboxBackground';


const Asterisk = ({ hide , Size }) => (
    <>
        {!hide && <div className='AsteriskWrapper' style={{width:`${Size}`,height:`${Size}`}}><Image className='AsteriskSvg'
            src={asterisk.src}
            width={Size}
            height={Size}
            layout='responsive'
            alt='*' /></div>
        }
    </>
);

const Nav = ({ }) => (
    <div className="navContentWrapperGrid">
        <div className="NavIcon">
            <Link href="/">
                <Image className='PointerCursor'
                    src={animus.src}
                    width={'150%'}
                    height={'100%'}
                    alt='ANIMUS' />
            </Link>
        </div>
        <div className='NavMenuSeparator'></div>
        <div className="NavMenuLink AltHoverableLink"><Link href="/es/about" className='AltHoverableLink'>About</Link></div>
        <div className="NavMenuLink AltHoverableLink"><Link href="/contact" >Contact</Link></div>
        <div className="NavMenuLink"><LanguageChangeButton/></div>


    </div>
);
const AlternativeTitle = ({ Content }) => (
    <div>
        {Content && <div className="ALternativeTitleWrapper">
            <div className='AlternativeTitleContent'>
                {Content}
            </div>
        </div>
        }
    </div>
);
/**
         * Send 'slogan' to make the main text change, this fiel is required for it to work
         * Send anything in AsteriskVisibility to make it dissapear
**/
const HeroSection = ({ slogan, AsteriskVisibility, MaxWidth, AlternativeTitleContent,BackgroundImageSrc, BasicBackgroundStyle="BaseHero",AsteriskSize ='74px', Skybox, BlackFIlter=false}) => (
    <HeroSectionParent backgroundImageToUse={`/assets/img/${BackgroundImageSrc}`} AltBackgroundStyle={BasicBackgroundStyle} SkyboxVIsibility={Skybox} Filtered={BlackFIlter}>
        <div className='HeroSectionWrapper'>
        <div className="nav">
            <Nav />
        </div>
        <div>
            <AlternativeTitle Content={AlternativeTitleContent} />
        </div>
        <div className={MaxWidth ? 'heroSloganAlt' : 'heroSlogan'}>
            <h1>
                {slogan}
            </h1>
        </div>
        <Asterisk hide={AsteriskVisibility} Size={AsteriskSize} />
        </div>
    </HeroSectionParent>
);

const HeroSectionParent = ({ children, backgroundImageToUse="none" ,AltBackgroundStyle,SkyboxVIsibility, BackgroundStyle="",Filtered}) => {
    if(Filtered!=false){
        BackgroundStyle += "linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),"
    }
    if(backgroundImageToUse != '/assets/img/undefined'){
        BackgroundStyle = BackgroundStyle += `url('${backgroundImageToUse}'),`
    }
    if(BackgroundStyle.endsWith(',')){
        BackgroundStyle = BackgroundStyle.substring(0,(BackgroundStyle.length-1))
    }

    return<div className={`heroWrapper ${AltBackgroundStyle}`} style={{background:BackgroundStyle}} >
        <HeroSkyboxBackground Visibility={SkyboxVIsibility}/>
        <div className="heroGrid">
            {children}
        </div>
    </div>

}
const HeroSkyboxBackground = ({Visibility} )=>{
    if (Visibility) {
        return <div  className='SkyboxBackgroundWrapper'>
                <SkyboxBackground/>
        </div>
    }
}




export default HeroSection;
