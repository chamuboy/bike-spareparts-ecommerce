// src/pages/BuyerDashboard.js

import React from 'react';
import LeftPane from '../components/LeftPane';
import '../styles/buyerdashboard.css';

const BuyerDashboard = () => {
    return (
        <div className='maindiv'>
            <LeftPane/>
            <div className='content'>
                <h2>Buyer Dashboard</h2>
                <p>Welcome to the Buyer Dashboard!</p>
            </div>
        </div>
    );
};

export default BuyerDashboard;
