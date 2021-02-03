import { Container, Title, SubTitle, FocusWord1, FocusWord2, Button, NotFound } from './styles/Feature';
import Link from 'next/link';

export default function Feature({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Feature.MainTitle = function FeatureMainTitle({ ...restProps }) {
  return (
  <Title {...restProps}>
      Building<br />
      <FocusWord1>software</FocusWord1> for<br />
      <FocusWord2>humans</FocusWord2>
  </Title>
  );
};

Feature.Title = function FeatureTitle({ children, ...restProps }) {
  return (
  <Title {...restProps}>{children}
  </Title>
  );
};
Feature.SubTitle = function FeatureSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

Feature.Button = function FeatureButton({ href, children, ...restProps}) {
  return (
    <Link href={href}>
      <Button {...restProps}>
        {children}
      </Button>
    </Link>
    )
}

Feature.NotFound = function FeatureNotFound({children, ...restProps}) {
  return (
    <NotFound {...restProps}>{children}</NotFound>
  )
}

