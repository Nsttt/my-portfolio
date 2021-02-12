import { DefaultSeo } from "next-seo";
import { GlobalStyles } from "../styles/global-styles";
import SEO from "../next-seo.config";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}
