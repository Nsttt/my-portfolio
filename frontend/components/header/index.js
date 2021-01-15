import Link from "next/link";
import { Logo, TextLink, Container, Group } from "./styles/Header";

export default function Header({ children, ...restProps }) {
  return children;
}

Header.Frame = function HeaderFrame({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Header.Group = function HeaderGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};

Header.Logo = function HeaderLogo({ children, ...restProps }) {
  return (
    <Link href="/">
      <Logo {...restProps}>{children}</Logo>
    </Link>
  );
};

Header.TextLink = function HeaderTextLink({ children, ...restProps }) {
  return <TextLink {...restProps}>{children}</TextLink>;
};
