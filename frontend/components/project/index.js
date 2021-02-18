import {
  Body,
  Container,
  Icon,
  Title,
  SubTitle,
  TopImage,
  Label,
  Group,
  Button,
  LabelGroup,
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

Project.Title = function ProjectTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Project.SubTitle = function ProjectSubtitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

Project.Label = function ProjectLabel({ src, href, ...restProps }) {
  return <Label href={href} src={src} {...restProps} />;
};

Project.Button = function ProjectButton({
  color,
  imgSrc,
  alt,
  href,
  children,
  ...restProps
}) {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      <Button color={color} {...restProps}>
        <Icon src={imgSrc} alt={alt} />
        {children}
      </Button>
    </a>
  );
};

Project.Body = function ProjectBody({ body, ...restProps }) {
  return <Body dangerouslySetInnerHTML={{ __html: body }} {...restProps} />;
};

Project.LabelGroup = function ProjectLabelGroup({ children, ...restProps }) {
  return <LabelGroup {...restProps}>{children}</LabelGroup>;
};
