import styled from "styled-components/";

export const Container = styled.div`
  bottom: 0;
`;

export const Content = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  padding: 10px 0;
  margin: 0 10%;
`;

export const Group = styled.div`
  justify-content: center;
  flex-grow: 2;

  @media (max-width: 1000px) {
    padding: 0;
  }
`;

export const TextGroup = styled.div`
  display: flex;
  flex-flow: row wrap;

  @media (max-width: 527px) {
    justify-content: center;
  }
`;

export const Links = styled.ul`
  display: flex;
  flex-direction: row;

  @media (max-width: 1000px) {
    margin: 0;
  }

  @media (max-width: 527px) {
    padding: 10px 5px 10px 5px;
  }
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
  padding: 5px;

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

// export const FocusWord = styled.h2`
//   display: inline;
//   padding-left: 10px;
//   vertical-align: middle;
//   font-size: 40px;
//   font-family: "BebasNeue";
//   color: #d11c64;
// `;

// export const Title = styled.span`
//   font-family: "BebasNeue";
//   color: white;
// `;

// export const Logo = styled.img`
//   vertical-align: middle;
//   width: 50px;
//   height: 50px;
// `;
