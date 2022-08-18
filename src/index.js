import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from '@material-ui/styles';
import { theme } from './theme';
import Navbar from './components/Navbar';
import { Grid ,Box} from '@material-ui/core';
import Leftbar from './components/Leftbar';
import Homep from './components/Homep';
import Homepost from './components/Homepost'
import { PinDropSharp } from '@material-ui/icons';
import Apagination from './components/pagination';
import { BrowserRouter,Router,Route,Routes  } from 'react-router-dom'
import Homer from './Homer';
import Admin from './components/Admin';



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route exact  path="/" element={<Homer />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="invoices" element={<Homer />} />
    </Routes>
      
    
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
