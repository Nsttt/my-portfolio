import { NextSeo } from "next-seo";
import { getAllProjects } from "../services/project.service";
import { Jumbotron } from "../components";
import HeaderContainer from "../containers/header";
import FooterContainer from "../containers/footer";

export default function Portfolio({ projects }) {
  console.log(projects);

  return (
    <>
      <NextSeo />
      <HeaderContainer>
        <Jumbotron>
          <Jumbotron.Title>Project List</Jumbotron.Title>
          <Jumbotron.Description>
            Here is a list of all my projects.
          </Jumbotron.Description>
          <Jumbotron.Group>
            {projects.map((project) => {
              return (
                <Jumbotron.Project key={project.id}>
                  <Jumbotron.Image
                    src={`${process.env.STRAPI_HOST + project.Image.url}`}
                  />
                </Jumbotron.Project>
              );
            })}
          </Jumbotron.Group>
        </Jumbotron>
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
