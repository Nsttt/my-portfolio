import marked from "marked";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { NextSeo } from "next-seo";
import { useTranslation } from "next-i18next";
import { Project, Coffee, BackToTop } from "../../components";
import HeaderContainer from "../../containers/header";
import FooterContainer from "../../containers/footer";
import NewsletterContainer from "../../containers/newsletter";
import { getByPermaLink, getAllProjects } from "../../services/project.service";

export default function ProjectPage({ project }) {
  const { t } = useTranslation("project");

  return (
    <>
      <NextSeo
        title={project.title}
        description={project.description}
        canonical={`https://nstlopez.com/project/${project.permalink}`}
        openGraph={{
          url: `https://nstlopez.com/project/${project.permalink}`,
          title: project.title,
          description: project.subtitle,
          images: [
            {
              url: project.image.url,
              width: 1920,
              height: 1080,
              alt: "Og",
            },
          ],
        }}
      />
      <BackToTop />
      <HeaderContainer />
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
        <NewsletterContainer />
      </Project>
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
