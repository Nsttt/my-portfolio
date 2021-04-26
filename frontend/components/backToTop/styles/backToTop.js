import styled from "styled-components";

export const Container = styled.div`
  display: inline-block;
  position: fixed;
  cursor: pointer;
  bottom: 25px;
  right: 25px;
  z-index: 1000;
  width: 65px;
  height: 65px;
  border-radius: 50%;
  transition: ease 0.5s;
  background-color: #d11c54;

  :hover {
    background-color: #93143c;
  }
`;

export const Icon = styled.img`
  display: block;
  filter: invert();
  margin-left: auto;
  margin-right: auto;
  width: 90%;
  fill: white;
`;
