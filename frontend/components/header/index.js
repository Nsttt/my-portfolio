import Link from "next/link";
import {
  Title,
  TextLink,
  Container,
  Group,
  SocialIcon,
  FocusWord,
  Logo,
} from "./styles/Header";

export default function Header({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Header.Group = function HeaderGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};

Header.Title = function HeaderTitle({ ...restProps }) {
  return (
    <Link href="/">
      <Title {...restProps}>
        <FocusWord>Nst </FocusWord>
        Lopez
      </Title>
    </Link>
  );
};

Header.Logo = function HeaderLogo({ src, ...restProps }) {
  return (
    <Link href="/">
      <Logo {...restProps} src={src} alt="Logo" />
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
    <SocialIcon href={href} target="_blank" rel="noreferrer" {...restProps}>
      <img src={src} alt={alt} />
    </SocialIcon>
  );
};
