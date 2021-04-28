import {
  Container,
  SubTitle,
  Title,
  Input,
  Button,
  SmallText,
  SuccessText,
} from "./styles/Newsletter";

export default function Newsletter({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Newsletter.Title = function NewsletterTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Newsletter.SubTitle = function NewsletterSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

Newsletter.SmallText = function NewsletterSmallText({
  children,
  ...restProps
}) {
  return <SmallText {...restProps}>{children}</SmallText>;
};

Newsletter.Input = function NewsletterInput({ children, ...restProps }) {
  return <Input {...restProps}>{children}</Input>;
};

Newsletter.Button = function NewsletterButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};

Newsletter.Success = function NewsletterSuccess({ children, ...restProps }) {
  return <SuccessText {...restProps}>{children}</SuccessText>;
};
