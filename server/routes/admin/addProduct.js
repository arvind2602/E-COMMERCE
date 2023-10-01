import express from 'express';
import ProductSchema from '../../models/addProduct.js';

const Product = express.Router();
Product.post('/products/add', async (req, res) => {
    const { name, price, description, category, quantity, image } = req.body;
    try {
        const newProduct = new ProductSchema({ name, price, description, category, quantity, image });
        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
})

Product.get('/products', async (req, res) => {
    try {
        const products = await ProductSchema.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
})
export default Product;