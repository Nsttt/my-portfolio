import styled from "styled-components";

export const Background = styled.div`
  display: flex;
  overflow: hidden;
  background-color: #432349;
  background-image: radial-gradient(#783f83 1px, transparent 1px),
    radial-gradient(#783f83 1px, transparent 1px);
  background-position: 0 0, 25px 22px;
  background-size: 50px 50px;
  min-height: 550px;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  flex-direction: column;
  margin: 0 10%;
`;

export const Featured = styled.h3`
  font-family: "BebasNeue";
  font-size: 25px;
  text-align: left;
  color: #ed2e61;
  letter-spacing: 0.3rem;
  margin-bottom: 1px;

  @media (max-width: 1000px) {
    text-align: center;
  }
`;

export const Title = styled.h2`
  font-family: "BebasNeue";
  font-size: 60px;
  letter-spacing: 0.2rem;
  text-align: left;
  margin: 0;
  cursor: pointer;
  transition: 1s all;

  &:hover {
    color: #ed2e61;
  }

  @media (max-width: 1000px) {
    text-align: center;
  }
`;

export const Description = styled.p`
  font-size: 20px;
  text-align: left;
  max-width: 600px;

  @media (max-width: 1000px) {
    text-align: center;
  }
`;

export const Image = styled.img`
  position: relative;
  overflow: hidden;
  float: right;
  cursor: pointer;
  transform: translateX(10em);
  max-height: 600px;
  width: 900px;
  height: 450px;
  z-index: 100;
  border-radius: 20px;
  margin-top: 60px;
  margin-bottom: 60px;
  transition: all 0.3s;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 1200px) {
    display: none;
  }
`;
