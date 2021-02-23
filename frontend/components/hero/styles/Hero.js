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
`;

export const Title = styled.h2`
  font-family: "BebasNeue";
  font-size: 60px;
  text-align: left;
  margin: 0;
  cursor: pointer;
  transition: 1s all;

  &:hover {
    color: #ed2e61;
  }
`;

export const Description = styled.p`
  font-size: 18px;
  text-align: left;
  max-width: 600px;
`;

export const Image = styled.img`
  position: relative;
  overflow: hidden;
  float: right;
  transform: translateX(10em);
  max-height: 600px;
  z-index: 100;
  border-radius: 20px;
  margin-top: 60px;
  margin-bottom: 60px;
`;
