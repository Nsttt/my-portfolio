import styled from "styled-components/";

export const Background = styled.div`
  padding: 64px 0;
  background-color: #301934;
  background-image: radial-gradient(#4f2956 1px, transparent 1px),
    radial-gradient(#4f2956 1px, transparent 1px);
  background-position: 0 0, 25px 25px;
  background-size: 50px 50px;
`;

export const Container = styled.div`
  margin: 0 10%;

  @media (max-width: 527px) {
  }
`;

export const Group = styled.div``;

export const Links = styled.div`
  display: flex;
  flex-direction: row;
`;

export const FocusWord = styled.h2`
  display: inline;
  font-size: 50px;
  font-family: "BebasNeue";
  color: #d11c64;
`;

export const Title = styled.span`
  font-family: "BebasNeue";
  color: white;
`;

export const Copyright = styled.p`
  text-align: center;
`;

export const Bar = styled.hr`
  width: 100%;
  border-color: #d11c54;
`;

export const Logo = styled.img`
  width: 80px;
  height: 80px;
`;

export const Newsletter = styled.div``;

export const Contact = styled.a``;

export const Project = styled.li`
  padding-left: 10px;
  color: white;
  list-style-type: none;
`;

export const TextLink = styled.li`
  list-style-type: none;
  margin-right: 20px;
  color: white;
  font-size: 32px;
  transition: all 0.5s;
  cursor: pointer;

  &:hover {
    color: #d11c54;
  }
`;
