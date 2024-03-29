'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reader extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Reader.belongsTo(models.User, { foreignKey : "id", targetKey: "id"});
    }
  }
  Reader.init({
    expire_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Reader',
  });
  return Reader;
};