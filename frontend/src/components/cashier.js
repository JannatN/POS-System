/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
//import { Link } from "react-router-dom";
import SideBar from './sidebar'
import { Icon } from "semantic-ui-react";


import './cashier.css'
import Logo from '../assets/add.png'
class Cashier extends Component {
    render() {
        return (
            <div className='ext'>
                <div className='navbar'><SideBar /></div>
                <div className="contentDiv">
                    <div className="header">
                        <h2 className="h2Title">Cashiers</h2>
                        <button className='addbutton'>
                            <Icon name="plus" />
                            Add Cashier</button>
                    </div>
                    <table className='tableCh'>
                        <tr className='tr'>
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
                </div>

            </div>
        );
    }
}

export default Cashier;

