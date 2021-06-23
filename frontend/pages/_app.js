import { DefaultSeo } from "next-seo";
import { appWithTranslation } from "next-i18next";
import { GlobalStyles } from "../styles/global-styles";
import { BurgerWrapper } from "../context/burger";
import { Menu } from "../components";
import SEO from "../next-seo.config";

const MyApp = ({ Component, pageProps }) => (
  <>
    <DefaultSeo {...SEO} />
    <GlobalStyles />
    <BurgerWrapper>
      <Menu />
      <Component {...pageProps} />
    </BurgerWrapper>
  </>
);

export default appWithTranslation(MyApp);
