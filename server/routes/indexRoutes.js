const express = require('express');
const router = express.Router();

const userRoutes = require('./usersRoutes');
const roleRoutes = require('./rolesRoutes');
const permissionsRoutes = require ('./permissionsRoutes');

router.use('/users', userRoutes);
router.use('/roles', roleRoutes);
router.use('/permissions', permissionsRoutes);

module.exports = router;