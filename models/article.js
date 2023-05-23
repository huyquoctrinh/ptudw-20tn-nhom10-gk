'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Article extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Article.hasMany(models.Product, { foreignKey: 'ArticleId' });
    }
  }
  Article.init({
    name: DataTypes.TEXT,
    imagePath: DataTypes.STRING,
    title: DataTypes.TEXT,
    briedDecription: DataTypes.TEXT,
    description: DataTypes.TEXT,
    image_thumbnail: DataTypes.STRING,
    view_count: DataTypes.DECIMAL,
    is_delete: DataTypes.BOOLEAN,
    is_premium: DataTypes.BOOLEAN,
    is_featured: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Article',
  });
  return Article;
};