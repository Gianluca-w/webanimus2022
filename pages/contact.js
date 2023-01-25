
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
        <HeroSectionRemastered Slogan={t('ContactUs.Slogan')} Asterisk={"Hide"} FirstLinkText={t('PageHome')} SecondLinkText={t('PageAbout')} FirstLinkHref={'/'} SecondLinkHref={'/about'}/>
        <ContactForm/>
        <Footer FooterTitleTxt={t('FooterTitle')} FooterLinkText={t('FooterLinkTitle')} FooterMailText={t('FooterMail')} FooterAdressText={t('FooterAdress')}/>
        <DropdownMenu Items={[{Title:"About", Position:1,Href:"/about"},{Title:"Im Workin too",Position:2}]}/>
        <LinksComponent/>
    </div>
    )
   }

   export const getServerSideProps = async ({ locale }) => ({
    props: {
      ...await serverSideTranslations(locale, ['common']),
    },
  })
