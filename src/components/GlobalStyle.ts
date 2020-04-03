import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  
  @import url("https://use.fontawesome.com/releases/v5.0.13/css/all.css");
  @import url("https://cdnjs.cloudflare.com/ajax/libs/antd/3.10.7/antd.min.css");
  @import url("https://fonts.googleapis.com/css?family=Nanum+Gothic|Nanum+Myeongjo|Nanum+Pen+Script");

  * {
      box-sizing:border-box;
  }
  body {
      font-family: "Nanum Gothic", sans-serif;
      font-size: 12px;
      background-color: #14181C;
      color: white;
      padding-top: 50px;
  }

  a {
    color: rgba(255,255,255,0.5);
    text-decoration: none;
    &:hover {
      color: white;
    }
  }
`;

export default GlobalStyle;
