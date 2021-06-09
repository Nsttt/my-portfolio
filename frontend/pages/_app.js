import { DefaultSeo } from "next-seo";
import { appWithTranslation } from "next-i18next";
import { GlobalStyles } from "../styles/global-styles";
import SEO from "../next-seo.config";

const MyApp = ({ Component, pageProps }) => (
  <>
    <DefaultSeo {...SEO} />
    <GlobalStyles />
    <Component {...pageProps} />
  </>
);

export default appWithTranslation(MyApp);
