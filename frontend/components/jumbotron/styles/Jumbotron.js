import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Group = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
  margin: 0 10%;
`;

export const Title = styled.h1`
  font-family: "BebasNeue";
  text-align: center;
`;

export const Description = styled.p`
  text-align: center;
`;

export const Project = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 15px;
`;
