import '../styles/general.scss';
import { appWithTranslation } from 'next-i18next'
import nextI18nextConfig from '../next-i18next.config';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default appWithTranslation(MyApp, nextI18nextConfig)

