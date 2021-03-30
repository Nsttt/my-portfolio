import Link from "next/link";
import {
  Background,
  Card,
  Container,
  Group,
  Title,
  Image,
  Button,
  InnerTitle,
  InnerDesc,
} from "./styles/Gallery";

export default function Gallery({ children, ...restProps }) {
  return <Background {...restProps}>{children}</Background>;
}

Gallery.Container = function GalleryContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Gallery.Group = function GalleryGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};

Gallery.Card = function GalleryCard({
  imgSrc,
  href,
  as,
  title,
  subtitle,
  ...restProps
}) {
  return (
    <Link href={`/project/[id]?id=${href}`} as={`/project/${as}`}>
      <Card {...restProps}>
        <InnerTitle>
          {title}
          <br />
          <InnerDesc>{subtitle}</InnerDesc>
        </InnerTitle>
        <Image alt="Gallery Image" src={imgSrc} />
      </Card>
    </Link>
  );
};

Gallery.Title = function GalleryTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Gallery.Button = function GalleryButton({ children, href, ...restProps }) {
  return (
    <Link href={href}>
      <Button {...restProps}>{children}</Button>
    </Link>
  );
};
