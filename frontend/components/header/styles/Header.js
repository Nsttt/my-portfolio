import styled from "styled-components";

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #301934;
  background-image: radial-gradient(#4f2956 1px, transparent 1px),
    radial-gradient(#4f2956 1px, transparent 1px);
  background-position: 0 0, 25px 25px;
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
`;

export const Logo = styled.h2`
  font-family: "BebasNeue";
  font-size: 26px;
  margin-right: 40px;
  cursor: pointer;
  transition: .05s ease-in;

  &:hover {
    border-bottom: solid #d11c54;
  }

  @media (min-width: 1449px) {
    font-size: 46px;
  }
`;

export const FocusWord = styled.span`
  color: #d11c54;
`;

export const TextLink = styled.a`
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

export const SocialIcon = styled.a`
  cursor: pointer;
  background-color: transparent;
  border: 0;
  margin: 10px;
  opacity: .50;
  transition: opacity .25s ease-in;

  img {
    width: 24px;
  }

  &:hover {
    opacity: .95;
  }
`;

