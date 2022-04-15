import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';

import SEO from '../next-seo.config';

import '../styles/globals.css';
import '@fontsource/bebas-neue';
import '@fontsource/montserrat';

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
