module.exports = (sequelize, DataTypes) => {
    const Shipment = sequelize.define('Shipment', {
      shipment_date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      shipment_type: {
        type: DataTypes.ENUM('gelen', 'giden'),
        allowNull: false,
      },
      shipment_no: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      recipient: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      pallet_list: {
        type: DataTypes.JSON,
        allowNull: false,
      },
    });
  
    Shipment.associate = (models) => {
      // Sevkiyatın palet listesi var
      Shipment.hasMany(models.Pallet, { foreignKey: 'shipment_id' });
    };
  
    return Shipment;
  };
  