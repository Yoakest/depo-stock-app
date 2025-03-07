module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('Product', {
      product_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      product_code: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      brand: {
        type: DataTypes.STRING,
      },
      pallet_quantity: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      package_quantity: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      weight: {
        type: DataTypes.DECIMAL,
      },
      total_stock: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      total_pallets: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      category_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Categories',
          key: 'id',
        },
      },
    });
  
    Product.associate = (models) => {
      // Ürünün bir kategorisi olabilir
      Product.belongsTo(models.Category, { foreignKey: 'category_id' });
    };
  
    return Product;
  };
  