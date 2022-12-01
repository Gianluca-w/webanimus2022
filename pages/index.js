import { useRouter } from 'next/router'

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
  const router = useRouter()
  const { t } = useTranslation('common')


  const onToggleLanguageClick = (newLocale) => {
    const { pathname, asPath, query } = router
    router.push({ pathname, query }, asPath, { locale: newLocale })
  }

  const changeTo = router.locale === 'en' ? 'es' : 'en'
  return (
    <div className='indexContentWrapper'>


      <button style={{width:"100%"}} onClick={() => onToggleLanguageClick(changeTo)}>
        {t('example', { changeTo })}
      </button>
      <HeroSection slogan={t('slogan')} AsteriskVisibility={'hide'} BackgroundImageSrc={'heroSectionBackground.jpg'}/>
      <BigParagraph title={t('BigParagraphTitle1')} OptionalImage={'TechLogos.png'} />
      <ImageSection FillingImg={'ImageSection.jpeg'}></ImageSection>
      <SmallParagraph SmallTitle={t('SmallParagraphTitle')} Content={t('SmallParagraphContent')} UnderlinedLinkTitle={t('SmallParagraphLink')}></SmallParagraph>
      <Rest TitleText={t('RestSectionTitle')} Body={t('RestSectionBody')} />
      <BigParagraph title={t('BigParagraphTitle2')} Tags={t('BigParagraphTags2', { returnObjects: true })} />
      <TextInColumns TitleColumn={t('MetodologyTitle')} ColumnContents={t('MetodologyContent', { returnObjects: true })} ColumnSize={2} MainStyle={"White"} />
      <TitleAndSubtitle title={t('TitleAndSubtitleTitle1')} Subtitle={t('TitleAndSubtitleBody1')} />
      <PhraseAndItems Content={t('WhyHireUs', { returnObjects: true })} />
      {/*Still hardcoded */}<Grid Content={[{ GridTitle: "Laravel", GridBody: "Framework de larabel famoso en todo le mundo por su utilidad", GridPosition: "1" }, { GridTitle: "PHP", GridBody: "Uno de los mejores lenguajes de programacion, Aprovado por  Isaias", GridPosition: "6" }, { GridTitle: "Working!", GridPosition: "3" }, { GridTitle: "Working!", GridPosition: "4" }, { GridTitle: "Working!", GridPosition: "5" }, { GridTitle: "Working EARLY!", GridPosition: "2" }]} />
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
