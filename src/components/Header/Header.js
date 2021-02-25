import React from 'react';
import './header.css'
import logo from '../../images/logo.png';

const Header = () => {
    return (
        <div className="header">
            <img className="logo-img" src={logo} alt=""/>

            <nav>
                <a href="/shop">Shop</a>
                <a href="/review">Order review</a>
                <a href="/manage">Manage Inventory here</a>
            </nav>
        </div>
    );
};

export default Header;