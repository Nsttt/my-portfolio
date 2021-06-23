import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 60rem;

  @media (max-width: 527px) {
    height: 45rem;
    justify-content: center;
  }
`;

export const Title = styled.h1`
  font-family: "BebasNeue";
  color: white;
  font-size: 110px;
  font-weight: 200;
  text-align: center;
  margin: 190px 10% 0 10%;

  @media (max-width: 527px) {
    font-size: 70px;
    margin: 0 10% 0 10%;
  }
`;

export const FocusWord1 = styled.span`
  color: white;
  padding: 0 10px 0 10px;
  background-color: #d11c54;
  max-width: 640px;
  font-weight: 500;
  margin: auto;
  @media (max-width: 527px) {
    font-size: 70px;
  }
`;

export const FocusWord2 = styled.span`
  color: #d11c54;
  max-width: 640px;
  font-weight: 500;
  margin: auto;
  @media (max-width: 527px) {
    font-size: 70px;
  }
`;

export const SubTitle = styled.h2`
  color: white;
  font-size: 26px;
  text-align: center;
  font-weight: normal;
  max-width: 640px;
  margin: 50px 10% 0px 10%;

  @media (max-width: 527px) {
    margin: 10px 10% 0px 10%;
    text-align: center;
    font-size: 22px;
  }
`;

export const Button = styled.a`
  display: block;
  text-align: center;
  min-width: 160px;
  padding: 12px 0;
  margin: 80px 10% 5em 10%;
  font-family: inherit;
  font-size: 18px;
  font-weight: 700;
  color: #fff;
  background-color: #e5195f;
  border: 0;
  border-radius: 5px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);

  &:hover {
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
    transform: translate(0, -5px);
  }
`;

export const NotFound = styled.div`
  align-items: center;
  text-align: center;
  height: 100vh;
`;
