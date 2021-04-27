import Link from "next/link";
import {
  Background,
  Logo,
  Container,
  TextLink,
  Copyright,
  Bar,
  Newsletter,
  Contact,
  Project,
  Title,
  Group,
  FocusWord,
  Links,
  TextGroup,
  ListItem,
} from "./styles/Footer";

export default function Footer({ children, ...restProps }) {
  return <Background {...restProps}>{children}</Background>;
}

Footer.Container = function FooterContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Footer.Group = function FooterGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};

Footer.TextGroup = function FooterTextGroup({ children, ...restProps }) {
  return <TextGroup {...restProps}>{children}</TextGroup>;
};

Footer.Links = function FooterLinks({ children, ...restProps }) {
  return <Links {...restProps}>{children}</Links>;
};

Footer.Newsletter = function FooterNewsletter({ children, ...restProps }) {
  return <Newsletter {...restProps}>{children}</Newsletter>;
};

Footer.Bar = function FooterBar({ ...restProps }) {
  return <Bar {...restProps} />;
};

Footer.Copyright = function FooterCopyright({ children, ...restProps }) {
  return <Copyright {...restProps}>{children}</Copyright>;
};

Footer.Logo = function FooterLogo({ src, ...restProps }) {
  return <Logo src={src} alt="Logo" {...restProps} />;
};

Footer.FocusWord = function FooterFocusWord({ children, ...restProps }) {
  return <FocusWord {...restProps}>{children}</FocusWord>;
};

Footer.Title = function FooterTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Footer.TextLink = function FooterTextLink({ children, href, ...restProps }) {
  return (
    <ListItem {...restProps}>
      <TextLink href={href} target="__blank" rel="noreferrer">
        {children}
      </TextLink>
    </ListItem>
  );
};

Footer.Contact = function FooterContact({ children, ...restProps }) {
  return <Contact {...restProps}>{children}</Contact>;
};

Footer.Project = function FooterProject({ children, ...restProps }) {
  return <Project {...restProps}>{children}</Project>;
};
