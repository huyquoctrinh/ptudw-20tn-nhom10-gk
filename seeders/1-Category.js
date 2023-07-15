'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const items = [
      {
        "category_name" : "Thời sự",
        "root_category_id" : null
      },
      {
        "category_name" : "Sức khỏe",
        "root_category_id" : null
      },
      {
        "category_name" : "Giải trí",
        "root_category_id" : null
      },
      {
        "category_name" : "Kinh Doanh",
        "root_category_id" : null
      },
      {
        "category_name" : "Chứng khoán",
        "root_category_id" : 1
      },
      {
        "category_name" : "Thế giới",
        "root_category_id" : null
      },
      {
        "category_name" : "Chính trị",
        "root_category_id" : 4
      },
      {
        "category_name" : "Giao thông",
        "root_category_id" : 4
      },
      {
        "category_name" : "Giáo dục",
        "root_category_id" : null
      },
      {
        "category_name" : "Doanh nghiệp",
        "root_category_id" : 1
      }
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
