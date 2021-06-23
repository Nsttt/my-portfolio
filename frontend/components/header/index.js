import Link from "next/link";
import { useBurgerContext } from "../../context/burger";
import {
  Title,
  TextLink,
  Container,
  Group,
  Brand,
  SocialIcon,
  FocusWord,
  Logo,
  Burger,
} from "./styles/Header";

export default function Header({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Header.Group = function HeaderGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};

Header.Brand = function HeaderBrand({ src, ...restProps }) {
  return (
    <Link href="/">
      <Brand {...restProps}>
        <Logo src={src} alt="Logo" />
        <Title>
          <FocusWord>Nst </FocusWord>
          Lopez
        </Title>
      </Brand>
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

Header.Burger = function HeaderBurger({ children, ...restProps }) {
  const BurgerContext = useBurgerContext();

  return (
    <Burger {...restProps} onClick={BurgerContext.toggleMenu}>
      <div />
      <div />
      <div />
    </Burger>
  );
};
