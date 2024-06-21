import React from 'react';
import { Link } from 'react-router-dom'; // Add this line
import LeftPane from '../components/LeftPane';
import '../styles/admindashboard.css';

const AdminDashboard = () => {
    return (
        <div className='maindivision'>
            <LeftPane/>
            <div className='content'>                
                <h2>Admin Dashboard</h2>
                <p>Welcome to the Admin Dashboard!</p>
                <Link to="/add-item" className="add-item-btn">Add Item</Link>
                <Link to="/admin/orders" className='view-orders-btn'>View Orders</Link>
            </div>
        </div>
    );
};

export default AdminDashboard;
