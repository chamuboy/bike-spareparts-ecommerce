import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../styles/header.css'; // Import CSS file

const Header = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogout = () => {
        const confirmLogout = window.confirm('Are you sure you want to logout?');

        if (confirmLogout) {
            localStorage.removeItem('token');
            navigate('/');
        }
    };

    const renderAuthButton = () => {
        if (location.pathname === '/' || location.pathname === '/login' || location.pathname === '/register') {
            return (
                <ul>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/register">Register</Link></li>
                </ul>
            );
        } else {
            return (
                <ul>
                    <li><button onClick={handleLogout}>Logout</button></li>
                </ul>
            );
        }
    };

    return (
        <header>
            <nav>
                {renderAuthButton()}
            </nav>
        </header>
    );
};

export default Header;
