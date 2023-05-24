'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ArticleStatus extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ArticleStatus.belongsTo(models.Article, { foreignKey: 'article_id' });
      ArticleStatus.belongsTo(models.Editor, { foreignKey: 'editor_id' });
    }
  }
  ArticleStatus.init({
    reason: DataTypes.TEXT,
    status: DataTypes.STRING,
    
  }, {
    sequelize,
    modelName: 'ArticleStatus',
  });
  return ArticleStatus;
};