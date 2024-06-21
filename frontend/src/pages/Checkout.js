// src/components/Checkout.js

import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/checkout.css';

const Checkout = () => {
    const { state } = useLocation();
    const navigate = useNavigate();
    const [shippingDetails, setShippingDetails] = useState({
        name: '',
        address: '',
        city: '',
        state: '',
        zip: ''
    });
    const cart = state?.item ? [{ ...state.item, quantity: state.quantity }] : JSON.parse(localStorage.getItem('cart')) || [];
    const totalCost = cart.reduce((total, item) => total + item.cost * item.quantity, 0);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setShippingDetails(prevDetails => ({ ...prevDetails, [name]: value }));
    };

    const handleConfirmOrder = async () => {
        try {
            const response = await axios.post('http://localhost:5000/api/orders/checkout', {
                items: cart.map(item => item._id),
                totalCost,
                shippingDetails
            });
            if (response.status === 201) {
                localStorage.removeItem('cart');
                alert('Order confirmed. Cash on delivery.');
                navigate('/buyer/dashboard');
            }
        } catch (error) {
            console.error(error);
            alert('Failed to confirm order. Please try again.');
        }
    };

    return (
        <div className="checkout-container">
            <h2>Checkout</h2>
            <div className="shipping-form">
                <h3>Shipping Details</h3>
                <input type="text" name="name" placeholder="Name" value={shippingDetails.name} onChange={handleChange} required />
                <input type="text" name="address" placeholder="Address" value={shippingDetails.address} onChange={handleChange} required/>
                <input type="text" name="city" placeholder="City" value={shippingDetails.city} onChange={handleChange} required/>
                <input type="text" name="state" placeholder="State" value={shippingDetails.state} onChange={handleChange} required/>
                <input type="text" name="zip" placeholder="Zip Code" value={shippingDetails.zip} onChange={handleChange} required/>
            </div>
            <div className="order-summary">
                <h3>Order Summary</h3>
                <ul>
                    {cart.map((item, index) => (
                        <li key={index}>
                            <p>{item.name}</p>
                            <p>Rs. {item.cost} x {item.quantity}</p>
                            <p>Total: Rs. {item.cost * item.quantity}</p>
                        </li>
                    ))}
                </ul>
                <p>Total Cost: Rs. {totalCost}</p>
                <button onClick={handleConfirmOrder}>Confirm Order</button>
            </div>
        </div>
    );
};

export default Checkout;
