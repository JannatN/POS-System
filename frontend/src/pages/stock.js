import React, { Component } from "react";
import SideBar from '../components/sidebar'
import './stock.css'
import Table from '../components/table'
import { Icon } from "semantic-ui-react";

class Stock extends Component {
    render() {
        return (
            <div className='row'>
                <div className='navbar'><SideBar /></div>
                <div className="contentDiv">
                    <div className="header">
                        <h2 className="stockTitle">Stock</h2>
                        <button className='addProduct'>
                            <Icon name="plus" />
                            Add Product</button>
                    </div>
                    <div className="box">
                        <div class="ui card">
                            <div class="content" style={{ backgroundColor: '#33A39F' }}>
                                <div class="numbers">Total Products </div>
                                <div className="numbers">3343</div>
                                <Icon name="boxes" />

                            </div>
                        </div>
                        <div class="ui card">
                            <div class="content" style={{ backgroundColor: '#03AE82' }}>
                                <div class="numbers">Total Transactions </div>
                                <div className="numbers">3343</div>
                                <Icon name="print" />

                            </div>
                        </div>
                        <div class="ui card">
                            <div class="content" style={{ backgroundColor: '#E3B750' }}>
                                <div class="numbers">Total Paid Orders</div>
                                <div className="numbers">3343</div>
                                <Icon name="briefcase" />

                            </div>
                        </div>
                    </div>

                    <Table />
                    {/* <div className='column'>
                        <table className='tables'>
                            <tr>
                                <th>#ID</th>
                                <th>Username</th>
                                <th>Password</th>
                                <th>Role</th>
                                <th>Create Date</th>
                                <th>Time</th>
                            </tr>
                            <tr className='tr1'>
                                <td>1</td>
                                <td>KhaderBal</td>
                                <td>********</td>
                                <td>Admin</td>
                                <td>12/4</td>
                                <td>12pm</td>

                            </tr>
                            <tr className='tr2'>

                                <td>hi</td>
                                <td>hi</td>
                                <td>hi</td>
                                <td>hi</td>
                                <td>hi</td>
                                <td>hi</td>
                            </tr>
                            <tr className='tr1'>
                                <td>hi</td>
                                <td>hi</td>
                                <td>hi</td>
                                <td>hi</td>
                                <td>hi</td>
                                <td>hi</td>
                            </tr>
                            <tr className='tr2'>
                                <td>hi</td>
                                <td>hi</td>
                                <td>hi</td>
                                <td>hi</td>
                                <td>hi</td>
                                <td>hi</td>
                            </tr>
                        </table>
                    </div> */}
                </div>

            </div>
        );
    }
}

export default Stock;

