import './dashboard.css';
import React, { Component } from "react";
import Blouse from '../assets/blouse.png';
import Plus from '../assets/plus.png';
import Min from '../assets/minus.png';
import Calculater from '../assets/cal.png';
import Sidebar from '../components/sidebar';
import SearchBar from "material-ui-search-bar";
import Grid from '@mui/material/Grid';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Container from '@mui/material/Container';
import Calculator from '../components/calculator';



class Dashboard extends Component {
  render() {
    return (
      // <div style={{
      //     backgroundColor: 'blue',
      // }}>
      <div className="cont">
        <Sidebar />
        <Container className="container" maxWidth="sm">
          <div className="orderDetails">
            <div className="sec-1">
              <img src={Blouse} alt=' icon' />
              <div className="addMin">
                <img src={Plus} alt=' icon' />
                <div className="sec-1-sq">0</div>
                <img src={Min} alt=' icon' />
                {/* <label> Price:</label> */}
                <div className="sec-1-sq">0 </div>
                {/* <label > Total: </label> */}
                <div className="sec-1-sq">0</div>

              </div>
            </div>
            <div className="sec-2">

              <table className="table table-striped">
                <h3>Order Details</h3>
                <tbody>
                  <tr>
                    <td>Item Discount:</td>
                    <td>$406.27</td>
                  </tr>
                  <tr>
                    <td>Sub total</td>
                    <td>$589.99</td>
                  </tr>
                  <tr>
                    <td>Order Discount</td>
                    <td>$406.27</td>
                  </tr>
                  <tr>
                    <td>Total Due</td>
                    <td>$589.99</td>
                  </tr>
                </tbody>
              </table>

            </div>
            <div className="sec-3">
              <button className="btn" className="yellow" type="submit">Print</button>
              <button className="btn" className="blue" type="submit">Discount</button>
              <button className="btn" className="red" type="submit">Delete</button>
              <button className="btn" className="green" type="submit">Pay</button>
            </div>

          </div>
        </Container>
        <div className="third-col">
          <SearchBar className="searchbar" />
          <div className="thrd-sec2">
            <lebel>Total</lebel>
            <lebel>Currency</lebel>
            <lebel>Tenderd</lebel>
            <lebel>Change</lebel>
            <Grid className="boxes" container />
            <Grid className="select">
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                // value={cuurency}
                // onChange={handleChange}
                // label="Age"
              >
                <MenuItem value="">
                </MenuItem>
                <MenuItem value={"JD"}>JD</MenuItem>
                <MenuItem value={"NIS"}>NIS</MenuItem>
                <MenuItem value={"USD"}>USD</MenuItem>
              </Select>
            </Grid>
            <Grid className="boxes" container />
            <Grid className="boxes" container />

          </div>

          {/* <div className="cal"><img src={Calculater} alt=' icon' width="70%" /></div> */}
          <Calculator
          // expression={this.state.expression}
          // result={this.state.result}
          // handleClick={this.handleClick}
        />
          {/* <FormControl className="radio" component="fieldset">
            <RadioGroup row aria-label="pay" name="row-radio-buttons-group">
              <FormControlLabel className="radio" value="cash" control={<Radio />} label="Cash" />
              <FormControlLabel className="radio" value="credit" control={<Radio />} label="Credit" />
              <FormControlLabel className="radio" value="check" control={<Radio />} label="Check" />
            </RadioGroup>
          </FormControl> */}
          <div className="radio">
            <input type="radio" id="cash" name="cash" value="Cash" />
            <label for="cash">Cash</label>
            <input type="radio" id="credit" name="credit" value="credit" />
            <label for="credit">Credit</label>

            <input type="radio" id="check" name="check" value="check" />
            <label for="check">Checks</label>

            <input type="radio" id="not" name="not" value="not" />
            <label for="cash">Not Paid</label>

          </div>
        </div>

      </div>

    );
  }
}

export default Dashboard;