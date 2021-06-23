import styled from "styled-components";

export const Container = styled.div`
  height: 59vh;
  margin: 0 10%;

  @media (max-width: 527px) {
    height: 100%;
  }
`;

export const Title = styled.h1`
  font-family: "BebasNeue";
  color: #d11c54;
  letter-spacing: 3px;
  font-size: 60px;

  @media (max-width: 527px) {
    text-align: center;
  }
`;

export const SubTitle = styled.h2``;

export const Body = styled.div`
  box-sizing: border-box;
  font-size: 20px;
`;

export const Labels = styled.div``;

export const Label = styled.img`
  vertical-align: middle;
  margin-right: 10px;
  margin-bottom: 10px;
  height: 25px;
`;

export const Image = styled.img`
  float: right;
  border-radius: 15px;
  width: 20%;
  height: auto;
  margin-left: 10px;

  @media (max-width: 527px) {
    float: none;
    margin: 0;
    width: 100%;
  }
`;
