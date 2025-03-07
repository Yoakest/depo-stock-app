const Sequelize = require('sequelize');
const config = require('../config/config');
const fs = require('fs');
const path = require('path');
const db = {};

const sequelize = new Sequelize(config.development);



fs.readdirSync(__dirname)
  .filter((file) => file !== 'index.js')
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

db.sequelize = sequelize;
db.Sequelize = Sequelize;


Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

module.exports = db;