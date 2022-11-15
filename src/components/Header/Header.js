import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <nav>
                <a href="/order">Order</a>
                <a href="/order-overview">Order Overview</a>
                <a href="/manage-inventory">Manage Inventory</a>
                <a href="/login">Login</a>
            </nav>
        </nav>
    );
};

export default Header;