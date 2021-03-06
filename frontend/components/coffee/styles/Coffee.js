import styled from "styled-components";

export const Container = styled.a`
  display: inline-block;
  color: #ffffff;
  background-color: #ff813f;
  border-radius: 5px;
  border: 1px solid transparent;
  padding: 0.7rem 1rem 0.7rem 1rem;
  margin: 0 20px 30px 0;
  letter-spacing: 0.6px;
  transition: 0.3s all linear;
  font-family: Arial;

  &:hover,
  &:active,
  &:focus {
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
    transform: translate(0, -5px);
  }
`;

export const Image = styled.img`
  height: 29px;
  width: 30px;
  box-shadow: none;
  border: none;
  vertical-align: middle;
`;

export const Text = styled.span`
  margin-left: 15px;
  font-size: 18px;
  vertical-align: middle;
`;
