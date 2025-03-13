module.exports = (sequelize, DataTypes) => {
  const Pallet = sequelize.define('Pallet', {
    pallet_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    pallet_no: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    product_code: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    product_name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    quantity: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    location: {
      type: DataTypes.ENUM('Pharmastar', 'Logismart'),
      allowNull: false,
      defaultValue: 'Pharmastar'
    }
  });

  Pallet.associate = (models) => {
    // Her paletin bir sevkiyat bilgisi olabilir
    Pallet.belongsTo(models.Shipment, { foreignKey: 'shipment_id' });
  };

  return Pallet;
};
