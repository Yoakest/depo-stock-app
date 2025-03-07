module.exports = (sequelize, DataTypes) => {
    const Pallet = sequelize.define('Pallet', {
      pallet_no: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      product_code: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      product_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      location: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
  
    Pallet.associate = (models) => {
      // Her paletin bir sevkiyat bilgisi olabilir
      Pallet.belongsTo(models.Shipment, { foreignKey: 'shipment_id' });
    };
  
    return Pallet;
  };
  