import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';

import SEO from '../next-seo.config';

import '../styles/globals.css';
import '@fontsource/bebas-neue';
import '@fontsource/montserrat';
import PlausibleProvider from 'next-plausible';

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <PlausibleProvider domain="nstlopez.com">
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </PlausibleProvider>
  );
};

export default MyApp;
