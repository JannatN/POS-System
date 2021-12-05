import React, { Component } from 'react';
import './App.css';
import Cashier from './components/cashier';
import AddProductForm from './pages/AddProductForm'
import Dashboard from './pages/dashboard'
import { Container } from "semantic-ui-react";
import Registration from './components/Registration';

class App extends Component {


  render() {
    return (
      <div className="App">
       <Registration/>

         {/* <Container style={{ margin: 20 }}> */}
        {/* <AddProductForm /> */}
     
        {/* <Dashboard/> */}
        {/* </Container> */}
      </div>
    );
  }
}
export default App;