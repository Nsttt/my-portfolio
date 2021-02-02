import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
html, body {
  font-family: Arial, "BebasNeue";
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #000000;
    color: #ffffff;
    font-size: 16px;
    margin: 0;
    padding: 0;
}

@font-face {
  font-family: "BebasNeue";
  src: url("/fonts/BebasNeue.ttf");
}
`;
