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
  font-size: 60px;
`;

export const Description = styled.p`
  text-align: center;
  font-size: 22px;
`;

export const Project = styled.div`
  display: flex;
  justify-content: center;
  background-color: black;
  border-radius: 15px;
  align-items: center;
`;

export const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 15px;
  cursor: pointer;
  transition: all 0.3s;

  :hover {
    opacity: 0.1;
  }
`;

export const InnerTitle = styled.h2`
  display: none;
  position: absolute;
  text-align: center;
  font-size: 30px;
  transition: ease-in 2s;

  ${Project}:hover & {
    display: block;
  }
`;

export const InnerDesc = styled.span`
  font-size: 16px;
`;
