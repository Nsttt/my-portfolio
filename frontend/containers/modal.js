import { Modal } from "../components";

export default function ModalContainer({ imageUrl, title, body }) {
  return (
    <Modal>
      <Modal.TopImage src={process.env.NEXT_PUBLIC_STRAPI_HOST + imageUrl} />
      <Modal.Title>{title}</Modal.Title>
      <Modal.Body body={body} />
    </Modal>
  );
}
