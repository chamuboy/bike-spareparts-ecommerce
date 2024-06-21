// src/components/ItemDetail.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/itemdetail.css';

const ItemDetail = () => {
    const { id } = useParams();
    const [item, setItem] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchItem = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/api/items/${id}`);
                setItem(res.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchItem();
    }, [id]);

    const handleAddToCart = () => {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const cartItem = { ...item, quantity };
        cart.push(cartItem);
        localStorage.setItem('cart', JSON.stringify(cart));
        alert('Item added to cart');
    };

    const handleBuyNow = () => {
        navigate(`/checkout/${id}`, { state: { item, quantity } });
    };

    if (!item) {
        return <div>Loading...</div>;
    }

    return (
        <div className="item-detail-container">
            <h2>{item.name}</h2>
            <p>Rs. {item.cost}</p>
            <p>Brand: {item.brand}</p>
            <p>{item.description}</p>
            {item.image && <img src={`http://localhost:5000/${item.image}`} alt={item.name} />}
            <div className="quantity-container">
                <label>Quantity: </label>
                <input type="number" value={quantity} min="1" onChange={(e) => setQuantity(e.target.value)} />
            </div>
            <button onClick={handleAddToCart}>Add to Cart</button>
            <button onClick={handleBuyNow}>Buy Now</button>
        </div>
    );
};

export default ItemDetail;
