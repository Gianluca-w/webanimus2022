import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'

/**
         * Language Change button, recieves nothing can only be in 2 states currently
**/
const LanguageChangeButton = ({ }) => {
  const router = useRouter()
  const { t } = useTranslation('common')
  const onToggleLanguageClick = (newLocale) => {
    const { pathname, asPath, query } = router
    router.push({ pathname, query }, asPath, { locale: newLocale })
  }
  const changeTo = router.locale === 'en' ? 'es' : 'en'
  return <div>
    <button
      className='ForcedUppercase AltHoverableLink'
      onClick={() => onToggleLanguageClick(changeTo)}>
      {t('Locale', { changeTo })}
    </button>
  </div>
};
export default LanguageChangeButton;