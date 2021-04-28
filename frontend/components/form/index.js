import {
  Body,
  Button,
  Container,
  Input,
  SubTitle,
  Title,
  Success,
} from "./styles/Form";

export default function Form({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Form.Title = function FormTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Form.SubTitle = function FormSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

Form.Input = function FormInput({ ...restProps }) {
  return <Input {...restProps} />;
};

Form.Body = function FormBody({ ...restProps }) {
  return <Body {...restProps} />;
};

Form.Button = function FormButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};

Form.Success = function FormSuccess({ children, ...restProps }) {
  return <Success {...restProps}>{children}</Success>;
};
