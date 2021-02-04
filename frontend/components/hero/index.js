import { Background, Container, Featured, SubTitle, Title } from "./styles/Hero";

export default function Hero({ children, ...restProps }) {
  return <Background {...restProps}>{children}</Background>;
}

Hero.Container = function HeroContainer({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}

Hero.Title = function HeroTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Hero.Featured = function HeroFeatured({ children, ...restProps }) {
  return <Featured {...restProps}>{children}</Featured>;
};

Hero.SubTitle = function HeroSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};
