import {
  Background,
  Container,
  Featured,
  Description,
  Title,
  Image,
} from "./styles/Hero";

export default function Hero({ children, ...restProps }) {
  return <Background {...restProps}>{children}</Background>;
}

Hero.Container = function HeroContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Hero.Title = function HeroTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Hero.Featured = function HeroFeatured({ children, ...restProps }) {
  return <Featured {...restProps}>{children}</Featured>;
};

Hero.Description = function HeroDescription({ children, ...restProps }) {
  return <Description {...restProps}>{children}</Description>;
};

Hero.Image = function HeroImage({ src, ...restProps }) {
  return <Image src={src} {...restProps} />;
};
