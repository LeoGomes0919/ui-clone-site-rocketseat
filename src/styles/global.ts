import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #121214;
    color: #a8a8b3;
  }

  body, input, button {
    font-family: Helvetica, Arial, sans-serif;
    font-weight: 400;
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyles;
