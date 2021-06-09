import { NextSeo } from "next-seo";
import marked from "marked";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import HeaderContainer from "../containers/header";
import FooterContainer from "../containers/footer";
import { Biography } from "../components";
import { getBiography, getLabels, getPhoto } from "../services/about.service";

export default function About({ photo, body, labels }) {
  const { t } = useTranslation("about");

  return (
    <>
      <NextSeo title="About" />
      <HeaderContainer>
        <Biography>
          <Biography.Title>{t("title")}</Biography.Title>
          <Biography.Image src={photo.url} />
          <Biography.Body body={body} />
          <Biography.SubTitle>{t("subtitle")}</Biography.SubTitle>
          <Biography.Labels>
            {labels.map((label) => (
              <Biography.Label
                key={label.name}
                src={label.icon.url}
                alt={label.name}
              />
            ))}
          </Biography.Labels>
        </Biography>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
}

export async function getStaticProps({ locale }) {
  const biography = await getBiography();
  const parsedBody = () =>
    marked(biography, {
      baseUrl: process.env.NEXT_PUBLIC_STRAPI_HOST,
    });
  return {
    props: {
      photo: await getPhoto(),
      body: parsedBody(),
      labels: await getLabels(),
      ...(await serverSideTranslations(locale, ["about", "common"])),
    },
  };
}
