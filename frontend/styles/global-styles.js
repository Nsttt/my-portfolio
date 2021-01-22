import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
html, body {
  font-family: Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing; grayscale;
    background-color: white;
    color: #ffffff;
    font-size: 16px;
    margin: 0;
}

@font-face {
  font-family: "BebasNeue";
  src: url("../public/fonts/BebasNeue.ttf");
  font-style: normal;
  font-weight: 400;
}
`;
