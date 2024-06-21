import React, { useState } from 'react';
import axios from 'axios';
import '../styles/additem.css';

const AddItem = () => {
    const [name, setName] = useState('');
    const [cost, setCost] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [subcategory, setSubcategory] = useState('');
    const [brand, setBrand] = useState(''); 
    const [image, setImage] = useState(null); 

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const formData = new FormData();
            formData.append('name', name);
            formData.append('cost', cost);
            formData.append('description', description);
            formData.append('category', category);
            formData.append('subcategory', subcategory);
            formData.append('brand', brand);
            formData.append('image', image);

            const res = await axios.post('http://localhost:5000/api/items/add', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            alert('Item added Successfully!');
            setName('');
            setCost('');
            setDescription('');
            setCategory('');
            setSubcategory('');
            setBrand('');
            setImage(null);
        } catch (error) {
            console.error(error);
        }
    };

    // Function to handle image selection
    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    return (
        <div className="add-item-container">
            <h2>Add Item</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Category</label>
                    <select 
                        value={category} 
                        onChange={(e) => setCategory(e.target.value)} 
                        required
                    >
                        <option value="">Select Category</option>
                        <option value="Bike Accessories">Bike Accessories</option>
                        <option value="Three Wheeler Accessories">Three Wheeler Accessories</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Subcategory</label>
                    <select 
                        value={subcategory} 
                        onChange={(e) => setSubcategory(e.target.value)} 
                        required
                    >
                        <option value="">Select Subcategory</option>
                        {category === 'Bike Accessories' && (
                            <>
                                <option value="Helmets">Helmets</option>
                                <option value="Lights">Lights</option>
                                <option value="Tyres">Tyres</option>
                            </>
                        )}
                        {category === 'Three Wheeler Accessories' && (
                            <>
                                <option value="Accessory 1">Accessory 1</option>
                                <option value="Accessory 2">Accessory 2</option>
                                <option value="Accessory 3">Accessory 3</option>
                            </>
                        )}
                    </select>
                </div>
                <div className="form-group">
                    <label>Brand</label>
                    <input type="text" value={brand} onChange={(e) => setBrand(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label>Model</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label>Cost</label>
                    <input type="number" value={cost} onChange={(e) => setCost(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Image</label>
                    <input type="file" onChange={handleImageChange} required />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default AddItem;
