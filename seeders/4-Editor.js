'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const items =  [
      {
        "id" : 6,
        "category_id" : 1
      },
      {
        "id" : 8,
        "category_id" : 3
      },
      {
        "id" : 9,
        "category_id" : 4
      },
      {
        "id" : 10,
        "category_id" : 5
      },
      {
        "id" : 11,
        "category_id" : 6
      },
      {
        "id" : 24,
        "category_id" : 7
      },
      {
        "id" : 26,
        "category_id" : 9
      },
      {
        "id" : 27,
        "category_id" : 10
      },
      {
        "id" : 28,
        "category_id" : 2
      },
      {
        "id" : 29,
        "category_id" : 4
      },
      {
        "id" : 44,
        "category_id" : 7
      },
      {
        "id" : 62,
        "category_id" : 5
      },
      {
        "id" : 69,
        "category_id" : 2
      },
      {
        "id" : 25,
        "category_id" : 7
      },
      {
        "id" : 7,
        "category_id" : 7
      },
      {
        "id" : 71,
        "category_id" : null
      }
    ];
    items.forEach(item => {
      item.createdAt = Sequelize.literal('NOW()');
      item.updatedAt = Sequelize.literal('NOW()');
    });
    await queryInterface.bulkInsert('Editors', items, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Editors', null, {});
  }
};
