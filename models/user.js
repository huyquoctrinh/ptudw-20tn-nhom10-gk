'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Comment, { foreignKey: 'user_id'})
      User.hasMany(models.Editor, { foreignKey: "id"});
      User.hasMany(models.Admin, { foreignKey: "id"});
      User.hasMany(models.Reader, { foreignKey: 'id'});
      User.hasMany(models.Writer, { foreignKey: "id"});
    }
  }
  User.init({
    username: DataTypes.TEXT,
    password: DataTypes.TEXT,
    email: DataTypes.TEXT,
    name: DataTypes.TEXT,
    role: DataTypes.STRING,
    dob: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};