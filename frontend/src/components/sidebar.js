import React, { Component } from "react";
import Stock from '../assets/package.png';
import Dash from '../assets/home.png';
import Report from '../assets/report.png';
import Financial from '../assets/money.png';
import Cashiers from '../assets/clerk.png';
import Logout from '../assets/logout.png';
import Logo from '../assets/logo.png';
import './sidebar.css';

class Sidebar extends Component {

    render() {
        return (
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
      );
  }
}

export default Sidebar;