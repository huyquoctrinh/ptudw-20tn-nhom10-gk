'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const items = [
      {"id" : 1, "expire_date": "2023-06-30"},
      {"id" : 2, "expire_date": "2023-06-14"},
      {"id" : 3, "expire_date": "2023-06-15"},
      {"id" : 4, "expire_date": "2023-06-16"},
      {"id" : 5, "expire_date": "2023-06-17"},
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
