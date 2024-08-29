import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/profile">Profile</Link>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/settings">Settings</Link>
            </nav>
        </header>
    );
};

export default Header;
