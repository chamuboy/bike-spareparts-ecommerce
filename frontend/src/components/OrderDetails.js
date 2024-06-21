// src/components/OrderDetail.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../styles/orderdetails.css';

const OrderDetail = () => {
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
    }, [orderId]);

    const handleConfirmReceived = async () => {
        try {
            const response = await axios.put(`http://localhost:5000/api/orders/${orderId}`, { status: 'received' });
            if (response.status === 200) {
                alert('Order received successfully!');
                setOrder({ ...order, status: 'received' });
            }
        } catch (error) {
            console.error(error);
            alert('Failed to confirm order received. Please try again.');
        }
    };

    return (
        <div className='single-order'>
            <h2>Order Details</h2>
            {order && (
                <div>
                    <p>Order ID: {order._id}</p>
                    <p>Total Cost: Rs. {order.totalCost}</p>
                    <p>Status: {order.status}</p>
                    <div className='shipping-details'>
                        <p>Name: {order.shippingDetails.name}</p>
                        <p>Address: {order.shippingDetails.address}</p>
                        <p>City: {order.shippingDetails.city}</p>
                        <p>State: {order.shippingDetails.state}</p>
                        <p>Zip: {order.shippingDetails.zip}</p>
                    </div>
                    {order.status === 'pending' && <button onClick={handleConfirmReceived}>Confirm Received</button>}
                </div>
            )}
        </div>
    );
};

export default OrderDetail;
