'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Comment.belongsTo(models.User, { foreignKey: 'user_id' });
      Comment.belongsTo(models.Article, { foreignKey: 'article_id' });
    }
  }
  Comment.init({
    content: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};