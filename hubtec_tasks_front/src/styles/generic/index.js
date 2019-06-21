import { createGlobalStyle } from "styled-components";

const Reset = createGlobalStyle`
  *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }    
  
  html, body, #root, .App {
      height: 100%
    }
`;

export default Reset;
