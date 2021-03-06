import Link from "next/link";
import { Background, Button, Container, TextLink } from "./styles/Footer";

export default function Footer({ children, ...restProps }) {
  return <Background {...restProps}>{children}</Background>;
}

Footer.Container = function FooterContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Footer.TextLink = function FooterTextLink({ children, href, ...restProps }) {
  return (
    <TextLink href={href} target="__blank" rel="noreferrer" {...restProps}>
      {children}
    </TextLink>
  );
};

Footer.Button = function FooterButton({ children, href, ...restProps }) {
  return (
    <Link href={href}>
      <Button {...restProps}>{children}</Button>
    </Link>
  );
};
