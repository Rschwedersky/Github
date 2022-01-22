import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 10px;
    padding: 0;
  }
  html {
    font-size: 16px;
    color: #333;
    font-family: Arial, Helvetica, sans-serif;
  }
  
  body {
    background-color: #fefefc;
  }
`;