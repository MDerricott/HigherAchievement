import React from 'react';
import {ReactDOM , render }from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({

palette: {
    primary: { main: '#62BB46', contrastText: '#ffffff' },
    secondary: { main: '#000000', contrastText: '#ffffff' }
    
} ,
typography: {
    fontFamily: "itc-officina-sans-pro, sans-serif"}
});


  render (
    <MuiThemeProvider theme={theme}>
    <App />
   
    </MuiThemeProvider>,

document.getElementById('root'));
  



// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
