import React, { Component } from "react";
import Stock from '../assets/package.png';
import Dash from '../assets/home.png';
import Report from '../assets/report.png';
import Financial from '../assets/money.png';
import Cashiers from '../assets/clerk.png';
import Logout from '../assets/logout.png';
import Logo from '../assets/logo.png';
import './sidebar.css';
import { Link } from 'react-router-dom';

class Sidebar extends Component {

    render() {
        return (
            <div className="sidebar">
                <div className="sidebar__title">
                    <div className="sidebar__img">
                    <i className="fa fa-home"> <img src={Logo} alt="dashboard_icon" width="50px" /></i>
                        <h1> DiZyni Store</h1>
                    </div>
                    <i
                        onclick="closeSidebar()"
                        class="fa fa-times"
                        id="sidebarIcon"
                        aria-hidden="true"
                    ></i>
                </div>

                <div className="sidebar__menu">
                    <div className="sidebar__link active_menu_link">
                        <i className="fa fa-home"> <img src={Dash} alt="dashboard_icon" width="20px" /></i>
                        <Link to='/dashboard'>Dashboard</Link>
                    </div>
                    <div className="sidebar__link">
                        <i className="fa fa-user-secret" aria-hidden="true" > <img src={Stock} alt="stock" width="20px" /></i>
                        <Link to='/stock'>Stock</Link>
                    </div>
                    <div className="sidebar__link">
                        <i className="fa fa-building-o"> <img src={Financial} alt="finan" width="20px" /></i>
                        <a href="#">Financial Transactions</a>
                    </div>
                    <div className="sidebar__link">
                        <i className="fa fa-wrench"><img src={Report} alt="reports" width="20px" /></i>
                        <a href="#">Reports</a>
                    </div>

                    <div className="sidebar__link">
                        <i className="fa fa-handshake-o"><img src={Cashiers} alt="cashiers" width="20px" /></i>
                        <Link to='/cashier'>Cashiers</Link>
                    </div>
                    <div className="sidebar__link">
                        <i className="fa fa-question"><img src={Logout} alt="logout" width="20px" /></i>
                        <Link to='/'>Logout</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Sidebar;