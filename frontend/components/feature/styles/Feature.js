import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  border-bottom: 8px;
  text-align: left;
`;

export const Title = styled.h1`
  font-family: "BebasNeue";
  color: white;
  max-width: 640px;
  font-size: 110px;
  font-weight: 200;
  margin: 190px 10% 0 10%;
  @media (max-width: 600px) {
    font-size: 35px;
  }
`;

export const FocusWord1 = styled.span`
  color: white;
  background-color: #d11c54;
  max-width: 640px;
  font-weight: 500;
  margin: auto;
  @media (max-width: 600px) {
    font-size: 35px;
  }
`;

export const FocusWord2 = styled.span`
  color: #d11c54;
  max-width: 640px;
  font-weight: 500;
  margin: auto;
  @media (max-width: 600px) {
    font-size: 35px;
  }
`;

export const SubTitle = styled.h2`
  color: white;
  font-size: 26px;
  font-weight: normal;
  max-width: 640px;
  margin: 50px 10% 0px 10%;
  @media (max-width: 600px) {
    font-size: 18px;
  }
`;

export const Button = styled.button`
  display: block;
  min-width: 150px;
  padding: 12px 0;
  margin: 80px 10% 500px 10%;
  font-family: inherit;
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  background-color: #e5195f;
  border: 0;
  border-radius: 35px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, .08);
  cursor: pointer;
  transition: all .25s cubic-bezier(.02, .01, .47, 1);

  &:hover {
    box-shadow: 0 15px 15px rgba(0, 0, 0, .16);
    transform: translate(0, -5px);
  }
`;