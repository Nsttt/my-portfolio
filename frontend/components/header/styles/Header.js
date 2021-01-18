import styled from "styled-components";

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #301934;
  background-image:
    radial-gradient(#4f2956 1px, transparent 1px),
    radial-gradient(#4f2956 1px, transparent 1px);
  background-position: 0 0, 25px 25px;
  background-size: 50px 50px;
`;

export const Container = styled.div`
  display: flex;
  margin: 0 56px;
  height: 64px;
  padding: 18px 0;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1000px) {
    margin: 0 30px;
  }
`;
//TODO: Make logo display an image instead.
export const Logo = styled.h2`
  font-size: 32px;
  margin-right: 40px;
  cursor: pointer;
  @media (min-width 1440px) {
    font-size: 26px;
  }
`;

export const TextLink = styled.p`
  font-size: 22px;
  line-height: normal;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
  cursor: pointer;
  margin: 10px;
`;

export const Group = styled.div`
  display: flex;
  align-items: center;
`;
