import styled from "styled-components";

export const Background = styled.div`
  display: flex;
  justify-content: center;
  background-color: #ad6db9;
  background-image: radial-gradient(#d7b7dc 1px, transparent 1px);
  background-position: 0 0, 25px 25px;
  background-size: 30px 30px;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0 10%;
  height: auto;
`;

export const Group = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  border-radius: 25px;
  height: 400px;
  transition: 0.4s all;
  background-color: black;

  &:hover {
    transform: translateY(-10px);
  }
`;

export const InnerTitle = styled.h2`
  display: none;
  position: absolute;
  text-align: center;
  font-size: 30px;
  transition: ease-in 2s;

  ${Card}:hover & {
    display: block;
  }
`;

export const InnerDesc = styled.span`
  font-size: 16px;
`;

export const Title = styled.h1`
  text-align: center;
  color: white;
  font-weight: 500;
  font-family: "BebasNeue";
  font-size: 52px;
  margin: 0.5em 10% 0.3em 10%;
`;

export const Image = styled.img`
  cursor: pointer;
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 25px;

  &:hover {
    opacity: 0.1;
  }
`;

export const Button = styled.a`
  display: block;
  text-align: center;
  min-width: 160px;
  padding: 12px 0;
  margin: 2em 10% 2em 10%;
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

  @media (max-width: 600px) {
    display: none;
  }
`;
