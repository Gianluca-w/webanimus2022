import Link from "next/link";

import AnimusIcon from "./icons/AnimusIcon";
import AsteriskIcon from "./icons/AsteriskIcon";

import LanguageChangeButton from "./LanguageButton";
// import SkyboxBackground from "./SkyboxBackground";

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
        <AsteriskIcon
          size={Size} />
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
const Nav = ({
  LinkText1,
  Href1 = 'about',
  LinkText2,
  Href2 = 'contact' }) => (
  <div className="NavMainWrapper">
    <Link href="/">
      <div className=" PointerCursor HowToCenterMiddle">
        <AnimusIcon />
      </div>
    </Link>
    
    <div className="rightLinksWrapper">
    <Link href={Href1}>
      <div className="NavMenuLink AltHoverableLink">
        {LinkText1}
      </div>
    </Link>
    <Link href={Href2}>
      <div className="NavMenuLink AltHoverableLink">
        {LinkText2}
      </div>
    </Link>

    <div className="NavMenuLink" >
      <LanguageChangeButton />
    </div>
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
  if (Style == 'Contact') {
    AdditiveClasses += "ContactStyle "
  }
  return (
    <div className={`HeroSectionParent ${AdditiveClasses}`} style={{ background: BackgroundStyle }}>
      <Nav
        LinkText1={Link1}
        LinkText2={Link2}
        Href1={Link1Href}
        Href2={Link2Href} />
      <div className="baseStyleCenterer">
        {children}
        <Asterisk
          Size={AsteriskSize}
          hide={AsteriskVisibility} />
      </div>


    </div>
  );
};
const HeroSectionTitle = ({
  Title,
  SubTitle }) => {
  return (
    <div className="HeroSectionTittleWrapper">
      <div className="HeroSectionSubTitle">
        {SubTitle}
      </div>
      <div className="HeroSectionTitle">
        {Title}
      </div>
    </div>
  );
};

const HeroSectionRemastered = ({
  Slogan,
  SubSlogan,
  Asterisk,
  BackgroundImageSrc,
  OptionalAsteriskSize,
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

    <HeroSectionTitle
      Title={Slogan}
      SubTitle={SubSlogan} />
  </HeroSectionParent>
</>
);
export default HeroSectionRemastered;
