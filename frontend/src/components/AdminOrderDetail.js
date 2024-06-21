// src/components/AdminOrderDetail.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'; 
import '../styles/adminorderdetail.css';

const AdminOrderDetail = () => {
    const { orderId } = useParams();
    const [order, setOrder] = useState(null);

    useEffect(() => {
        const fetchOrder = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/api/orders/${orderId}`);
                setOrder(res.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchOrder();
    }, [orderId]); // Add orderId to dependency array

    if (!order) {
        return <div>Loading...</div>;
    }

    return (
        <div className="admin-order-detail-container">
            <h2>Order ID: {order._id}</h2>
            <p>Total Cost: Rs. {order.totalCost}</p>
            <p>Status: {order.status}</p>
            <div className="shipping-details">
                <h3>Shipping Details:</h3>
                <p>Name: {order.shippingDetails.name}</p>
                <p>Address: {order.shippingDetails.address}</p>
                <p>Contact: {order.shippingDetails.contact}</p>
            </div>
        </div>
    );
};

export default AdminOrderDetail;
