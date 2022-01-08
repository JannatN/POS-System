import React, { Component } from "react";
import SideBar from '../components/sidebar'
import './bill.css'
import Table from '../components/table'
import { Icon } from "semantic-ui-react";
import { Link } from 'react-router-dom';
import { Container } from "@mui/material";

class Bill extends Component {
    render() {
        return (
            <Container className="container" maxWidth="sm">
                <div className="billDetails">
                    <h2 className="billTitle">DiZyni Store - Customer Bill</h2>
                    <div className="sec-2">
                        <div className="sec">Invoice Date:
                            <span>12-2-2022</span>
                        </div>
                        <div className="sec">Due Date: <span>13-2-2022</span>
                        </div>
                        <div className="sec">Cashier: <span>Lara</span>
                        </div>
                    </div>
                    <div >
                        <table className="tabley">
                            <tr>
                                <th className="thy">Item</th>
                                <th className="thy">Price</th>
                                <th className="thy">Quantity</th>
                            </tr>
                            <tr>
                                <td className="tdy">adidasBlackShirt</td>
                                <td className="tdy">100</td>
                                <td className="tdy">3</td>
                            </tr>

                        </table>
                    </div>
                    <div className="sec">Total: <span>300</span>
                    </div>
                    <Link to='/dashboard'>
                            <button className='but'>
                                Print </button></Link>
                </div>
            </Container>
        );
    }
}

export default Bill;

