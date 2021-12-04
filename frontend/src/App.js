import React, { Component } from 'react';
import './App.css';
import AddProductForm from './pages/AddProductForm'
import Dashboard from './pages/dashboard'
import { Container } from "semantic-ui-react";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Dashboard/>
        
         {/* <Container style={{ margin: 20 }}>
            <AddProductForm />
        </Container> */}
      </div>
    );
  }
}
export default App;