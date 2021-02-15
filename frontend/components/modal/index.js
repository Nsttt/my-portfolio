import {
  Container,
  Title,
  Body,
  Image,
  TopImage,
  Button,
} from "./styles/Modal";

export default function Modal({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Modal.Title = function ModalTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Modal.Body = function ModalBody({ body, ...restProps }) {
  return <Body dangerouslySetInnerHTML={{ __html: body }} {...restProps} />;
};

Modal.TopImage = function ModalTitle({ children, ...restProps }) {
  return <TopImage {...restProps} />;
};

Modal.Image = function ModalImage({ children, ...restProps }) {
  return <Image {...restProps} />;
};
