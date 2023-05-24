'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const items = [
      { category_name: 'Kinh doanh', root_category_id: null },
      { category_name: 'Nông sản', root_category_id: 1 },
      { category_name: 'Hải sản', root_category_id: 1 },
      { category_name: 'Thời sự', root_category_id: null },
      { category_name: 'Sức khỏe', root_category_id: null },
      { category_name: 'Giải trí', root_category_id: null },
      
    ];
    items.forEach(item => {
      item.createdAt = Sequelize.literal('NOW()');
      item.updatedAt = Sequelize.literal('NOW()');
    });
    await queryInterface.bulkInsert('Categories', items, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Categories', null, {});
  }
};
