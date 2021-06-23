import { NextSeo } from "next-seo";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { getAllProjects } from "../services/project.service";
import { Jumbotron, BackToTop } from "../components";
import HeaderContainer from "../containers/header";
import FooterContainer from "../containers/footer";

export default function Portfolio({ projects }) {
  const { t } = useTranslation("portfolio");

  return (
    <>
      <NextSeo title="Portfolio" />
      <BackToTop />
      <HeaderContainer />
      <Jumbotron>
        <Jumbotron.Title>{t("title")}</Jumbotron.Title>
        <Jumbotron.Description>{t("subtitle")}</Jumbotron.Description>
        <Jumbotron.Group projects={projects} />
      </Jumbotron>
      <FooterContainer />
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      projects: await getAllProjects(),
      ...(await serverSideTranslations(locale, ["portfolio", "common"])),
    },
    revalidate: 86400,
  };
}
