import Head from "next/head";
import { getAllProjects } from "../services/project/project.service";
import { Header, Feature } from "../components";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header>
        <Header.Frame>
          <Header.Group>
            <Header.Logo>NST Lopez</Header.Logo>
            <Header.TextLink href="/">Home</Header.TextLink>
            <Header.TextLink href="/portfolio">Portfolio</Header.TextLink>
            <Header.TextLink href="/aboutme">About me</Header.TextLink>
          </Header.Group>
          <Header.Group>
            <Header.SocialIcon
              alt="LinkedIn"
              src="/linkedin.png"
              href="https://www.linkedin.com/in/nestorlopezlopez/"
            />
            <Header.SocialIcon
              alt="Github"
              src="/github.png"
              href="https://github.com/Nsttt/"
            />
            <Header.SocialIcon
              alt="Twitter"
              src="/twitter.png"
              href="https://twitter.com/nstlopez/"
            />
          </Header.Group>
        </Header.Frame>
        <Feature>
          <Feature.Title>Esto es una prueba</Feature.Title>
          <Feature.SubTitle>PAra ver que tal se ve todo esto.</Feature.SubTitle>
          <Feature.CallToAction>Click me</Feature.CallToAction>
        </Feature>
      </Header>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: { projects: await getAllProjects() },
  };
}
