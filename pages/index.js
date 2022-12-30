import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import HeroSection from '../components/HeroSection'
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



export default function Home(props) {
  const { t } = useTranslation('common')
  return (
    <div className='indexContentWrapper'>
      <HeroSection slogan={t('slogan')} AsteriskVisibility={'hide'} BackgroundImageSrc={'HeroSectionBackground.jpg'} BlackFIlter={true} />
      <BigParagraph title={t('BigParagraphTitle1')} Tags={t('BigParagraphTags1', { returnObjects: true })} OptionalImage={'TechLogos.png'} />
      <ImageSection FillingImg={'ImageSection.jpeg'}></ImageSection>
      <SmallParagraph SmallTitle={t('SmallParagraphTitle')} Content={t('SmallParagraphContent')} UnderlinedLinkTitle={t('SmallParagraphLink')}></SmallParagraph>
      <Rest TitleText={t('RestSectionTitle')} Body={t('RestSectionBody')} />
      <BigParagraph title={t('BigParagraphTitle2')} Tags={t('BigParagraphTags2', { returnObjects: true })} />
      <TextInColumns TitleColumn={t('MetodologyTitle')} ColumnContents={t('MetodologyContent', { returnObjects: true })} ColumnSize={2} MainStyle={"White"} />
      <TitleAndSubtitle title={t('TitleAndSubtitleTitle1')} Subtitle={t('TitleAndSubtitleBody1')} />
      <PhraseAndItems Content={t('WhyHireUs', { returnObjects: true })} />
      {/*Still hardcoded */}<Grid Content={[{ Filler: "FillerGridImage2", GridPosition: "1" }, { Image: "FIllerA.svg", Filler: "FillerGridImageCenter", GridPosition: "6" }, { GridPosition: "3", Filler: "FillerGridItem" }, { GridTitle: "Working!", GridPosition: "4" }, { GridPosition: "5", Filler: "FillerGridImage1" }, { GridTitle: "Working EARLY!", GridPosition: "2" }]} />
      <Footer FooterTitleTxt={t('FooterTitle')} FooterLinkText={t('FooterLinkTitle')} FooterMailText={t('FooterMail')} FooterAdressText={t('FooterAdress')} />
      <LinksComponent />
    </div>
  )
}


export const getServerSideProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common']),
  },
})
