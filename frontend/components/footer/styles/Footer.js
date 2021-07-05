import styled from "styled-components/";

export const Container = styled.div`
  bottom: 0;
  display: flex;
  flex-flow: row wrap;
  padding: 10px 0;
  margin: 0 10%;

  @media (max-width: 1000px) {
    justify-content: center;
  }
`;

export const Group = styled.div`
  justify-content: center;

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
  padding: 0;

  @media (max-width: 1000px) {
    margin: 0;
  }

  @media (max-width: 527px) {
    padding: 10px 5px 10px 5px;
    flex-direction: column;
  }
`;

export const Bar = styled.hr`
  margin-top: 20px;
  margin-bottom: 20px;
  width: 100%;
  border-color: #d11c54;
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
