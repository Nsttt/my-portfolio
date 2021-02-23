import {
  Body,
  Container,
  Image,
  Label,
  Labels,
  SubTitle,
  Title,
} from "./styles/Biography";

export default function Biography({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Biography.Title = function BiographyTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Biography.SubTitle = function BiographySubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

Biography.Image = function BiographyImage({ src, ...restProps }) {
  return <Image src={src} alt="Photo" {...restProps} />;
};

Biography.Labels = function BiographyLabels({ children, ...restProps }) {
  return <Labels {...restProps}>{children}</Labels>;
};

Biography.Label = function BiographyLabel({ src, alt, ...restProps }) {
  return <Label src={src} alt={alt} {...restProps} />;
};

Biography.Body = function BiographyBody({ body, ...restProps }) {
  return <Body dangerouslySetInnerHTML={{ __html: body }} {...restProps} />;
};
