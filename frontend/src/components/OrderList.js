// src/components/OrderList.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/orderlist.css';

const OrderList = () => {
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
        navigate(`/orders/${orderId}`);
    };

    return (
        <div className="user-orders-container">
            <h2>Your Orders</h2>
            <ul>
                {orders.map(order => (
                    <li key={order._id} onClick={() => handleOrderClick(order._id)}>
                        <p>Order ID: {order._id}</p>
                        <p>Total Cost: Rs. {order.totalCost}</p>
                        <p>Status: {order.status}</p>
                        {order.status === 'received' ? (
                            <button className='view-btn' onClick={() => handleOrderClick(order._id)}>View Order</button>
                        ) : (
                            <button className='confirm-btn'>Confirm Received</button>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default OrderList;
