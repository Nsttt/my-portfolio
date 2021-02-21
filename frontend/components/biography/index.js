import { Body, Container, Image, Labels, Title } from "./styles/Biography";

export default function Biography({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Biography.Title = function BiographyTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Biography.Image = function BiographyImage({ children, ...restProps }) {
  return <Image {...restProps}>{children}</Image>;
};

Biography.Labels = function BiographyLabels({ children, ...restProps }) {
  return <Labels {...restProps}>{children}</Labels>;
};

Biography.Body = function BiographyBody({ body, ...restProps }) {
  return <Body dangerouslySetInnerHTML={{ __html: body }} {...restProps} />;
};
