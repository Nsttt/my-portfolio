import {
  Body,
  Container,
  Image,
  Title,
  SubTitle,
  TopImage,
  Label,
  Group,
} from "./styles/Project";

export default function Project({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Project.Group = function ProjectGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};

Project.TopImage = function ProjectTopImage({ src, ...restProps }) {
  return <TopImage src={src} {...restProps} />;
};

Project.Image = function ProjectImage({ src, ...restProps }) {
  return <Image src={src} {...restProps} />;
};

Project.Title = function ProjectTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Project.SubTitle = function ProjectSubtitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

Project.Label = function ProjectLabel({ src, href, ...restProps }) {
  return <Label href={href} src={src} {...restProps} />;
};

Project.Body = function ProjectBody({ body, ...restProps }) {
  return <Body dangerouslySetInnerHTML={{ __html: body }} {...restProps} />;
};
