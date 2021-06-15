import styled from "styled-components";

export const Container = styled.div`
  background-color: #432349;
  padding: 1px 15px 15px;
  margin: 30px 0 0;
  width: 350px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
`;

export const Title = styled.h1`
  font-family: "BebasNeue";
  letter-spacing: 2px;
  font-size: 42px;
  color: #ed2e61;
  margin-bottom: 0;
`;

export const SubTitle = styled.h2`
  font-size: 16px;
`;

export const SmallText = styled.h3`
  font-size: 14px;
`;

export const SuccessText = styled.h3`
  color: white;
  font-size: 26px;
  padding-top: 25px;
`;

export const Input = styled.input`
  background-color: #432349;
  margin-bottom: 15px;
  color: white;
  padding: 7px 0;
  width: 97%;
  font-family: inherit;
  font-size: 14px;
  border-top: 0;
  border-right: 0;
  border-bottom: 1px solid #ddd;
  border-left: 0;
  transition: border-bottom-color 0.25s ease-in;

  &:focus {
    border-bottom-color: #e5195f;
    outline: 0;
  }
`;

export const Button = styled.button`
  display: block;
  min-width: 100px;
  padding: 12px 0;
  font-family: inherit;
  font-size: 16px;
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

export const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 10%;
`;

export const PageTitle = styled.h1`
  font-family: "BebasNeue";
  letter-spacing: 2px;
  font-size: 42px;
  margin-bottom: 0;
`;

export const PageSubtitle = styled.p`
  font-size: 20px;
`;

export const PageInput = styled.input`
  background-color: #432349;
  margin-bottom: 15px;
  color: white;
  padding: 7px 0;
  width: 62vh;
  font-family: inherit;
  font-size: 14px;
  border-top: 0;
  border-right: 0;
  border-bottom: 1px solid #ddd;
  border-left: 0;
  transition: border-bottom-color 0.25s ease-in;

  &:focus {
    border-bottom-color: #e5195f;
    outline: 0;
  }

  @media (max-width: 1000px) {
    width: 37vh;
  }
`;
