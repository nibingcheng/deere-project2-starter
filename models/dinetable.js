'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DineTable extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      DineTable.belongsTo(models.User, { foreignKey: "userId" });
      DineTable.belongsToMany(models.Food, { 
        through: 'Order',
        foreignKey: "dineTableId",
        otherKey: 'foodId' 
      });
    }
  };
  DineTable.init({
    name: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'DineTable',
  });
  return DineTable;
};