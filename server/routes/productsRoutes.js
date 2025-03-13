const express = require('express');
const { Product } = require('../models');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const products = await Product.findAll();
        res.json(products);
    } catch (error) {
        res.status(500).send('4001: Bir hata oluştu');
    }
});

router.post('/', async (req, res) => {
    const body = req.body;
    const {product_code} = body;
    console.log(product_code);
    try {
        const product = await Product.create(body);
        res.status(201).json(product);
    } catch (error) {
        console.error(error);
        res.status(500).send('4002: Bir hata oluştu');
    }
});

module.exports = router;