import { useRouter } from 'next/router'

import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import HeroSection from '../components/HeroSection'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'

export default function Home(props) {
    const { t } = useTranslation('common')

    return (
      <div className='indexContentWrapper'>
        <HeroSection slogan={t('slogan')} BasicBackgroundStyle={'BaseContactUs'} AsteriskSize='45px'/>
        <ContactForm/>
        <Footer FooterTitleTxt={t('FooterTitle')} FooterLinkText={t('FooterLinkTitle')} FooterMailText={t('FooterMail')} FooterAdressText={t('FooterAdress')}/>
    </div>
    )
   }

   export const getServerSideProps = async ({ locale }) => ({
    props: {
      ...await serverSideTranslations(locale, ['common']),
    },
  })
