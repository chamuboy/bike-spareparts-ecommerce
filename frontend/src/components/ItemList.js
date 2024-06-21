// src/components/ItemList.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import RightPane from './RightPane';
import '../styles/itemlist.css';

const ItemList = () => {
    const { category, subcategory } = useParams();
    const [items, setItems] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const res = await axios.get('http://localhost:5000/api/items');
                const filteredItems = res.data.filter(item => item.category === category && item.subcategory === subcategory);
                setItems(filteredItems);
                setFilteredItems(filteredItems);
            } catch (error) {
                console.error(error);
            }
        };

        fetchItems();
    }, [category, subcategory]);

    const handleFilterChange = ({ lowerPrice, upperPrice, selectedBrand }) => {
        let filtered = items;

        if (lowerPrice) {
            filtered = filtered.filter(item => item.cost >= lowerPrice);
        }

        if (upperPrice) {
            filtered = filtered.filter(item => item.cost <= upperPrice);
        }

        if (selectedBrand) {
            filtered = filtered.filter(item => item.brand === selectedBrand);
        }

        setFilteredItems(filtered);
    };

    const handleItemClick = (id) => {
        navigate(`/item/${id}`);
    };

    return (
        <div className='main'>
            <div className="item-list-container">
                <h2>{subcategory}</h2>
                <div className="content">
                    <ul>
                        {filteredItems.map(item => (
                            <li key={item._id} onClick={() => handleItemClick(item._id)}>
                                <h3>{item.name}</h3>
                                <p>Rs. {item.cost}</p>
                                <p>Brand: {item.brand}</p>
                                {item.image && <img src={`http://localhost:5000/${item.image}`} alt={item.name} />}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className='rightpane'>
                <RightPane onFilterChange={handleFilterChange} />
            </div>
        </div>
    );
};

export default ItemList;
