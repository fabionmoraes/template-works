import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Spartan:wght@500;700&display=swap');
* {
    margin:0;
    padding:0;
    outline:0;
    box-sizing: border-box;
  }
  a {
  text-decoration: none;
  transition-duration: 0.5s;
}
  html, body, #root {
    min-height: 100%;
  }
  body {
    background: hsl(180, 52%, 96%);
    -webkit-font-smoothing: antialiased !important;
    font-family: 'Spartan', sans-serif;
    height: 100%;
    width: 100%;
  }
  button, input, textarea {
    font-family: 'Spartan', sans-serif;
  }
  button {
    cursor: pointer;
  }
`
