import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin: 0 56px;
  height: 64px;
  padding: 18px 0;
  justify-content: space-between;
  alight-items: center;
  a {
    display: flex;
  }
  @media (max-width: 1000px) {
    margin: 0 30px;
  }
`;

export const Logo = styled.h2`
  font-size: 32px;
  margin-right: 40px;
  @media (min-width 1440px) {
    font-size: 26px;
  }
`;

export const TextLink = styled.p`
  color: white;
  font-size: 22px;
  line-height: normal;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
`;

export const Group = styled.div`
  display: flex;
  align-items: center;
`;
