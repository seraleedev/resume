import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: "SUIT-Regular";
  src: url("https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_suit@1.0/SUIT-Regular.woff2")
    format("woff2");
  font-weight: normal;
  font-style: normal;
}

html,
*,
*:before,
*:after {
  font-family: "SUIT-Regular", sans-serif;
  box-sizing: border-box;
  ::-webkit-scrollbar {
    display: none;
  }
  font-size: 10px;
  letter-spacing:-1px;
}

body {
  margin: 0;
  padding: 0;
  color: #333333;
  overscroll-behavior-y: none;
  ::selection{
    color: #ffffff;
    background-color: #62DE49;
  }
}
`;
