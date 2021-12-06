import React, { Component } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import './components/Registration.css';

import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './login.css';
import cashierLogo from './assets/cashier.png';
import api from "./api";
import { Navigate } from 'react-router-dom'
const theme = createTheme();
class App extends Component {


  
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      toDashboard: false,
      setToDashboard: false
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }
  handleLogin = async (event) => {
    const {
      username,
      password,
    } = this.state;

    const payload = {
      username,
      password,
    };
    event.preventDefault()
    await api
      .logIn(payload)
      .then((res) => {
        this.setState({
          toDashboard: true,
          username: "",
          password: "",
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    const state = this.state;
    if (state.toDashboard === true) {
      return <Navigate to='/dashboard' />
    }

    
    return (
      <div className="App">
        <ThemeProvider theme={theme}>
          <Grid container component="main" sx={{ height: '100vh' }}>
            <CssBaseline />
            <Grid
              item
              xs={false}
              sm={4}
              md={7}
              sx={{
                backgroundImage: `url(${cashierLogo})`,
                backgroundColor: (t) =>
                  t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
              <Box
                sx={{
                  my: 8,
                  mx: 4,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <h1 className="a" >
                  Sign in
                </h1>
                <Box className="orderDetails" component="form" noValidate sx={{ mt: 1 }}>
                  <TextField
                    onChange={this.handleInputChange}
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Username"
                    name="username"
                    autoComplete="email"
                    value={state.username}
                    autoFocus
                  />
                  <TextField
                    onChange={this.handleInputChange}
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    value={state.password}
                    autoComplete="current-password"
                  />
                  <Box sx={{ minWidth: 120 }}></Box>
                  <br></br>
                  <div > 
                  
                  
                
              <button  className="signin" type="submit"  onClick={this.handleLogin}>
Login              
              </button>
             
           </div>
       
                  <Grid container>
                  </Grid>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </ThemeProvider>
      </div>
    );
  }
}
export default App;