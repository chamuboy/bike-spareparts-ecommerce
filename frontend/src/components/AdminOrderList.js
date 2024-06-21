// src/components/AdminOrderList.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import navigate from react-router-dom
import '../styles/adminorderlist.css';

const AdminOrderList = () => {
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const res = await axios.get('http://localhost:5000/api/orders');
                setOrders(res.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchOrders();
    }, []);

    const handleOrderClick = (orderId) => {
        navigate(`/admin/orders/${orderId}`); // Navigate to the single order page
    };

    return (
        <div className="admin-order-list-container">
            <h2>Admin Orders List</h2>
            <ul>
                {orders.map(order => (
                    <li key={order._id} className="order-item" onClick={() => handleOrderClick(order._id)}>
                        <p className="order-id">Order ID: {order._id}</p>
                        <p className="total-cost">Total Cost: Rs. {order.totalCost}</p>
                        <p className="status">Status: {order.status}</p>
                        <button className="dispatch-btn">Dispatch</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AdminOrderList;
