const express = require('express');
const bcrypt = require('bcrypt');
const { User, Role } = require('../models');
const router = express.Router();

// Kullanıcıları listele
router.get('/', async (req, res) => {
  try {
    console.log("aaa")
    const users = await User.findAll({
      include: [
        {
          model: Role,
          as: 'role',
        },
      ],
    });

    res.status(200).json(users);
  } catch (error) {
    console.error('Hata:', error.message);
    res.status(500).send(error.message);
  }
});


// Kullanıcı ekle
router.post('/', async (req, res) => {
  const { username, password, role_id } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);  // Şifreyi hashle
  try {
    const user = await User.create({
      username,
      password: hashedPassword,
      role_id,
    });
    res.status(201).json(user);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Kullanıcıyı güncelle
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { role_id } = req.body;

  try {
    const user = await User.findByPk(id);
    if (!user) return res.status(404).send('Kullanıcı bulunamadı');

    user.role_id = role_id || user.role_id;

    console.log("user role ıd", user.role_id)

    await user.save();
    console.log("Usera role eklendi", user)
    res.json(user);
  } catch (error) {
    res.status(500).send('1003: Bir hata oluştu');
  }
});

// Kullanıcıyı sil
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByPk(id);
    if (!user) return res.status(404).send('Kullanıcı bulunamadı');

    await user.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).send('1004: Bir hata oluştu');
  }
});

module.exports = router;
