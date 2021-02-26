import marked from "marked";
import { Project } from "../../components";
import HeaderContainer from "../../containers/header";
import FooterContainer from "../../containers/footer";
import { getByPermaLink, getAllProjects } from "../../services/project.service";
import NewsletterContainer from "../../containers/newsletter";

export default function ProjectPage({ project }) {
  return (
    <>
      <HeaderContainer>
        <Project>
          <Project.TopImage
            src={process.env.NEXT_PUBLIC_STRAPI_HOST + project.image.url}
          />
          <Project.Title>{project.title}</Project.Title>
          {project.subtitle ? (
            <Project.SubTitle>{project.subtitle}</Project.SubTitle>
          ) : (
            ""
          )}
          <Project.Group>
            <Project.Button
              alt="GitHub"
              href={project.git}
              color="#E219E6"
              imgSrc="/github.svg"
            >
              See code
            </Project.Button>
            <Project.Button
              alt="Web"
              href={project.link}
              color="#e5195f"
              imgSrc="/globe.svg"
            >
              Open
            </Project.Button>
          </Project.Group>
          <Project.LabelGroup>
            {project.categories.map((label) => (
              <Project.Label
                key={label.name}
                src={process.env.NEXT_PUBLIC_STRAPI_HOST + label.icon.url}
              />
            ))}
          </Project.LabelGroup>
          <Project.Body body={project.body} />
          <NewsletterContainer />
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
