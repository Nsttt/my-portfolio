import { NextSeo } from "next-seo";
import Link from "next/link";
import { getAllProjects } from "../services/project.service";
import { Feature, Hero } from "../components";
import HeaderContainer from "../containers/header";

export default function Home() {
  return (
    <>
      <NextSeo title="Nestor Lopez Portfolio" />
      <HeaderContainer>
        <Feature>
          <Feature.MainTitle />
          <Feature.SubTitle>Learn more about me below</Feature.SubTitle>
          <Link href="/portfolio">
            <Feature.Button>Click me</Feature.Button>
          </Link>
        </Feature>
        <Hero>
          <Hero.Container>
            <Hero.Featured>Featured Project</Hero.Featured>
            <Hero.Title>This is a test.</Hero.Title>
          </Hero.Container>
        </Hero>
      </HeaderContainer>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: { projects: await getAllProjects() },
  };
}
