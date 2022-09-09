import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import theme from './components/MuiTheme/MuiTheme';
import { ThemeProvider } from '@mui/material';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
  </React.StrictMode>
);


