import styled from "styled-components";

export const Container = styled.div`
  /* display: flex; */
  /* flex-direction: column; */
  border-bottom: 8px;
  text-align: left;
`;

export const Title = styled.h1`
  color: white;
  max-width: 640px;
  font-size: 70px;
  font-weight: 500;
  margin: 190px ;
  @media (max-width: 600px) {
    font-size: 35px;
  }
`;

export const FocusWord1 = styled.span`
  color: white;
  background-color: #D11C54;
  max-width: 640px;
  font-weight: 500;
  margin: auto;
  @media (max-width: 600px) {
    font-size: 35px;
  }
`

export const FocusWord2 = styled.span`
  color: #D11C54;
  max-width: 640px;
  font-weight: 500;
  margin: auto;
  @media (max-width: 600px) {
    font-size: 35px;
  }
`

export const SubTitle = styled.h2`
  color: white;
  font-size: 26px;
  font-weight: normal;
  margin: 16px auto;
  @media (max-width: 600px) {
    font-size: 18px;
  }
`;
