import './dashboard.css';
import { Link } from 'react-router-dom'
import React, { Component } from "react";
import Logo from '../assets/logo.png';
import Bloz from '../assets/bloz.jpeg';
import Plus from '../assets/plus.png';
import Min from '../assets/minus.png';
import Calculater from '../assets/cal.png';

class Dashboard extends Component {
    render() {
        return (
            // <div style={{
            //     backgroundColor: 'blue',
            // }}>
            <div className="cont">
                <div className="navbar">
                    <div className="title">
                        <img src={Logo} alt='shop logo' width="30px" />
                        DiZyni Store</div>
                </div>
                <div className="col-md">
                    <div className="orderDetails">
                        <img src={Bloz} alt=' icon' width="30px" />
                        <img src={Plus} alt=' icon' />
                        <img src={Min} alt=' icon' />

                        <table class="table table-striped">
                            Order Details
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
                </div>
                <div className="third-col">
                    <img src={Calculater} alt=' icon' width="100%" />
                </div>

            </div>

        );
    }
}

export default Dashboard;