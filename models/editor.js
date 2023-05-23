'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Editor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Editor.hasMany(models.Product, { foreignKey: 'TagId' });
    }
  }
  Editor.init({
  }, {
    sequelize,
    modelName: 'Editor',
  });
  return Editor;
};