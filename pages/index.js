import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Footer from '../components/Footer'
import Rest from '../components/Rest'
import Grid from '../components/Grid'
import PhraseAndItems from '../components/PhraseItems'
import TitleAndSubtitle from '../components/TitleAndSubtitle'
import BigParagraph from '../components/BigParagraph'
import ImageSection from '../components/ImageSection'
import TextInColumns from '../components/TextInColumns'
import LinksComponent from '../components/LinksComponent'
import SmallParagraph from '../components/SmallParagraph'
import HeroSectionRemastered from '../components/HeroSectionRemaster'



export default function Home(props) {
  const { t } = useTranslation('common')
  return (
    <div className='indexContentWrapper'>
      <HeroSectionRemastered 
      Slogan={t('slogan')}  
      FullSize={true} 
      Asterisk={'hide'} 
      BackgroundImageSrc='HeroSectionBackground.jpg'
      BlackFilter={true} 
      FirstLinkText={t('PageAbout')} 
      SecondLinkText={t('PageContact')} 
      FirstLinkHref={'/about'} 
      SecondLinkHref={'/contact'} 
      FilteringAlhpa={0.7}/>
      <BigParagraph 
      title={t('BigParagraphTitle1')} 
      Tags={t('BigParagraphTags1', { returnObjects: true })} 
      multipleImages={true}/>
      <ImageSection 
      FillingImg={'ImageSection.jpeg'}/>
      <SmallParagraph 
      SmallTitle={t('SmallParagraphTitle')} 
      Content={t('SmallParagraphContent')} 
      UnderlinedLinkTitle={t('SmallParagraphLink')}/>
      <Rest 
      TitleText={''} 
      Body={t('RestSectionBody')}/>
      <BigParagraph 
      title={t('BigParagraphTitle2')} 
      Tags={t('BigParagraphTags2', { returnObjects: true })} />
      <TextInColumns 
      TitleColumn={t('MetodologyTitle')} 
      ColumnContents={t('MetodologyContent', { returnObjects: true })} 
      ColumnSize={2} MainStyle={"White"} />
      <TitleAndSubtitle 
      title={t('TitleAndSubtitleTitle1')} 
      Subtitle={t('TitleAndSubtitleBody1')} />
      <PhraseAndItems 
      Content={t('WhyHireUs', { returnObjects: true })} />
      {/*Still hardcoded */}<Grid Content={[{ Filler: "FillerGridImage2", GridPosition: "1" }, { Image: "FIllerA.svg", ratioX:'1px',ratioY:'1px', Filler: "FillerGridImageCenter", GridPosition: "6" }, { GridPosition: "3", Filler: "FillerGridItem" }, { GridTitle: t('infoBark1'), GridPosition: "4",Filler: "hidingGridItem"}, { GridPosition: "5", Filler: "FillerGridImage1" }, { Image:'FillerLogo.png', Filler: "FillerGridImageCoop", ratioX:'3px', ratioY:'1px', GridPosition: "2" }]} />
      <Footer 
      FooterTitleTxt={t('FooterTitle')} 
      FooterLinkText={t('FooterLinkTitle')} 
      FooterMailText={t('FooterMail')} 
      FooterAdressText={t('FooterAdress')} />
      {/*<DropdownMenu Items={[{Title:t('PageAbout'), Position:1,Href:"/about"},{Title:t('PageContact'),Position:2,Href:"/contact"}]}/>*/}
      <LinksComponent />
    </div>
  ) 
}


export const getServerSideProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common']),
  },
})
