import { NextSeo } from "next-seo";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { Feature } from "../components";
import HeaderContainer from "../containers/header";
import FooterContainer from "../containers/footer";

export default function PageNotFound() {
  const { t } = useTranslation("404");

  return (
    <>
      <NextSeo title="404" />
      <HeaderContainer>
        <Feature>
          <Feature.NotFound>
            <Feature.Title>{t("title")}</Feature.Title>
            <Feature.Button href="/">{t("button")}</Feature.Button>
          </Feature.NotFound>
        </Feature>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["404", "common"])),
    },
  };
}
