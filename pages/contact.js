
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import HeroSectionRemastered from '../components/HeroSectionRemaster'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'
import LinksComponent from '../components/LinksComponent'
import DropdownMenu from '../components/DropdownMenu'
export default function Home(props) {
  const { t } = useTranslation('common')

  return (
    <div className='indexContentWrapper'>
      <HeroSectionRemastered
        Slogan={t('ContactUs.Slogan')}
        Asterisk={"Hide"}
        FirstLinkText={t('PageAbout')}
        SecondLinkText={t('PageContact')}
        MainStyle={'Contact'}
        FirstLinkHref={'/about'}
        SecondLinkHref={'/contact'} />
      <ContactForm contentTranslation={t('ContactUs', { returnObjects: true })}/>
      <Footer
        FooterTitleTxt={t('FooterTitle')}
        FooterLinkText={t('FooterLinkTitle')}
        FooterMailText={t('FooterMail')}
        FooterAdressText={t('FooterAdress')} />
      {/*<DropdownMenu Items={[{ Title: t('PageAbout'), Position: 1, Href: "/about" }, { Title: t('PageContact'), Position: 2, Href: "/contact" }]} */}
      <LinksComponent />
    </div>
  )
}

export const getServerSideProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common']),
  },
})
