'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const items =[{
      "article_id": 1,
      "tag_id": 17
    }, {
      "article_id": 2,
      "tag_id": 4
    }, {
      "article_id": 3,
      "tag_id": 2
    }, {
      "article_id": 4,
      "tag_id": 1
    }, {
      "article_id": 5,
      "tag_id": 5
    }, {
      "article_id": 6,
      "tag_id": 3
    }, {
      "article_id": 7,
      "tag_id": 16
    }, {
      "article_id": 8,
      "tag_id": 12
    }, {
      "article_id": 9,
      "tag_id": 10
    }, {
      "article_id": 10,
      "tag_id": 12
    }, {
      "article_id": 11,
      "tag_id": 11
    }, {
      "article_id": 12,
      "tag_id": 11
    }, {
      "article_id": 13,
      "tag_id": 4
    }, {
      "article_id": 14,
      "tag_id": 17
    }, {
      "article_id": 15,
      "tag_id": 4
    }, {
      "article_id": 16,
      "tag_id": 5
    }, {
      "article_id": 17,
      "tag_id": 4
    }, {
      "article_id": 18,
      "tag_id": 1
    }, {
      "article_id": 19,
      "tag_id": 2
    }, {
      "article_id": 20,
      "tag_id": 17
    }, {
      "article_id": 21,
      "tag_id": 12
    }, {
      "article_id": 22,
      "tag_id": 1
    }, {
      "article_id": 23,
      "tag_id": 11
    }, {
      "article_id": 24,
      "tag_id": 16
    }, {
      "article_id": 25,
      "tag_id": 14
    }, {
      "article_id": 26,
      "tag_id": 9
    }, {
      "article_id": 27,
      "tag_id": 4
    }, {
      "article_id": 28,
      "tag_id": 16
    }, {
      "article_id": 29,
      "tag_id": 6
    }, {
      "article_id": 30,
      "tag_id": 12
    }];
    items.forEach(item => {
      item.createdAt = Sequelize.literal('NOW()');
      item.updatedAt = Sequelize.literal('NOW()');
    });
    await queryInterface.bulkInsert('ArticleTags', items, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('ArticleTags', null, {});
  }
};
