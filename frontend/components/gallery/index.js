import Link from "next/link";
import {
  Background,
  Card,
  Container,
  Group,
  Title,
  Image,
  Button,
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

Gallery.Card = function GalleryCard({ imgSrc, href, as, ...restProps }) {
  return (
    <Link href={`/project/[id]?id=${href}`} as={`/project/${as}`}>
      <Card {...restProps}>
        <Image src={imgSrc} />
      </Card>
    </Link>
  );
};

Gallery.Title = function GalleryTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Gallery.Button = function GalleryButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};