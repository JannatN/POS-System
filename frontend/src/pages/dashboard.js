import "./dashboard.css";
import React, { Component } from "react";
import Blouse from "../assets/blouse.png";
import { Grid, Header, Segment } from "semantic-ui-react";
import _ from "lodash";
import { Button, Input, Icon, Search, Form } from "semantic-ui-react";
import Sidebar from "../components/sidebar";
import Container from "@mui/material/Container";
import Calculator from "../components/calculator";
import api from "../api";
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product_name: "",
      isLoading: false,
      price: 0.0,
      counter:0,
      results: [],
      total:0.0,
      currency:"",
      tendered:0.0,
      change:0.0,
      orderTotal:0.0
    };
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleResultSelect = this.handleResultSelect.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handlePlusButton = this.handlePlusButton.bind(this);
    this.handleMinusButton = this.handleMinusButton.bind(this);
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
    this.setState({
      change:this.state.tendered - this.state.total
    })
  }
  handlePlusButton(event){
    
      console.log("hello there!")
      this.setState({
        counter:++this.state.counter,
        total:this.state.price * this.state.counter,
      })
      this.setState({
        orderTotal: this.state.orderTotal + (this.state.total)
      })
  }
  handleMinusButton(event){
    this.setState({
      counter:--this.state.counter,
      total:this.state.total - this.state.price,
    })
    this.setState({
      orderTotal: this.state.orderTotal - this.state.price
    })
}
  handleResultSelect = (e, { result }) =>
    this.setState({ product_name: result.title});

    handleSearchChange(event) {
    const target = event.target;
    const value = target.value;

    this.setState({
      product_name: value,
      isLoading: true,
    });
    setTimeout(() => {
      const { product_name } = this.state;

      const name = product_name;

       api.searchProduct(name)
        .then((res) => {
          let product = res.data.data[0]
          const result = [{
            title: product.product_name,
            description: product.product_description,
            image: Blouse,
            price:product.product_price
          }]
          this.setState({
            isLoading: false,
            results: result,
            price:result[0].price,
            total:0,
            counter:0
          });
        })
        .catch((err) => {
          console.log(err);
        });
     
    }, 300);
  }

  render() {
    const { results, isLoading, product_name, price,counter,currency,change,tendered,total, orderTotal } = this.state;
    return (
      <div className="cont">
        <Sidebar />
        <Container className="container" maxWidth="sm">
          <div className="orderDetails">
            <div>
              <img src={Blouse} alt=" icon" className="blouse" />
              <div className="sec-1">
                <Button circular color="green" icon="plus" className="pd" onClick={this.handlePlusButton}/>
                <Input
                  placeholder="0"
                  color="gray"
                  className="smInput pd"
                  name="counter"
                  value={counter}
                />
                <Button circular color="red" icon="minus" className="pd"onClick={this.handleMinusButton} />
                <Input
                  placeholder="Price"
                  color="gray"
                  className="mdInput pd"
                  name="price"
                  value={price}
                />
                <Input
                  placeholder="Total"
                  color="gray"
                  className="mdInput pd"
                  name="total"
                  value={total}
                />
              </div>
            </div>
            <div className="sec-2">
              <table className="tableOrder">
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
          <div>
          <Search
            fluid
            loading={isLoading}
            onResultSelect={this.handleResultSelect}
            size="small"
            icon="search"
            iconPosition="left"
            placeholder="Search Product"
            onSearchChange={_.debounce(this.handleSearchChange, 500, {
              leading: true,
            })}
            results={results}
            value={product_name}
          />
          </div>
          <div className="thrd-sec2">
            <Input placeholder="0.0" color="gray" className="total pd" name="orderTotal" value={orderTotal} />
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
              <Input placeholder="100" color="gray" className="smInput pd" name="tendered" value={tendered} onChange={this.handleInputChange} />
            </label>

            <label className="field pd">
              Change
              <Input placeholder="50" color="gray" className="smInput pd" name="change" value={change} />
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
        <div className="copyrights">
          <p>&copy; All rights reserved © 2021-2022 Gitters PS, Inc. Legal Line, profit Corporation. All rights reserved.</p>
        </div>
      </div>
    );
  }
}

export default Dashboard;
