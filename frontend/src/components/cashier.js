import React, { Component } from "react";
import { Link } from "react-router-dom";


import './cashier.css'
import Logo from '../assets/add.png'
class Cashier extends Component {
    render() {
        return (
            <div className= 'row'>
                <div className= 'navbar'></div>
                <div className= 'column'>
                    <h2 style={{ paddingLeft:'50px'}} >Cashier</h2>
                    <button className= 'addingCashier'><img src={Logo} style={{ paddingLeft:'10px'}}></img>Add cashier</button>
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
                </div>
                
            </div>
        );
    }
}

export default Cashier;

