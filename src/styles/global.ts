import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`

*{
  margin:0;
  padding:0px;
  box-sizing:border-box;
}

html {
  font-size: 62.5%;
}

html,body, #__next {
  height: 100%
}

body {
  font-family: 'Inter';
}

`

export default GlobalStyles
