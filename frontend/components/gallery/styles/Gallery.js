import styled from "styled-components";

export const Background = styled.div`
  display: flex;
  justify-content: center;
  background-color: #ad6db9;
  background-image: radial-gradient(#d7b7dc 1px, transparent 1px),
    radial-gradient(#d7b7dc 1px, transparent 1px);
  background-position: 0 0, 25px 22px;
  background-size: 50px 50px;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0 10%;
  height: 570px;
`;

export const Group = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Card = styled.div`
  margin: 10px;
  height: 400px;
  width: 450px;
  transition: 0.4s ease-out;
  box-shadow: 0px 7px 10px rgba(black, 0.5);
  
  &:hover {
    transform: translateY(20px);
  }
`;

export const Title = styled.h2`
  font-family: "BebasNeue";
  font-size: 40px;
`;

export const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 25px;
`;
