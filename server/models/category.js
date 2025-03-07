module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define('Category', {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
  
    Category.associate = (models) => {
      // Bir kategori birden fazla ürüne sahip olabilir
      Category.hasMany(models.Product, { foreignKey: 'category_id' });
    };
  
    return Category;
  };
  