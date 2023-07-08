"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Article extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Article.hasMany(models.Image, { foreignKey: "article_id" });
      Article.belongsToMany(models.Tag, {
        through: "ArticleTag",
        foreignKey: "article_id",
        otherKey: "tag_id",
      });
      Article.belongsTo(models.Category, { foreignKey: "category_id" });
      Article.belongsTo(models.Writer, { foreignKey: "writer_id" });
      Article.hasMany(models.ArticleStatus, { foreignKey: "article_id" });
      Article.hasMany(models.Comment, { foreignKey: "article_id" });
    }
  }
  Article.init(
    {
      name: DataTypes.TEXT,
      imagePath: DataTypes.STRING,
      title: DataTypes.TEXT,
      briefDescription: DataTypes.TEXT,
      description: DataTypes.TEXT,
      image_thumbnail: DataTypes.STRING,
      view_count: DataTypes.NUMERIC,
      is_delete: DataTypes.BOOLEAN,
      is_premium: DataTypes.BOOLEAN,
      is_featured: DataTypes.BOOLEAN,
      publishDay: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Article",
      // indexes: [
      //   {
      //     name: "idx_article_description_fts",
      //     fields: [
      //       sequelize.literal(`to_tsvector('vietnamese', "description")`),
      //     ],
      //     using: "gin",
      //   },
      // ],
    }
  );
  return Article;
};
