import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import HeroSectionRemastered from '../components/HeroSectionRemaster'
import Footer from '../components/Footer'
import LinksComponent from '../components/LinksComponent'
import TextInColumns from '../components/TextInColumns'
import AboutInfoCard from '../components/AboutInfoCard'
import AboutSmallCard from '../components/AboutSmallCard'
import AboutImage from '../components/AboutImage'
import DropdownMenu from '../components/DropdownMenu'

export default function Home(props) {
  const { t } = useTranslation('common')
  return (
    <div className='indexContentWrapper'>
      <HeroSectionRemastered
        Slogan={t('AboutUs.slogan')}
        SubSlogan={t('AboutUs.SubSlogan')}
        OptionalAsteriskSize={'45px'}
        MainStyle={'About'}
        BackgroundImageSrc='AboutUsBackground.jpg'
        FullSize={true}
        FirstLinkText={t('PageAbout')}
        SecondLinkText={t('PageContact')}
        FirstLinkHref={'/about'}
        SecondLinkHref={'/contact'} />
      <TextInColumns
        ColumnContents={t('TextInColumns', { returnObjects: true })}
        ColumnSize={3} MainStyle={"white"}></TextInColumns>
      <AboutSmallCard
        Title={t('AboutUs.BuddiesTitle')}
        Body={t('AboutUs.BuddiesBody')} />
      <AboutImage />
      <AboutSmallCard
        Title={t('AboutUs.NetworkTitle')}
        Body={t('AboutUs.NetworkBody')}
        OptionalImage={`FACTICCLogo.png`}
        OptionalImageWdt='120px' />
      <AboutInfoCard
        Title={t('AboutUs.SchoolLabsTitle')}
        SubTitle={t('AboutUs.SchoolLabsSubTitle')}
        Body={t('AboutUs.SchoolLabsBody')} />
      <AboutInfoCard Title={t('AboutUs.HackaCoopTitle')}
        SubTitle={t('AboutUs.HackaCoopSubTitle')}
        Body={t('AboutUs.HackaCoopBody')} />
      <Footer
        FooterTitleTxt={t('FooterTitle')}
        FooterLinkText={t('FooterLinkTitle')}
        FooterMailText={t('FooterMail')}
        FooterAdressText={t('FooterAdress')} />
      <LinksComponent />
      <DropdownMenu Items={[{ Title: t('PageAbout'), Position: 1, Href: "/about" }, { Title: t('PageContact'), Position: 2, Href: "/contact" }]} />
    </div>
  )
}

export const getServerSideProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common']),
  },
})
