import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 60vh;
  align-items: center;
  flex-direction: column;
  margin: 0 10%;

  @media (max-width: 527px) {
    height: 100%;
  }
`;

export const Title = styled.h1`
  font-family: "BebasNeue";
  letter-spacing: 2px;
  font-size: 60px;
  color: #ed2e61;
  margin-bottom: 0;
`;

export const SubTitle = styled.h2`
  max-width: 62vh;
  font-size: 26px;
  text-align: center;
`;

export const Input = styled.input`
  display: block;
  background-color: #432349;
  margin-bottom: 15px;
  border-radius: 5px;
  color: white;
  padding: 7px 0 7px 5px;
  width: 62vh;
  font-family: inherit;
  font-size: 20px;
  border-top: 0;
  border-right: 0;
  border-bottom: 1px solid #ddd;
  border-left: 0;
  transition: border-bottom-color 0.25s ease-in;

  &:focus {
    border-bottom-color: #e5195f;
    outline: 0;
  }

  @media (max-width: 690px) {
    width: 37vh;
  }
`;

export const Body = styled.textarea`
  display: block;
  resize: none;
  border-radius: 5px;
  background-color: #432349;
  margin-bottom: 15px;
  color: white;
  padding: 7px 0 0 5px;
  width: 62vh;
  height: 150px;
  font-family: inherit;
  font-size: 20px;
  border-top: 0;
  border-right: 0;
  border-bottom: 1px solid #ddd;
  border-left: 0;
  transition: border-bottom-color 0.25s ease-in;

  &:focus {
    border-bottom-color: #e5195f;
    outline: 0;
  }

  @media (max-width: 690px) {
    width: 37vh;
  }
`;

export const Button = styled.button`
  display: block;
  width: 120px;
  padding: 12px 0;
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

export const Success = styled.h3`
  font-size: 24px;
`;
