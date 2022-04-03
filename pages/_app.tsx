import type { NextPage } from 'next';
import type { AppProps } from 'next/app';

import '../styles/globals.css';
import '@fontsource/bebas-neue';
import '@fontsource/montserrat';

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default MyApp;
