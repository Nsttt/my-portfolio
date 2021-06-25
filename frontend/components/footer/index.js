import Link from "next/link";
import {
  Container,
  Content,
  TextLink,
  Bar,
  Contact,
  Group,
  Links,
  TextGroup,
  ListItem,
} from "./styles/Footer";

export default function Footer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Footer.Content = function FooterContent({ children, ...restProps }) {
  return <Content {...restProps}>{children}</Content>;
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

Footer.Bar = function FooterBar({ ...restProps }) {
  return <Bar {...restProps} />;
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

Footer.Contact = function FooterContact({ href, children, ...restProps }) {
  return (
    <Link href={href}>
      <Contact {...restProps}>{children}</Contact>
    </Link>
  );
};
