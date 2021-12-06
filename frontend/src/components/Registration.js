import * as React from 'react';

import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import  { Component } from "react";

import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import cashierLogo from '../assets/cashier.png';
import api from "../api";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import './Registration.css';

import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const theme = createTheme();

class Registration extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      user_role:"",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }
  
  handleRegister = async (event) => {
    const {
      username,
      password,
      user_role
    } = this.state;

    const payload = {
      username,
      password,
      user_role
    };
    event.preventDefault()
    await api
      .register(payload)
      .then((res) => {
        this.setState({
          username: "",
          password: "",
          user_role:"",
        });
      })
       .catch((err) => {
         console.log(err);
       });
  };

 
    render(){ 
      
      const state = this.state;
      return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}
     
      >
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
           
            <h1  className="a" >
              Sign Up
            </h1>
            <Box       className="orderDetails"  component="form" noValidate  sx={{ mt: 1 }}>
              <TextField
            
                margin="normal"
                required
                fullWidth
                id="email"
                label="Username"
                value={state.username}
                onChange= {this.handleInputChange}
                name="username"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                value={state.password}
                onChange= {this.handleInputChange}
                id="password"
                autoComplete="current-password"
              />
               <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Role</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={state.user_role}
          label="Role"
          onChange= {this.handleInputChange}
          name="user_role"
        >
          <MenuItem value={"Admin"}>Admin</MenuItem>
          <MenuItem value={"Cashier"}>Cashier</MenuItem>
          
        </Select>
      </FormControl>
    </Box>
            
              <br></br>
             
              <div  >
              <button  className="signin" type="submit"  onClick={this.handleRegister}>
             Register
              
              </button>
             
           
            </div>
              <Grid container>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
              }}
export default Registration;