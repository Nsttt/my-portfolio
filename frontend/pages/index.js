import { NextSeo } from "next-seo";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { getGallery, getHeroProject } from "../services/project.service";
import { Feature, Hero, Gallery, BackToTop } from "../components";
import HeaderContainer from "../containers/header";
import FooterContainer from "../containers/footer";

export default function Home({ projects, heroproject }) {
  const { t } = useTranslation("common");

  return (
    <>
      <NextSeo title="Home" />
      <BackToTop />
      <HeaderContainer>
        <Feature>
          <Feature.MainTitle />
          <Feature.SubTitle>
            Hello, I'm Nestor, a passionate full-stack software engineer.
          </Feature.SubTitle>
          <Feature.Button href="/contact">Say hi 👋</Feature.Button>
        </Feature>
        <Hero>
          <Hero.Container>
            <Hero.Featured>{t("hero")}</Hero.Featured>
            <Hero.Title
              href={heroproject[0].permalink}
              as={heroproject[0].permalink}
            >
              {heroproject[0].title}
            </Hero.Title>
            <Hero.Description>{heroproject[0].description}</Hero.Description>
          </Hero.Container>
          <Hero.Image
            src={heroproject[0].image.url}
            href={heroproject[0].permalink}
            as={heroproject[0].permalink}
          />
        </Hero>
        <Gallery>
          <Gallery.Container>
            <Gallery.Title>Latest Projects</Gallery.Title>
            <Gallery.Group>
              {projects.map((project) => (
                <Gallery.Card
                  key={project.id}
                  href={project.permalink}
                  as={project.permalink}
                  imgSrc={project.image.url}
                  title={project.title}
                  subtitle={project.subtitle}
                />
              ))}
            </Gallery.Group>
            <Gallery.Button href="/portfolio">See more</Gallery.Button>
          </Gallery.Container>
        </Gallery>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      heroproject: await getHeroProject(),
      projects: await getGallery(),
      ...(await serverSideTranslations(locale, ["common", "footer", "header"])),
    },
  };
}
