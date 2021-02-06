import styled from "styled-components/";

export const Background = styled.div`
  display: flex;
  height: 50px;
  background-color: #301934;
  background-image: radial-gradient(#4f2956 1px, transparent 1px),
    radial-gradient(#4f2956 1px, transparent 1px);
  background-position: 0 0, 25px 25px;
  background-size: 50px 50px;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 0 10%;
`;

export const TextLink = styled.a`
  margin-right: 20px;
  color: white;
  font-size: 17px;
  text-decoration: none;
`;
