import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyles = createGlobalStyle`
${normalize}
html, body {
  font-family: Arial, "BebasNeue";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: block;
  color: #ffffff;
  height: 100%;
  overflow: auto;
  font-size: 16px;
  margin: 0;
  padding: 0;
  background-color: #301934;
  background-image: radial-gradient(#4f2956 1px, transparent 1px);
  background-position: 0 0, 25px 25px;
  background-size: 30px 30px;     
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
  font-display: swap;
}
`;
