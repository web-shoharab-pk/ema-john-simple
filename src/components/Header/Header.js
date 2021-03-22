import React, { useContext } from 'react';
import './header.css'
import logo from '../../images/logo.png';
import { Link } from 'react-router-dom';
import { UserContaxt } from '../../App';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContaxt);
    return (
        <div className="header">
            <img className="logo-img" src={logo} alt=""/>

            <nav>         
                <Link to="/shop">Shop</Link>
                <Link to="/review">Order review</Link>
                <Link to="/inventory">Manage Inventory here</Link>
                <button onClick={() => setLoggedInUser({})}>Sign Out</button>
            </nav>
        </div>
    );
};

export default Header;