import styled from "styled-components/";

export const Background = styled.div`
  padding: 64px 0;
  background-color: #301934;
  background-image: radial-gradient(#4f2956 1px, transparent 1px),
    radial-gradient(#4f2956 1px, transparent 1px);
  background-position: 0 0, 25px 25px;
  background-size: 50px 50px;
`;

export const Container = styled.div`
  margin: 0 10%;

  @media (max-width: 527px) {
    display: flex;
    flex-direction: column;
  }
`;

export const TextLink = styled.a`
  margin-right: 20px;
  color: white;
  font-size: 17px;
`;

export const Button = styled.a`
  display: block;
  float: right;
  text-align: center;
  width: 160px;
  padding: 12px 0;
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  background-color: #e5195f;
  border-radius: 35px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);

  @media (max-width: 600px) {
    display: none;
  }
`;
