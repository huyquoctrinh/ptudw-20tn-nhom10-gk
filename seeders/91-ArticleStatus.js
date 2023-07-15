'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const items =  [
      {
        "reason" : "suspendisse ornare consequat lectus in est risus",
        "status" : "Published",
        "article_id" : 4,
        "editor_id" : 10
      },
      {
        "reason" : "mmmm",
        "status" : "Rejected",
        "article_id" : 1,
        "editor_id" : 9
      },
      {
        "reason" : "dfsdf",
        "status" : "Published",
        "article_id" : 27,
        "editor_id" : 9
      },
      {
        "reason" : "lectus in est risus auctor sed tristique",
        "status" : "Draft",
        "article_id" : 26,
        "editor_id" : null
      },
      {
        "reason" : "",
        "status" : "Draft",
        "article_id" : 19,
        "editor_id" : null
      },
      {
        "reason" : "",
        "status" : "Published",
        "article_id" : 19,
        "editor_id" : 10
      },
      {
        "reason" : "dai qua",
        "status" : "Rejected",
        "article_id" : 2,
        "editor_id" : 69
      },
      {
        "reason" : "",
        "status" : "Published",
        "article_id" : 3,
        "editor_id" : 69
      },
      {
        "reason" : "",
        "status" : "Draft",
        "article_id" : 5,
        "editor_id" : null
      },
      {
        "reason" : "",
        "status" : "Draft",
        "article_id" : 3,
        "editor_id" : null
      },
      {
        "reason" : "",
        "status" : "Draft",
        "article_id" : 15,
        "editor_id" : null
      },
      {
        "reason" : "",
        "status" : "Draft",
        "article_id" : 17,
        "editor_id" : null
      },
      {
        "reason" : "",
        "status" : "Draft",
        "article_id" : 23,
        "editor_id" : null
      },
      {
        "reason" : "",
        "status" : "Draft",
        "article_id" : 26,
        "editor_id" : null
      },
      {
        "reason" : "",
        "status" : "Draft",
        "article_id" : 27,
        "editor_id" : null
      },
      {
        "reason" : "",
        "status" : "Draft",
        "article_id" : 33,
        "editor_id" : null
      },
      {
        "reason" : "",
        "status" : "Published",
        "article_id" : 36,
        "editor_id" : 9
      },
      {
        "reason" : "",
        "status" : "Draft",
        "article_id" : 29,
        "editor_id" : null
      },
      {
        "reason" : "dai qua",
        "status" : "Draft",
        "article_id" : 48,
        "editor_id" : null
      },
      {
        "reason" : "",
        "status" : "Draft",
        "article_id" : 52,
        "editor_id" : null
      },
      {
        "reason" : "",
        "status" : "Draft",
        "article_id" : 63,
        "editor_id" : null
      },
      {
        "reason" : "",
        "status" : "Draft",
        "article_id" : 67,
        "editor_id" : null
      },
      {
        "reason" : "",
        "status" : "Draft",
        "article_id" : 85,
        "editor_id" : null
      },
      {
        "reason" : "",
        "status" : "Draft",
        "article_id" : 76,
        "editor_id" : null
      },
      {
        "reason" : "",
        "status" : "Draft",
        "article_id" : 93,
        "editor_id" : null
      },
      {
        "reason" : "",
        "status" : "Draft",
        "article_id" : 96,
        "editor_id" : null
      },
      {
        "reason" : "",
        "status" : "Draft",
        "article_id" : 104,
        "editor_id" : null
      },
      {
        "reason" : null,
        "status" : "Published",
        "article_id" : 132,
        "editor_id" : null
      },
      {
        "reason" : "",
        "status" : "Published",
        "article_id" : 131,
        "editor_id" : null
      },
      {
        "reason" : null,
        "status" : "Draft",
        "article_id" : 133,
        "editor_id" : null
      },
      {
        "reason" : "",
        "status" : "Published",
        "article_id" : 130,
        "editor_id" : null
      },
      {
        "reason" : null,
        "status" : "Draft",
        "article_id" : 136,
        "editor_id" : null
      }
    ];
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
