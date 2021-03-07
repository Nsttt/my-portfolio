import { NextSeo } from "next-seo";
import { getAllProjects } from "../services/project.service";
import { Jumbotron } from "../components";
import HeaderContainer from "../containers/header";
import FooterContainer from "../containers/footer";

export default function Portfolio({ projects }) {
  return (
    <>
      <NextSeo title="Portfolio" />
      <HeaderContainer>
        <Jumbotron>
          <Jumbotron.Title>Project List</Jumbotron.Title>
          <Jumbotron.Description>
            All projects I've made so far, detailed.
          </Jumbotron.Description>
          <Jumbotron.Group projects={projects} />
        </Jumbotron>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
}

export async function getServerSideProps() {
  return {
    props: { projects: await getAllProjects() },
  };
}
