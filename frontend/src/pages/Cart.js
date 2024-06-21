// src/components/Cart.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/cart.css';

const Cart = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const navigate = useNavigate();

    const handleBuyNow = () => {
        navigate('/checkout');
    };

    return (
        <div className="cart-container">
            <h2>Your Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <ul>
                    {cart.map((item, index) => (
                        <li key={index}>
                            <h3>{item.name}</h3>
                            <p>Rs. {item.cost} x {item.quantity}</p>
                            <p>Total: Rs. {item.cost * item.quantity}</p>
                        </li>
                    ))}
                </ul>
            )}
            {cart.length > 0 && <button onClick={handleBuyNow}>Buy Now</button>}
        </div>
    );
};

export default Cart;
