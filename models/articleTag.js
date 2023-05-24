'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ArticleTag extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ArticleTag.belongsTo(models.Tag, { foreignKey: 'tag_id' });
      ArticleTag.belongsTo(models.Article, { foreignKey: 'article_id' });
    }
  }
  ArticleTag.init({
  }, {
    sequelize,
    modelName: 'ArticleTag',
  });
  return ArticleTag;
};