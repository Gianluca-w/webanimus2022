import Link from "next/link";
import Image from "next/image";

import asterisk from "../public/assets/icons/asterisc.svg";
import animus from "../public/assets/icons/logoanimus-w.svg";
import LanguageChangeButton from "./LanguageButton";
import SkyboxBackground from "./SkyboxBackground";

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
const Nav = ({ LinkText1, Href1 = 'about', LinkText2, Href2 = 'contact' }) => (
  <div className="NavMainWrapper">
    <div className="NavIcon">
      <Link href="/">
        <Image
          className="PointerCursor"
          src={animus.src}
          width={200}
          height={100}
          layout={'fill'}
          alt="ANIMUS"
        />
      </Link>
    </div>
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
  SkyboxVisibility = false,
  AsteriskVisibility = false,
  BackgroundStyle = "",
  Filtered = false,
  FilterAlpha = 0.8,
  FullHeight = false,
  Style = 'Base',
  Link1,
  Link2,
  Link1Href,
  Link2Href
}) => {
  const SkyboxController = useRef();
  let AdditiveClasses = ""
  if (Filtered != false) {
    BackgroundStyle += `linear-gradient(0deg, rgba(0, 0, 0,${FilterAlpha}), rgba(0, 0, 0, ${FilterAlpha})),`
  }
  if (backgroundImageToUse != '/assets/img/undefined') {
    BackgroundStyle = BackgroundStyle += `url('${backgroundImageToUse}'),`
  }
  if (BackgroundStyle.endsWith(',')) {
    BackgroundStyle = BackgroundStyle.substring(0, (BackgroundStyle.length - 1))
  }
  if (FullHeight != false) {
    AdditiveClasses += "MaxHeight "
  }
  if (Style == 'Base') {
    AdditiveClasses += "BaseStyle "
  }
  if (Style == 'About') {
    AdditiveClasses += "AboutStyle "
  }
  return (
    <div className={`HeroSectionParent ${AdditiveClasses}`} style={{ background: BackgroundStyle }}>
      <div className="SkyboxControls" ref={SkyboxController}></div>
      <Nav LinkText1={Link1} LinkText2={Link2} Href1={Link1Href} Href2={Link2Href} />
      <div>{children}</div>
      <Asterisk Size={AsteriskSize} hide={AsteriskVisibility} />
      <HeroSkyboxBackground Visibility={SkyboxVisibility} Controller={SkyboxController} />
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
const HeroSkyboxBackground = ({ Visibility, Controller }) => {
  if (Visibility != false) {
    return <SkyboxBackground className="SkyboxBackground" OptionalExternalController={Controller} />;
  }

};

const HeroSectionRemastered = ({
  Slogan,
  SubSlogan,
  Asterisk,
  BackgroundImageSrc,
  OptionalAsteriskSize,
  Skybox,
  BlackFilter,
  FilteringAlhpa,
  FullSize,
  MainStyle,
  FirstLinkText,
  SecondLinkText,
  FirstLinkHref,
  SecondLinkHref
}) => (
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
  >
    <HeroSectionTitle Title={Slogan} SubTitle={SubSlogan} />
  </HeroSectionParent>
);
export default HeroSectionRemastered;
