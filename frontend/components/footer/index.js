import { Background, Container, TextLink } from "./styles/Footer";

export default function Footer({ children, ...restProps }) {
  return <Background {...restProps}>{children}</Background>;
}

Footer.Container = function FooterContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Footer.TextLink = function FooterTextLink({ children, href, ...restProps }) {
  return (
    <TextLink href={href} {...restProps}>
      {children}
    </TextLink>
  );
};