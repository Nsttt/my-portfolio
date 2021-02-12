import Link from "next/link";
import {
  Logo,
  TextLink,
  Container,
  Group,
  Background,
  SocialIcon,
  FocusWord,
} from "./styles/Header";

export default function Header({ children, ...restProps }) {
  return <Background {...restProps}>{children}</Background>;
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
      <Logo {...restProps}>
        <FocusWord>Nst </FocusWord>
        Lopez
      </Logo>
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

Header.SocialIcon = function HeaderSocialIcon({
  href,
  src,
  alt,
  ...restProps
}) {
  return (
    <SocialIcon href={href} target="_blank" {...restProps}>
      <img src={src} alt={alt} />
    </SocialIcon>
  );
};
