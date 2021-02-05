import { Background, Container } from "./styles/Cards";

export default function Cards({ children, ...restProps }) {
  return <Background {...restProps}>{children}</Background>;
}

Cards.Container = function CardsContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};
