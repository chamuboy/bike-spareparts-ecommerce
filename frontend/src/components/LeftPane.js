// src/components/LeftPane.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/leftpane.css'; // Import CSS file

const LeftPane = () => {
    const [showBikeSubcategories, setShowBikeSubcategories] = useState(false);
    const [showThreeWheelerSubcategories, setShowThreeWheelerSubcategories] = useState(false);

    const toggleBikeSubcategories = () => setShowBikeSubcategories(!showBikeSubcategories);
    const toggleThreeWheelerSubcategories = () => setShowThreeWheelerSubcategories(!showThreeWheelerSubcategories);

    return (
        <div className="left-pane">
            <ul>
                <li>
                    <span onClick={toggleBikeSubcategories} className="category-title">Bike Accessories</span>
                    {showBikeSubcategories && (
                        <ul className="subcategory-list">
                            <li>
                                <Link to="/items/Bike Accessories/Helmets">Helmets</Link>
                            </li>
                            <li>
                                <Link to="/items/Bike Accessories/Accessory 2">Accessory 2</Link>
                            </li>
                            <li>
                                <Link to="/items/Bike Accessories/Accessory 3">Accessory 3</Link>
                            </li>
                            <li>
                                <Link to="/items/Bike Accessories/Accessory 4">Accessory 4</Link>
                            </li>
                            <li>
                                <Link to="/items/Bike Accessories/Accessory 5">Accessory 5</Link>
                            </li>
                        </ul>
                    )}
                </li>
                <li>
                    <span onClick={toggleThreeWheelerSubcategories} className="category-title">Three Wheeler Accessories</span>
                    {showThreeWheelerSubcategories && (
                        <ul className="subcategory-list">
                            <li>
                                <Link to="/items/Three Wheeler Accessories/Accessory 1">Accessory 1</Link>
                            </li>
                            <li>
                                <Link to="/items/Three Wheeler Accessories/Accessory 2">Accessory 2</Link>
                            </li>
                            <li>
                                <Link to="/items/Three Wheeler Accessories/Accessory 3">Accessory 3</Link>
                            </li>
                            <li>
                                <Link to="/items/Three Wheeler Accessories/Accessory 4">Accessory 4</Link>
                            </li>
                            <li>
                                <Link to="/items/Three Wheeler Accessories/Accessory 5">Accessory 5</Link>
                            </li>
                        </ul>
                    )}
                </li>
                <li><Link to="/orders" className="main-category-link">My Orders</Link></li>
                <li><Link to="/cart" className="main-category-link">Cart</Link></li>
                <li><Link to="/contact" className="main-category-link">Contact Us</Link></li>
                <li><Link to="/about" className="main-category-link">About Us</Link></li>
            </ul>
        </div>
    );
};

export default LeftPane;
