import React, { Component } from 'react';
import './App.css';
import Cashier from './components/cashier';
import AddProductForm from './pages/AddProductForm'
import Dashboard from './pages/dashboard'
import { Container } from "semantic-ui-react";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Dashboard/>
      
        {/* <Cashier/>
       */}
      </div>
    );
  }
}
export default App;