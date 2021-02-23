import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

// eslint-disable-next-line import/prefer-default-export
export const GlobalStyles = createGlobalStyle`
${normalize}
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

a {
  text-decoration: none;
  color: #ed2e61;
  :hover {
    color: white;
  }
}

@font-face {
  font-family: "BebasNeue";
  src: url("/fonts/BebasNeue.ttf");
}
`;
