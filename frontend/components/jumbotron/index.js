import Link from "next/link";
import {
  Container,
  Image,
  Title,
  Description,
  Project,
  Group,
  InnerTitle,
  InnerDesc,
} from "./styles/Jumbotron";

export default function Jumbotron({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Jumbotron.Group = function JumboGroup({ projects, ...restProps }) {
  const API_URL = process.env.NEXT_PUBLIC_STRAPI_HOST;

  return (
    <Group {...restProps}>
      {projects.map((project) => (
        <Link
          key={project.id}
          href={`/project/[id]?id=${project.permalink}`}
          as={`/project/${project.permalink}`}
        >
          <Project>
            <InnerTitle>
              {project.title}
              <br />
              <InnerDesc>{project.subtitle}</InnerDesc>
            </InnerTitle>

            <Image src={API_URL + project.image.url} />
          </Project>
        </Link>
      ))}
    </Group>
  );
};

Jumbotron.Title = function JumboTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Jumbotron.Description = function JumboDescription({ children, ...restProps }) {
  return <Description {...restProps}>{children}</Description>;
};

Jumbotron.Project = function JumboProject({ children, ...restProps }) {
  return <Project {...restProps}>{children}</Project>;
};

Jumbotron.Image = function JumboImage({ src, ...restProps }) {
  return <Image src={src} {...restProps} />;
};
