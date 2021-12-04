import "./dashboard.css";
import React, { Component } from "react";
import Blouse from "../assets/blouse.png";
import Plus from "../assets/plus.png";
import Min from "../assets/minus.png";
import { Button, Input, Icon, Search, Form } from "semantic-ui-react";

import Sidebar from "../components/sidebar";
import SearchBar from "material-ui-search-bar";
import Grid from "@mui/material/Grid";

import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Container from "@mui/material/Container";
import Calculator from "../components/calculator";

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
            <div>
              <img src={Blouse} alt=" icon" className="blouse" />
              <div className="sec-1">
                <Button circular color="green" icon="plus" className="pd" />
                <Input
                  placeholder="Price"
                  color="gray"
                  className="smInput pd"
                />
                <Button circular color="red" icon="minus" className="pd" />
                <Input
                  placeholder="Price"
                  color="gray"
                  className="mdInput pd"
                />
                <Input
                  placeholder="Totel"
                  color="gray"
                  className="mdInput pd"
                />
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
              <button className="btn" className="yellow" type="submit">
                <Icon name="print" />
                Print
              </button>
              <button className="btn" className="blue" type="submit">
                <Icon name="arrows alternate vertical" />
                Discount
              </button>
              <button className="btn" className="red" type="submit">
                <Icon name="trash" />
                Delete
              </button>
              <button className="btn" className="green" type="submit">
                <Icon name="money bill alternate outline" />
                Pay
              </button>
            </div>
          </div>
        </Container>
        <div className="third-col">
          <Search
            size="small"
            icon="search"
            iconPosition="left"
            placeholder="Search..."
          />
          <div className="thrd-sec2">
       
             <Input
                  placeholder="0.0"
                  color="gray"
                  className="total pd"
                />
                <label className="field pd">
                Currency  
                <select
                required
                  name="product_category"
                 
                  className="ui fluid selection dropdown smInput pd"
                >
                  <option value="nis">NIS</option>
                  <option value="dollar">Dr</option>
                  <option value="jd">JD</option>
                  <option value="uro">UR</option>
                </select>
              </label>

                <label className="field pd">
                Tenderd 
                <Input
                  placeholder="100"
                  color="gray"
                  className="smInput pd"
                />
                </label>
                
                <label className="field pd">
                  Change
                <Input
                  placeholder="50"
                  color="gray"
                  className="smInput pd"
                /> 
                </label>
          </div>
          <Calculator />

          <div className="radio">
            <input type="radio" id="cash" name="cash" value="Cash" />
            <label for="cash" className="pd">
              Cash
            </label>
            <input type="radio" id="credit" name="credit" value="credit" />
            <label for="credit" className="pd">
              Credit
            </label>

            <input type="radio" id="check" name="check" value="check" />
            <label for="check" className="pd">
              Checks
            </label>

            <input type="radio" id="not" name="not" value="not" />
            <label for="cash" className="pd">
              Not Paid
            </label>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
