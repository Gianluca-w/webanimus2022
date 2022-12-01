import Link from 'next/link';
import Image from 'next/image';

import asterisk from '../public/assets/icons/asterisc.svg'
import animus from '../public/assets/icons/logoanimus-w.svg'


const Asterisk = ({ hide }) => (
    <>
        {!hide && <div className='AsteriskWrapper'><Image className='AsteriskSvg'
            src={asterisk.src}
            width={'74px'}
            height={'74px'}
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
        {//TODO Make the button work and translate things
        }
        <div className="NavMenuLink"><button  onClick={() => onToggleLanguageClick(changeTo)}> ES</button></div>


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
const HeroSection = ({ slogan, AsteriskVisibility, MaxWidth, AlternativeTitleContent,BackgroundImageSrc, BasicBackgroundStyle="BaseHero"}) => (
    <HeroSectionParent backgroundImageToUse={`/assets/img/${BackgroundImageSrc}`} AltBackgroundStyle={BasicBackgroundStyle}>
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
        <Asterisk hide={AsteriskVisibility} />
        </div>
    </HeroSectionParent>
);

const HeroSectionParent = ({ children, backgroundImageToUse ,AltBackgroundStyle}) => {
    return <div className={`heroWrapper ${AltBackgroundStyle}`} >
        <div className="heroGrid">
            {children}
        </div>
    </div>

}

export default HeroSection;
