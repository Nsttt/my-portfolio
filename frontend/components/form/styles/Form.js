import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 10%;
`;

export const Title = styled.h1`
  font-family: "BebasNeue";
  letter-spacing: 2px;
  font-size: 42px;
  color: #ed2e61;
  margin-bottom: 0;
`;

export const SubTitle = styled.h2`
  font-size: 26px;
`;

export const Input = styled.input`
  display: block;
  background-color: #432349;
  margin-bottom: 15px;
  color: white;
  padding: 7px 0;
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
`;

export const Body = styled.textarea`
  display: block;
  resize: none;
  background-color: #432349;
  margin-bottom: 15px;
  color: white;
  padding: 7px 0;
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
`;

export const Button = styled.button`
  display: block;
  width: 200px;
  padding: 12px 0;
  font-family: inherit;
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  background-color: #e5195f;
  border: 0;
  border-radius: 35px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);

  &:hover {
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
    transform: translate(0, -5px);
  }
`;

export const Message = styled.div`
  display: none;
`;