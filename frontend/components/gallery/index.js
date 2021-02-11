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

Gallery.Card = function GalleryCard({ src, ...restProps }) {
  return (
    <Card {...restProps}>
      <Image src="/featured.png" />
    </Card>
  );
};

Gallery.Title = function GalleryTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Gallery.Button = function GalleryButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};
