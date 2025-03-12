module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    product_name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    product_code: {
      type: DataTypes.STRING(10),
      allowNull: false,
      unique: true,
    },
    brand: {
      type: DataTypes.STRING(25),
    },
    pallet_quantity: {
      type: DataTypes.STRING(20),
      defaultValue: 0,
    },
    package_quantity: {
      type: DataTypes.STRING(20),
      defaultValue: 0,
    },
    weight: {
      type: DataTypes.STRING(20),
    },
    total_stock: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    total_pallets: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    hide: {
      type: DataTypes.BOOLEAN,
      defaultValue: 0
    }
  });

  Product.associate = (models) => {
    Product.belongsToMany(models.Category, {
      through: models.ProductCategory,
      foreignKey: "product_id",
    });
  };

  return Product;
};
