import {
  Container,
  TextLink,
  Bar,
  Group,
  Links,
  TextGroup,
  ListItem,
} from "./styles/Footer";

export default function Footer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

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
