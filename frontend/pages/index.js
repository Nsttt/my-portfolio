import { NextSeo } from "next-seo";
import { getAllProjects } from "../services/project.service";
import { Feature, Hero, Cards } from "../components";
import HeaderContainer from "../containers/header";

export default function Home() {
  return (
    <>
      <NextSeo title="Nestor Lopez Portfolio" />
      <HeaderContainer>
        <Feature>
          <Feature.MainTitle />
          <Feature.SubTitle>Learn more about me below</Feature.SubTitle>
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
          <Hero.Image src="/featured.png"/>
        </Hero>
        <Cards>
          <Cards.Container></Cards.Container>
        </Cards>
      </HeaderContainer>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: { projects: await getAllProjects() },
  };
}
