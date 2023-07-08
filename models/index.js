"use strict";

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const process = require("process");
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.json")[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 &&
      file !== basename &&
      file.slice(-3) === ".js" &&
      file.indexOf(".test.js") === -1
    );
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes
    );
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

// // Add fulltext-search index for description column
// const Article = require("./article");
// sequelize
//   .query(
//     `
//   CREATE INDEX idx_article_description_fts
//   ON "Article" USING gin(to_tsvector('vietnamese', "description"))
// `
//   )
//   .then(() => {
//     console.log('Fulltext-search index created for "description" column');
//   })
//   .catch((error) => {
//     console.error("Error creating fulltext-search index:", error);
//   });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
