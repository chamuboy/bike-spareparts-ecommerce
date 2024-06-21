// controllers/itemController.js

const Item = require('../models/Items');

// Controller to add a new item
exports.addItem = async (req, res) => {
    const { name, brand, cost, description, category, subcategory } = req.body;
    const image = req.file.path; // Image file path

    try {
        const newItem = new Item({
            name,
            cost,
            description,
            category,
            subcategory,
            brand,
            image
        });

        const item = await newItem.save();
        res.status(201).json(item);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

// Controller to fetch all items
exports.getAllItems = async (req, res) => {
    try {
        const items = await Item.find();
        res.status(200).json(items);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

// Controller to fetch a single item by ID
exports.getItemById = async (req, res) => {
    try {
        const item = await Item.findById(req.params.id);
        if (!item) {
            return res.status(404).json({ message: 'Item not found' });
        }
        res.status(200).json(item);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};
