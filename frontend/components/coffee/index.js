import { Container, Image, Text } from "./styles/Coffee";

export default function Coffee({ text, ...restProps }) {
  return (
    <Container
      href="https://www.buymeacoffee.com/nstlopez"
      target="_blank"
      {...restProps}
    >
      <Image
        src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg"
        alt="Buy me a coffee"
      />
      <Text>{text}</Text>
    </Container>
  );
}

Coffee.Container = function CoffeeContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Coffee.Image = function CoffeeImage({ ...restProps }) {
  return (
    <Image
      src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg"
      alt="Buy me a coffee"
      {...restProps}
    />
  );
};

Coffee.Text = function CoffeeText({ text, ...restProps }) {
  return <Text {...restProps}>{text}</Text>;
};
