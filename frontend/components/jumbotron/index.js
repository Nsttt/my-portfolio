import {
  Container,
  Image,
  Title,
  Description,
  Project,
  Group,
} from "./styles/Jumbotron";

export default function Jumbotron({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Jumbotron.Group = function JumboGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
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
