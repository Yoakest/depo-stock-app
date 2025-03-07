const express = require('express');
const { Permission } = require('../models/permissions');
const permissions = require('../models/permissions');
const router = express.Router();

// Yetkileri listele
router.get('/', async (req, res) => {
    try {
        const permissions = await Permission.findAll();
        res.json(permissions);
    } catch (error) {
        res.status(500).send('3001: Bir hata oluştu');
    }
});

// Yetki ekle
router.post('/', async (req, res) => {
    const { name } = req.body;
    try {
        const permission = await Permission.create({ name });
        res.status(201).json(permission);
    } catch (error) {
        res.status(500).send('3002: Bir hata oluştu');
    }
});

// Yetki güncelle
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;

    try {
        const permission = await Permission.findByPk(id);
        if (!permission) return res.status(404).send('Yetki bulunamadı');
        
        permission.name = name || permission.name;
        await permission.save();
        res.json(permission);
    } catch (error) {
        res.status(500).send('3003: Bir hata oluştu');
    }
});

// Yetki sil
router.delete('/:id' , async (req, res)=> {
    const {id} = req.params;
    try {
        const permission= Permission.findByPk(id);
        if (!permission) return res.status(404).send('Yetki bulunamadı');
        
        await permission.destroy();
        res.status(204).send();
    } catch (error) {
        res.status(500).send('3004: Bir hata oluştu');
    }
});

module.exports = router;