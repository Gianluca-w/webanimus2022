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
const Nav = ({}) => (
  <div className="NavMainWrapper">
    <div className="NavIcon">
      <Link href="/">
        <Image
          className="PointerCursor"
          src={animus.src}
          width={"200%"}
          height={"100%"}
          alt="ANIMUS"
        />
      </Link>
    </div>
    <div className="NavMenuSeparator"></div>
    <div className="NavMenuLink AltHoverableLink">
      <Link href="/about">About</Link>
    </div>
    <div className="NavMenuLink AltHoverableLink">
      <Link href="/contact">Contact</Link>
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
  SkyboxVisibility,
  AsteriskVisibility=false,
  BackgroundStyle = "",
  Filtered=false,
  FilterAlpha=0.8,
  FullHeight=false,
  Color='white'
}) => {
    let Height="auto"
    if(Filtered!=false){
        BackgroundStyle += `linear-gradient(0deg, rgba(0, 0, 0,${FilterAlpha}), rgba(0, 0, 0, ${FilterAlpha})),`
    }
    if(backgroundImageToUse != '/assets/img/undefined'){
        BackgroundStyle = BackgroundStyle += `url('${backgroundImageToUse}'),`
    }
    if(BackgroundStyle.endsWith(',')){
        BackgroundStyle = BackgroundStyle.substring(0,(BackgroundStyle.length-1))
    }
    if(FullHeight!=false){
        Height = "100vh"
    }
  return (
    <div className="Blak" style={{background:BackgroundStyle,height:Height,color:Color}}>
      <Nav />
      <div>{children}</div>
      <Asterisk Size={AsteriskSize} hide={AsteriskVisibility}/>
    </div>
  );
};
const HeroSectionTitle = ({ Title, SubTitle, Style = "Base"}) => {
  let Styling = {
    MainClass: "",
    ManualStyle: "",
  };
  switch (Style) {
    case "Base":
      Styling = {
        MainClass: "HeroSectionTitleWrapper ThinH1 BaseStyle",
      };
      break;
    case "About":
      Styling = {
        MainClass: "HeroSectionTitleWrapper AboutStyle BoldH1",
        SubClass: "RegH4",
      };
      break;
    case "Contact":
      Styling = {
        MainClass: "HeroSectionTitleWrapper ContactStyle",
        SubClass: "RegH4",
      };
      break;

    default:
      Styling = {
        MainClass: "HeroSectionTitleWrapper",
        ManualStyle: Style,
      };
      break;
  }
  return (
    <div className={Styling.MainClass} style={Styling.ManualStyle}>
      <div className={Styling.SubClass}>{SubTitle}</div>
      <div>{Title}</div>
    </div>
  );
};
const HeroSkyboxBackground = ({ Visibility }) => {
  <SkyboxBackground className="SkyboxBackground" />;
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
  TitleStyle,
  FontColor
}) => (
  <HeroSectionParent
    backgroundImageToUse={`/assets/img/${BackgroundImageSrc}`}
    Filtered={BlackFilter}
    FilterAlpha = {FilteringAlhpa}
    AsteriskVisibility={Asterisk}
    AsteriskSize={OptionalAsteriskSize}
    FullHeight = {FullSize}
    Style={TitleStyle}
    Color={FontColor}
  >
    <HeroSectionTitle Title={Slogan} SubTitle={SubSlogan} />
  </HeroSectionParent>
);
export default HeroSectionRemastered;
