const express = require('express');
const { Category } = require('../models');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const categories = await Category.findAll();
        res.json(categories);
    } catch (error) {
        res.status(500).send('5001: Bir hata oluştu');
    }
});

router.post('/', async (req, res) => {
    const body = req.body;
    try {    
        const category = await Category.create(body);
        res.status(201).json(category);
    } catch (error) {
        console.error(error);
        res.status(500).send('5002: Bir hata oluştu');
    }
}); 

module.exports = router;