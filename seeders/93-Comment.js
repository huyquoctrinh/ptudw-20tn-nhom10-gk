'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const items =[
      {
        "content" : "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.",
        "article_id" : 3,
        "user_id" : 3
      },
      {
        "content" : "Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus.",
        "article_id" : 29,
        "user_id" : 3
      },
      {
        "content" : "In sagittis dui vel nisl.",
        "article_id" : 2,
        "user_id" : 4
      },
      {
        "content" : "Morbi a ipsum. Integer a nibh.",
        "article_id" : 22,
        "user_id" : 1
      },
      {
        "content" : "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.",
        "article_id" : 9,
        "user_id" : 3
      },
      {
        "content" : "Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante.",
        "article_id" : 5,
        "user_id" : 1
      },
      {
        "content" : "Fusce consequat. Nulla nisl.",
        "article_id" : 16,
        "user_id" : 2
      },
      {
        "content" : "Duis consequat dui nec nisi volutpat eleifend.",
        "article_id" : 20,
        "user_id" : 1
      },
      {
        "content" : "Fusce consequat. Nulla nisl.",
        "article_id" : 14,
        "user_id" : 5
      },
      {
        "content" : "Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.",
        "article_id" : 15,
        "user_id" : 2
      },
      {
        "content" : "ds",
        "article_id" : 2,
        "user_id" : 1
      },
      {
        "content" : "asa",
        "article_id" : 21,
        "user_id" : 1
      },
      {
        "content" : "f",
        "article_id" : 7,
        "user_id" : 1
      },
      {
        "content" : "k",
        "article_id" : 105,
        "user_id" : 1
      },
      {
        "content" : "binh luan cai coi",
        "article_id" : 105,
        "user_id" : 1
      },
      {
        "content" : "dfs",
        "article_id" : 56,
        "user_id" : 1
      },
      {
        "content" : "dfs",
        "article_id" : 56,
        "user_id" : 1
      },
      {
        "content" : "hello",
        "article_id" : 56,
        "user_id" : 1
      },
      {
        "content" : "hi",
        "article_id" : 56,
        "user_id" : 1
      },
      {
        "content" : "hello",
        "article_id" : 56,
        "user_id" : 1
      },
      {
        "content" : "123",
        "article_id" : 75,
        "user_id" : 1
      },
      {
        "content" : "123",
        "article_id" : 75,
        "user_id" : 1
      },
      {
        "content" : "a",
        "article_id" : 56,
        "user_id" : 1
      },
      {
        "content" : "ttt",
        "article_id" : 56,
        "user_id" : 64
      },
      {
        "content" : "thao",
        "article_id" : 56,
        "user_id" : 65
      },
      {
        "content" : "hello",
        "article_id" : 41,
        "user_id" : 64
      },
      {
        "content" : "Tui test",
        "article_id" : 41,
        "user_id" : 62
      },
      {
        "content" : "a",
        "article_id" : 41,
        "user_id" : 63
      }
    ];
    items.forEach(item => {
      item.createdAt = Sequelize.literal('NOW()');
      item.updatedAt = Sequelize.literal('NOW()');
    });
    await queryInterface.bulkInsert('Comments', items, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Comments', null, {});
  }
};
