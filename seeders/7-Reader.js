'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const items = [
      {
        "id" : 5,
        "expire_date" : "2023-07-10T00:00:00.000Z"
      },
      {
        "id" : 1,
        "expire_date" : "2023-07-17T00:00:00.000Z"
      },
      {
        "id" : 3,
        "expire_date" : "2023-09-04T00:00:00.000Z"
      },
      {
        "id" : 4,
        "expire_date" : "2023-07-12T14:58:15.251Z"
      },
      {
        "id" : 65,
        "expire_date" : "2023-07-12T14:58:15.251Z"
      },
      {
        "id" : 67,
        "expire_date" : "2023-07-12T14:58:15.251Z"
      },
      {
        "id" : 2,
        "expire_date" : "2023-07-24T00:00:00.000Z"
      },
      {
        "id" : 64,
        "expire_date" : "2023-07-09T14:58:15.251Z"
      },
      {
        "id" : 68,
        "expire_date" : "2023-07-19T14:58:15.251Z"
      },
      {
        "id" : 70,
        "expire_date" : null
      },
      {
        "id" : 72,
        "expire_date" : null
      },
      {
        "id" : 76,
        "expire_date" : null
      },
      {
        "id" : 77,
        "expire_date" : null
      },
      {
        "id" : 78,
        "expire_date" : null
      },
      {
        "id" : 79,
        "expire_date" : null
      },
      {
        "id" : 80,
        "expire_date" : null
      },
      {
        "id" : 75,
        "expire_date" : "2023-07-11T02:50:25.372Z"
      }
    ];
    items.forEach(item => {
      item.createdAt = Sequelize.literal('NOW()');
      item.updatedAt = Sequelize.literal('NOW()');
    });
    await queryInterface.bulkInsert('Readers', items, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Readers', null, {});
  }
};
