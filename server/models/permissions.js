module.exports = (sequelize, DataTypes) => {
    const Permission = sequelize.define('Permission', {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
  
    Permission.associate = (models) => {
      // Bir yetki birden fazla role sahip olabilir
      Permission.belongsToMany(models.Role, {
        through: 'RolePermission',
        foreignKey: 'permission_id',
        otherKey: 'role_id',
      });
    };
  
    return Permission;
  };
  