'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Writer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Writer.hasMany(models.Article, { foreignKey: 'writer_id' });
      Writer.belongsTo(models.User, { foreignKey : "id"});

    }
  }
  Writer.init({
    pseudonym: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Writer',
  });
  return Writer;
};