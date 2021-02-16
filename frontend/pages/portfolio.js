import { NextSeo } from "next-seo";
import { getAllProjects } from "../services/project.service";
import { Jumbotron } from "../components";
import HeaderContainer from "../containers/header";
import FooterContainer from "../containers/footer";

export default function Portfolio({ projects }) {
  return (
    <>
      <NextSeo />
      <HeaderContainer>
        <Jumbotron>
          <Jumbotron.Title>Project List</Jumbotron.Title>
          <Jumbotron.Description>
            Here is a list of all my projects.
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
