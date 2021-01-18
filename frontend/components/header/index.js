import { BackgroundColor } from "chalk";
import Link from "next/link";
import { Logo, TextLink, Container, Group, Background } from "./styles/Header";

export default function Header({ children, ...restProps }) {
  return <Background {...restProps}>{children}</Background>;
}

Header.Frame = function HeaderFrame({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Header.Group = function HeaderGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};
//TODO: Make logo display an image instead.
Header.Logo = function HeaderLogo({ children, ...restProps }) {
  return (
    <Link href="/">
      <Logo {...restProps}>{children}</Logo>
    </Link>
  );
};

Header.TextLink = function HeaderTextLink({ href, children, ...restProps }) {
  return (
    <Link href={href}>
      <TextLink {...restProps}>{children}</TextLink>
    </Link>
  );
};
