import { NextSeo } from "next-seo";
import { getGallery, getHeroProject } from "../services/project.service";
import { Feature, Hero, Gallery } from "../components";
import HeaderContainer from "../containers/header";
import FooterContainer from "../containers/footer";

export default function Home({ projects, heroproject }) {
  return (
    <>
      <NextSeo title="Nestor Lopez Portfolio" />
      <HeaderContainer>
        <Feature>
          <Feature.MainTitle />
          <Feature.SubTitle>
            Hello, I'm Nestor, a passionate software engineer student.
          </Feature.SubTitle>
          <Feature.Button>Click me</Feature.Button>
        </Feature>
        <Hero>
          <Hero.Container>
            <Hero.Featured>Featured Project</Hero.Featured>
            <Hero.Title>{heroproject[0].title}</Hero.Title>
            <Hero.Description>{heroproject[0].description}</Hero.Description>
          </Hero.Container>
          <Hero.Image
            src={process.env.NEXT_PUBLIC_STRAPI_HOST + heroproject[0].Image.url}
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
                  imgSrc={
                    process.env.NEXT_PUBLIC_STRAPI_HOST + project.Image.url
                  }
                />
              ))}
            </Gallery.Group>
            <Gallery.Button>See more</Gallery.Button>
          </Gallery.Container>
        </Gallery>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      heroproject: await getHeroProject(),
      projects: await getGallery(),
    },
  };
}
