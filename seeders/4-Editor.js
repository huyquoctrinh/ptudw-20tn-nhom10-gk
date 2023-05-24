'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const items = [
      {"id" :6, "category_id": 1},
      {"id" :7, "category_id": 2},
      {"id" :8, "category_id": 3},
      {"id" :9, "category_id": 4},
      {"id" : 10, "category_id": 5},
      {"id" : 11, "category_id": 6},
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
