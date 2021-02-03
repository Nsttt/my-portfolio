import { NextSeo } from "next-seo";
import { getAllProjects } from "../services/project.service";
import { Feature } from "../components";
import HeaderContainer from "../containers/header";

export default function Home() {
  return (
    <>
      <NextSeo title="Nestor Lopez Portfolio" />
      <HeaderContainer>
        <Feature>
          <Feature.MainTitle />
          <Feature.SubTitle>Learn more about me below</Feature.SubTitle>
          <Feature.Button href="/portfolio">Click me</Feature.Button>
        </Feature>
      </HeaderContainer>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: { projects: await getAllProjects() },
  };
}
