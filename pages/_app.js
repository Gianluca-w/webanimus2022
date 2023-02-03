import '../styles/general.scss';
import { appWithTranslation } from 'next-i18next'
import nextI18nextConfig from '../next-i18next.config';
import React, { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const loader = document.getElementById('splashScreen');
      if (loader)
        loader.classList.add("loaded");
    }
  }, []);
  return <Component {...pageProps} />
}

export default appWithTranslation(MyApp, nextI18nextConfig)

