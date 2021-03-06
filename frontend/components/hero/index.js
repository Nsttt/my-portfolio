import Link from "next/link";
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

Hero.Title = function HeroTitle({ href, as, children, ...restProps }) {
  return (
    <Link href={`/project/[id]?id=${href}`} as={`/project/${as}`}>
      <Title {...restProps}>{children}</Title>
    </Link>
  );
};

Hero.Featured = function HeroFeatured({ children, ...restProps }) {
  return <Featured {...restProps}>{children}</Featured>;
};

Hero.Description = function HeroDescription({ children, ...restProps }) {
  return <Description {...restProps}>{children}</Description>;
};

Hero.Image = function HeroImage({ src, href, as, ...restProps }) {
  return (
    <Link href={`/project/[id]?id=${href}`} as={`/project/${as}`}>
      <Image src={src} {...restProps} />
    </Link>
  );
};
