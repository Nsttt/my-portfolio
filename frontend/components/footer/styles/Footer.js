import styled from "styled-components/";

export const Container = styled.div`
  width: 100%;
  bottom: 0;
`;

export const Content = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  padding: 20px 0;
  margin: 0 10%;
`;

export const Group = styled.div`
  justify-content: center;
  padding-right: 50px;
  padding-top: 30px;
  flex-grow: 2;

  @media (max-width: 1000px) {
    padding: 0;
  }
`;

export const TextGroup = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;

  @media (max-width: 1000px) {
    justify-content: center;
  }
`;

export const Links = styled.ul`
  @media (max-width: 1000px) {
    margin: 0;
    padding-right: 15px;
    padding-left: 15px;
  }
`;

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

export const Contact = styled.a`
  font-family: "BebasNeue";
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

  @media (max-width: 1111px) {
    display: none;
  }
`;

export const TextLink = styled.a`
  color: white;
  font-size: 22px;
  transition: all 0.5s;

  :hover {
    color: #d11c54;
  }
`;

export const ListItem = styled.li`
  list-style-type: none;
  cursor: pointer;

  @media (max-width: 1111px) {
    text-align: center;
  }
`;
