'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const items = [{
      "status": true,
      "reason": "suspendisse ornare consequat lectus in est risus",
      "article_id": 4,
      "editor_id": 10
    }, {
      "status": false,
      "reason": "nam tristique tortor eu pede",
      "article_id": 22,
      "editor_id": 9
    }, {
      "status": false,
      "reason": "lectus in est risus auctor sed tristique",
      "article_id": 27,
      "editor_id": 9
    }];
    items.forEach(item => {
      item.createdAt = Sequelize.literal('NOW()');
      item.updatedAt = Sequelize.literal('NOW()');
    });
    await queryInterface.bulkInsert('ArticleStatuses', items, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('ArticleStatuses', null, {});
  }
};
