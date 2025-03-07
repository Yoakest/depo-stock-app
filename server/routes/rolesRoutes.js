const express = require('express');
const { Role } = require('../models');
const router = express.Router();

// Rolleri listele
router.get('/', async (req, res) => {
  try {
    const roles = await Role.findAll();
    res.json(roles);
  } catch (error) {
    res.status(500).send('2001: Bir hata oluştu');
  }
});

// Rol ekle
router.post('/', async (req, res) => {
  const { name } = req.body;
  try {
    const role = await Role.create({ name });
    res.status(201).json(role);
  } catch (error) {
    res.status(500).send('2002: Bir hata oluştu');
  }
});

// Rolü güncelle
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  try {
    const role = await Role.findByPk(id);
    if (!role) return res.status(404).send('Rol bulunamadı');
    
    role.name = name || role.name;
    await role.save();
    res.json(role);
  } catch (error) {
    res.status(500).send('2003: Bir hata oluştu');
  }
});

// Rolü sil
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const role = await Role.findByPk(id);
    if (!role) return res.status(404).send('Rol bulunamadı');
    
    await role.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).send('2004: Bir hata oluştu');
  }
});

module.exports = router;
