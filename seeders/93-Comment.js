'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const items =[{
      "content": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.",
      "user_id": 3,
      "article_id": 3
    }, {
      "content": "Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus.",
      "user_id": 3,
      "article_id": 29
    }, {
      "content": "In sagittis dui vel nisl.",
      "user_id": 4,
      "article_id": 2
    }, {
      "content": "Morbi a ipsum. Integer a nibh.",
      "user_id": 1,
      "article_id": 22
    }, {
      "content": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.",
      "user_id": 3,
      "article_id": 9
    }, {
      "content": "Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante.",
      "user_id": 1,
      "article_id": 5
    }, {
      "content": "Fusce consequat. Nulla nisl.",
      "user_id": 2,
      "article_id": 16
    }, {
      "content": "Duis consequat dui nec nisi volutpat eleifend.",
      "user_id": 1,
      "article_id": 20
    }, {
      "content": "Fusce consequat. Nulla nisl.",
      "user_id": 5,
      "article_id": 14
    }, {
      "content": "Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.",
      "user_id": 2,
      "article_id": 15
    }];
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
