import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import './index.css';
import App from './App';
import Dashboard from './pages/dashboard'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Cashier from './components/cashier';
import Stock from './pages/stock';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
    <Route exact path="/" element={<App />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="cashier" element={<Cashier />} />
      <Route path="stock" element={<Stock/>} />

    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

