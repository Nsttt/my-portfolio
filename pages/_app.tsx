import type { AppProps } from 'next/app';

import '../styles/globals.css';
import '@fontsource/bebas-neue';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
