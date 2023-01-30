import Link from "next/link";
import Image from "next/image";

import asterisk from "../public/assets/icons/asterisc.svg";
import animus from "../public/assets/icons/logoanimus-w.svg";
import LanguageChangeButton from "./LanguageButton";
import SkyboxBackground from "./SkyboxBackground";

/**
   * Basic Asterisk. Sending anything in hide will prevent the asterisk from showing         
   * Forces a 1:1 aspect ratio so Size changes both height and width, this can be in any
   * acceptable format that css can accept (px, rem,vh,vw,etc)
   */
const Asterisk = ({ hide, Size }) => (
  <>
    {!hide && (
      <div
        className="AsteriskWrapperRemaster"
        style={{ width: `${Size}`, height: `${Size}` }}
      >
        <Image
          className="AsteriskSvg"
          src={asterisk.src}
          width={Size}
          height={Size}
          layout="responsive"
          alt="*"
        />
      </div>
    )}
  </>
);
 /**
   * Nav only admits 2 links, give the link a title using LinkText1 and a Href1 to give the route               
   * For the second link is the same                                                          
   * 
   * TODO: Change it for a Array so it can have any amount of links
   */
 const Nav = ({ LinkText1, Href1 = 'about', LinkText2, Href2 = 'contact' }) => (
  <div className="NavMainWrapper">
    <Link href="/">
    <div className="NavIcon">
        <Image
          className="PointerCursor"
          src={animus.src}
          layout={'fill'}
          alt="ANIMUS"
        />
    </div>
    </Link>
    <div className="NavMenuSeparator"></div>
    <div className="NavMenuLink AltHoverableLink">
      <Link href={Href1}>{LinkText1}</Link>
    </div>
    <div className="NavMenuLink AltHoverableLink">
      <Link href={Href2}>{LinkText2}</Link>
    </div>
    <div className="NavMenuLink">
      <LanguageChangeButton />
    </div>
  </div>
);
const HeroSectionParent = ({
  children,
  AsteriskSize = "74px",
  backgroundImageToUse = "none",
  AsteriskVisibility = false,
  BackgroundStyle = "null",
  Filtered = false,
  FilterAlpha = 0.8,
  FullHeight = false,
  Style = 'Base',
  Link1,
  Link2,
  Link1Href,
  Link2Href,
  NoBackground
}) => {
  let AdditiveClasses = ""
  if (Filtered != false) {
    BackgroundStyle += `linear-gradient(0deg, rgba(0, 0, 0,${FilterAlpha}), rgba(0, 0, 0, ${FilterAlpha})),`
  }
  if (backgroundImageToUse != '/assets/img/undefined') {
    BackgroundStyle = BackgroundStyle += `url('${backgroundImageToUse}'),`
  }
  if (BackgroundStyle.endsWith(',')) {
    BackgroundStyle = BackgroundStyle.substring(4, (BackgroundStyle.length - 1))
  }
  
  if (FullHeight != false) {
    AdditiveClasses += "MaxHeight "
  }
  if (NoBackground == "none") {
    AdditiveClasses += "NoBackground "
  }
  if (Style == 'Base') {
    AdditiveClasses += "BaseStyle "
  }
  if (Style == 'About') {
    AdditiveClasses += "AboutStyle "
  }
  return (
    <div className={`HeroSectionParent ${AdditiveClasses}`} style={{ background: BackgroundStyle }}>
      <Nav LinkText1={Link1} LinkText2={Link2} Href1={Link1Href} Href2={Link2Href} />
      <div>{children}</div>
      <Asterisk Size={AsteriskSize} hide={AsteriskVisibility} />
      
    </div>
  );
};
const HeroSectionTitle = ({ Title, SubTitle }) => {
  return (
    <div className="HeroSectionTittleWrapper">
      <div className="HeroSectionSubTitle">{SubTitle}</div>
      <div className="HeroSectionTitle">{Title}</div>
    </div>
  );
};
const HeroSkyboxBackground = ({ Visibility}) => {
  if (Visibility != false) {
    return <SkyboxBackground className="SkyboxBackground" />;
  }

};

const HeroSectionRemastered = ({
  Slogan,
  SubSlogan,
  Asterisk,
  BackgroundImageSrc,
  OptionalAsteriskSize,
  Skybox = false,
  BlackFilter,
  FilteringAlhpa,
  FullSize,
  MainStyle,
  FirstLinkText,
  SecondLinkText,
  FirstLinkHref,
  SecondLinkHref,
  Background
}) => (<>
  <HeroSectionParent
    backgroundImageToUse={`/assets/img/${BackgroundImageSrc}`}
    Filtered={BlackFilter}
    FilterAlpha={FilteringAlhpa}
    AsteriskVisibility={Asterisk}
    AsteriskSize={OptionalAsteriskSize}
    FullHeight={FullSize}
    Style={MainStyle}
    Link1={FirstLinkText}
    Link2={SecondLinkText}
    Link1Href={FirstLinkHref}
    Link2Href={SecondLinkHref}
    NoBackground={Background}  >
    <HeroSectionTitle Title={Slogan} SubTitle={SubSlogan} />
  </HeroSectionParent>
  <HeroSkyboxBackground Visibility={Skybox} />
  </>
);
export default HeroSectionRemastered;
