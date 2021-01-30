import { Container, Title, SubTitle, FocusWord1, FocusWord2, Button, Tag, Glitch } from './styles/Feature';

export default function Feature({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Feature.Title = function FeatureTitle({ ...restProps }) {
  return (
  <Title {...restProps}>
      Building<br />
      <FocusWord1>software</FocusWord1> for<br />
      <FocusWord2>humans</FocusWord2>
  </Title>
  );
};

Feature.SubTitle = function FeatureSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

Feature.CallToAction = function FeatureCallToAction({ children, ...restProps}) {
  return (
  <Button {...restProps}>
   {children}
  </Button>
    )
}