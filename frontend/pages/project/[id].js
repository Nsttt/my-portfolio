import marked from "marked";
import { Project } from "../../components";
import HeaderContainer from "../../containers/header";
import FooterContainer from "../../containers/footer";
import { getByPermaLink, getAllProjects } from "../../services/project.service";

export default function ProjectPage({ project }) {
  return (
    <>
      <HeaderContainer>
        <Project>
          <Project.TopImage
            src={process.env.NEXT_PUBLIC_STRAPI_HOST + project.Image.url}
          />
          <Project.Title>{project.title}</Project.Title>
          {project.subtitle ? (
            <Project.SubTitle>{project.subtitle}</Project.SubTitle>
          ) : (
            ""
          )}
          <Project.Group>
            {project.categories.map((label) => (
              <Project.Label
                id={label.name}
                src={process.env.NEXT_PUBLIC_STRAPI_HOST + label.icon.url}
              />
            ))}
          </Project.Group>
          <Project.Body body={project.body} />
        </Project>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
}

export async function getStaticPaths() {
  const projects = await getAllProjects();

  const paths = projects.map((project) => ({
    params: { id: project.permalink },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const getProject = await getByPermaLink(params.id);
  const body = marked(getProject.body, {
    baseUrl: process.env.NEXT_PUBLIC_STRAPI_HOST,
  });
  return {
    props: { project: { ...getProject, body } },
  };
}
