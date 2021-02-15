import { Body, Container, Image, Title, TopImage } from "./styles/Project";

export default function Project({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Project.TopImage = function ProjectTopImage({ src, ...restProps }) {
  return <TopImage src={src} {...restProps} />;
};

Project.Image = function ProjectImage({ src, ...restProps }) {
  return <Image src={src} {...restProps} />;
};

Project.Title = function ProjectTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Project.Body = function ProjectBody({ body, ...restProps }) {
  return <Body dangerouslySetInnerHTML={{ __html: body }} {...restProps} />;
};
