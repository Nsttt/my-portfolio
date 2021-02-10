import { NextSeo } from "next-seo";
import { getAllProjects } from "../services/project.service";
import { Feature, Hero, Gallery } from "../components";
import HeaderContainer from "../containers/header";
import FooterContainer from "../containers/footer";

export default function Home({ projects }) {
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
            <Hero.Title>This is a test.</Hero.Title>
            <Hero.Description>
              Lorem fistrum papaar papaar pecador de la pradera diodenoo
              quietooor al ataquerl quietooor. Me cago en tus muelas quietooor
              jarl no te digo trigo por no llamarte Rodrigor ahorarr pecador te
              va a hasé pupitaa. Apetecan apetecan va usté muy cargadoo te voy a
              borrar el cerito. No puedor condemor mamaar mamaar al ataquerl a
              gramenawer me cago en tus muelas de la pradera. Ese hombree se
              calle ustée se calle ustée al ataquerl me cago en tus muelas.
            </Hero.Description>
          </Hero.Container>
          <Hero.Image src="/featured.png" />
        </Hero>
        <Gallery>
          <Gallery.Container>
            <Gallery.Title>Check out my latest projects</Gallery.Title>
            <Gallery.Group>
              <Gallery.Card></Gallery.Card>
              <Gallery.Card></Gallery.Card>
              <Gallery.Card></Gallery.Card>
            </Gallery.Group>
          </Gallery.Container>
        </Gallery>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: { projects: await getAllProjects() },
  };
}
