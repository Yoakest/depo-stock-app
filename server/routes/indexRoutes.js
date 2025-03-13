const express = require('express');
const router = express.Router();

const userRoutes = require('./usersRoutes');
const roleRoutes = require('./rolesRoutes');
const permissionsRoutes = require ('./permissionsRoutes');
const productsRoutes = require('./productsRoutes');
const categoriesRoutes = require('./categoriesRoutes');

router.use('/users', userRoutes);
router.use('/roles', roleRoutes);
router.use('/permissions', permissionsRoutes);
router.use('/products', productsRoutes);
router.use('/categories', categoriesRoutes);

module.exports = router;