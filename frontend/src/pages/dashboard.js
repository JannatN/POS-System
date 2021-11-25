import './dashboard.css';
import { Link } from 'react-router-dom'
import React, { Component } from "react";
import Logo from '../assets/logo.png';
import Blouse from '../assets/blouse.png';
import Plus from '../assets/plus.png';
import Min from '../assets/minus.png';
import Calculater from '../assets/cal.png';
import Stock from '../assets/package.png';
import Dash from '../assets/home.png';
import Report from '../assets/report.png';
import Financial from '../assets/money.png';
import Cashiers from '../assets/clerk.png';
import Logout from '../assets/logout.png';

class Dashboard extends Component {
    render() {
        return (
            // <div style={{
            //     backgroundColor: 'blue',
            // }}>
            <div className="cont">
                <div className="navbar">
                    <div className="title">
                        <img src={Logo} alt='shop logo' width="45px" />
                        DiZyni Store</div>

                    <div className="li"> <img src={Dash} alt="dashboard_icon" />
                        <p>Dashboard</p>
                    </div>
                    <div className="li"> <img src={Stock} alt="stock" />
                        <p>Stock</p>
                    </div>
                    <div className="li"> <img src={Financial} alt="finan" />
                        <p>Financial Transactions</p>
                    </div>
                    <div className="li"> <img src={Report} alt="reports" />
                        <p>Reports</p>
                    </div>
                    <div className="li"> <img src={Cashiers} alt="cashiers" />
                        <p>Cashiers</p>
                    </div>
                    <div className="li"> <img src={Logout} alt="logout" />
                        <p>Logout</p>
                    </div>
                </div>
                <div className="col-md">
                    <div className="orderDetails">
                        <div className="sec-1">
                            <img src={Blouse} alt=' icon' />
                            <img src={Plus} alt=' icon' />
                            <img src={Min} alt=' icon' />
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
                </div>
                <div className="third-col">
                    <div className="topnav">
                        <div className="search-container">
                            <form>
                                <input type="text" placeholder="Search.." name="search" />
                                <button type="submit"><i className="fa fa-search"></i>Search</button>
                            </form>
                        </div>
                    </div>
                    <div className = "thrd-sec2">
                        <div className="total-big">0.00</div>
                        {/* <label className="label-3th">currency</label> */}
                        <div className="thrd-btns">JD</div>
                        {/* <label className="label-3th">Tendered</label> */}

                        <div className="thrd-btns">0.0</div>
                        {/* <label className="label-3th">Change</label> */}

                        <div className="thrd-btns">0.0</div>

                    </div>

                    <div className="cal"><img src={Calculater} alt=' icon' width="70%" /></div>
                </div>

            </div>

        );
    }
}

export default Dashboard;