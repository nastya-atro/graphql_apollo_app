import React from 'react';
import ReactDOM from 'react-dom';
import AppMain from './App';
import { createGlobalStyle, ThemeProvider } from 'styled-components'

const Global = createGlobalStyle`
*{
  margin:0;
  padding: 0;
  box-sizing: border-box;
}
`

const theme = {
  color: {
    first: {
      dark: '#D8CD55',
      middle: '#E3DB7F',
      light: '#FFFABE'
    },
    second: {
      dark: '#925CD7',
      middle: '#AF86E2',
      light: '#DEC4FF'
    }
  },

  media: {
    phone: "(max-width: 425px)",
    tablet: "(max-width: 768px) and (min-width:425px)",
    computer: "(min-width: 768px)"
  }
}

ReactDOM.render(
  <ThemeProvider theme={theme} >
    <Global />
    <AppMain />
  </ThemeProvider>, document.getElementById('root')
);

