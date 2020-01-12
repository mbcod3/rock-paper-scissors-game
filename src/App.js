import React from 'react';
import Page from './Page';
import './App.css';
import { createMuiTheme, ThemeProvider, responsiveFontSizes } from '@material-ui/core/styles';

let theme = createMuiTheme({
  typography: {
    fontFamily: 'Barlow Semi Condensed',
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': ['Barlow Semi Condensed'],
      },
    },
  },
});
theme = responsiveFontSizes(theme)

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
      <Page />
      </div>
    </ThemeProvider>
  );
}

export default App;
