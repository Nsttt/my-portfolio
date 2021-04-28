import styled from "styled-components";

export const Background = styled.div`
  display: flex;
  min-height: 88.7vh;
  flex-direction: column;
  background-color: #301934;
  background-image: radial-gradient(#4f2956 1px, transparent 1px),
    radial-gradient(#4f2956 1px, transparent 1px);
  background-position: 0 0, 25px 24px;
  background-size: 50px 50px;
`;

export const Container = styled.div`
  display: flex;
  margin: 0 10%;
  height: 64px;
  padding: 18px 0;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1000px) {
    margin: 0 30px;
  }

  @media (max-width: 527px) {
    flex-direction: column;
  }
`;

export const Group = styled.div`
  display: flex;
  align-items: center;
`;

export const Logo = styled.h2`
  font-family: "BebasNeue";
  font-size: 46px;
  margin-right: 40px;
  cursor: pointer;

  @media (max-width: 1000px) {
    font-size: 26px;
  }

  @media (max-width: 527px) {
    text-align: center;
    margin: 0;
  }
`;

export const FocusWord = styled.span`
  color: #d11c54;
  ${Logo}:hover & {
    transition: 0.5s ease-in;
    color: white;
  }
`;

export const TextLink = styled.a`
  font-size: 24px;
  line-height: normal;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
  cursor: pointer;
  margin: 10px;
  transition: all 0.5s;

  :hover {
    color: white;
    background-color: #d11c54;
  }

  @media (max-width: 1000px) {
    font-size: 16px;
  }
`;

export const SocialIcon = styled.a`
  cursor: pointer;
  background-color: transparent;
  border: 0;
  margin: 10px;
  opacity: 0.5;
  transition: opacity 0.25s ease-in;

  img {
    width: 24px;
    height: 24px;

    @media (max-width: 1000px) {
      width: 18px;
      height: 18px;
    }
  }

  &:hover {
    opacity: 0.95;
  }

  @media (max-width: 527px) {
    display: none;
  }
`;
