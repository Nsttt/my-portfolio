import styled from "styled-components/";

export const Background = styled.div`
  padding: 20px 0;
  background-color: #301934;
  background-image: radial-gradient(#4f2956 1px, transparent 1px),
    radial-gradient(#4f2956 1px, transparent 1px);
  background-position: 0 0, 25px 24px;
  background-size: 50px 50px;
`;

export const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  margin: 0 10%;

  @media (max-width: 527px) {
  }
`;

export const Group = styled.div`
  justify-content: center;
  padding-right: 50px;
  padding-top: 30px;
  flex-grow: 2;
`;

export const TextGroup = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
`;

export const Links = styled.ul``;

export const FocusWord = styled.h2`
  display: inline;
  padding-left: 10px;
  vertical-align: middle;
  font-size: 40px;
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
  margin-top: 20px;
  margin-bottom: 20px;
  width: 100%;
  border-color: #d11c54;
`;

export const Logo = styled.img`
  vertical-align: middle;
  width: 50px;
  height: 50px;
`;

export const Newsletter = styled.div``;

export const Contact = styled.a`
  align-self: center;
  padding: 7px;
  cursor: pointer;
  color: white;
  font-size: 40px;
  border-radius: 5px;
  border: solid;
  border-color: #d11c54;
  transition: all 0.5s;

  :hover {
    background-color: #d11c54;
  }
`;

export const Project = styled.li`
  padding-left: 10px;
  color: white;
  list-style-type: none;
`;

export const TextLink = styled.a`
  color: white;
  font-size: 24px;
  transition: all 0.5s;

  :hover {
    color: #d11c54;
  }
`;

export const ListItem = styled.li`
  list-style-type: none;
  cursor: pointer;
`;
