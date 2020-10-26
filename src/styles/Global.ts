import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  *:root{
      font-size: 65.2%;
  }

  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
    font-size: 1.8rem;
  }  

  #__next,
  body,
  html{
    background: linear-gradient(180deg, #F6FAFD 0%, #FFFFFF 19.4%);
    width: 100%;
    height: 100vh;
  }
  a{
    text-decoration: none;
    color: #4B5D68;
  }


`;

export default GlobalStyle;
