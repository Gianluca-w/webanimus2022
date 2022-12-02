import { useRouter } from 'next/router'

import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import HeroSection from '../components/HeroSection'
import Footer from '../components/Footer'
import LinksComponent from '../components/LinksComponent'
import TextInColumns from '../components/TextInColumns'
import AboutInfoCard from '../components/AboutInfoCard'
import AboutSmallCard from '../components/AboutSmallCard'
import AboutImage from '../components/AboutImage'

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
      <HeroSection slogan={t('AboutUs.slogan')} MaxWidth={true} AlternativeTitleContent={'Esto es lo que hacemos.'} BasicBackgroundStyle={'BaseAboutUs'}/>
      <TextInColumns ColumnContents={t('TextInColumns', { returnObjects: true })} ColumnSize={3} MainStyle={"white"}></TextInColumns>
      <AboutSmallCard Title={t('AboutUs.BuddiesTitle')} Body={t('AboutUs.BuddiesBody')} />
      <AboutImage />
      <AboutSmallCard Title={t('AboutUs.NetworkTitle')} Body={t('AboutUs.NetworkBody')}  OptionalImage={`FACTICCLogo.png`} OptionalImageWdt='264px'/>
      <AboutInfoCard Title={t('AboutUs.SchoolLabsTitle')} SubTitle={t('AboutUs.SchoolLabsSubTitle')} Body={t('AboutUs.SchoolLabsBody')} />
      <AboutInfoCard Title={t('AboutUs.HackaCoopTitle')} SubTitle={t('AboutUs.HackaCoopSubTitle')} Body={t('AboutUs.HackaCoopBody')} />
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
