import marked from "marked";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { NextSeo } from "next-seo";
import { useTranslation } from "next-i18next";
import { Project, Coffee, BackToTop } from "../../components";
import HeaderContainer from "../../containers/header";
import FooterContainer from "../../containers/footer";
import { getByPermaLink, getAllProjects } from "../../services/project.service";

export default function ProjectPage({ project }) {
  const { t } = useTranslation("project");

  return (
    <>
      <NextSeo title={project.title} />
      <BackToTop />
      <HeaderContainer>
        <Project>
          <Project.TopImage src={project.image.url} />
          <Project.Title>{project.title}</Project.Title>
          {project.subtitle ? (
            <Project.SubTitle>{project.subtitle}</Project.SubTitle>
          ) : (
            ""
          )}
          <Project.Group>
            {project.git ? (
              <Project.Button
                alt="GitHub"
                href={project.git}
                color="#E219E6"
                imgSrc="/github.svg"
              >
                {t("code")}
              </Project.Button>
            ) : (
              ""
            )}
            {project.link ? (
              <Project.Button
                alt="Web"
                href={project.link}
                color="#e5195f"
                imgSrc="/globe.svg"
              >
                {t("page")}
              </Project.Button>
            ) : (
              ""
            )}
            <Coffee text={t("coffee")} />
          </Project.Group>
          <Project.LabelGroup>
            {project.categories.map((label) => (
              <Project.Label key={label.name} src={label.icon.url} />
            ))}
          </Project.LabelGroup>
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

export async function getStaticProps({ locale, params }) {
  const getProject = await getByPermaLink(params.id);
  const body = marked(getProject.body, {
    baseUrl: process.env.NEXT_PUBLIC_STRAPI_HOST,
  });
  return {
    props: {
      project: { ...getProject, body },
      ...(await serverSideTranslations(locale, ["project", "common"])),
    },
  };
}
