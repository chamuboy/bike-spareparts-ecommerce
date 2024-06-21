// src/components/RightPane.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/rightpane.css';

const RightPane = ({ onFilterChange }) => {
    const [lowerPrice, setLowerPrice] = useState('');
    const [upperPrice, setUpperPrice] = useState('');
    const [brands, setBrands] = useState([]);
    const [selectedBrand, setSelectedBrand] = useState('');

    useEffect(() => {
        const fetchBrands = async () => {
            try {
                const res = await axios.get('http://localhost:5000/api/items');
                const allBrands = res.data.map(item => item.brand);
                const uniqueBrands = [...new Set(allBrands)];
                setBrands(uniqueBrands);
            } catch (error) {
                console.error(error);
            }
        };

        fetchBrands();
    }, []);

    const handleFilterChange = () => {
        onFilterChange({ lowerPrice, upperPrice, selectedBrand });
    };

    return (
        <div className="right-pane">
            <div className="filter-group">
                <h3>Sort by Price</h3>
                <input
                    type="number"
                    placeholder="Lower Price"
                    value={lowerPrice}
                    onChange={(e) => setLowerPrice(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Upper Price"
                    value={upperPrice}
                    onChange={(e) => setUpperPrice(e.target.value)}
                />
                <button onClick={handleFilterChange}>Apply</button>
            </div>
            <div className="filter-group">
                <h3>Sort by Brand</h3>
                <select
                    value={selectedBrand}
                    onChange={(e) => setSelectedBrand(e.target.value)}
                >
                    <option value="">All Brands</option>
                    {brands.map((brand, index) => (
                        <option key={index} value={brand}>
                            {brand}
                        </option>
                    ))}
                </select>
                <button onClick={handleFilterChange}>Apply</button>
            </div>
        </div>
    );
};

export default RightPane;
