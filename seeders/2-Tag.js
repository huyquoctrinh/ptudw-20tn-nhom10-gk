'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const items = 
      [{
        "tag_name": "lorem"
      }, {
        "tag_name": "vel"
      }, {
        "tag_name": "at"
      }, {
        "tag_name": "sapien"
      }, {
        "tag_name": "faucibus"
      }, {
        "tag_name": "primis"
      }, {
        "tag_name": "cras"
      }, {
        "tag_name": "nullam"
      }, {
        "tag_name": "id"
      }, {
        "tag_name": "dis"
      }, {
        "tag_name": "in"
      }, {
        "tag_name": "arcu"
      }, {
        "tag_name": "vel"
      }, {
        "tag_name": "aliquet"
      }, {
        "tag_name": "parturient"
      }, {
        "tag_name": "vitae"
      }, {
        "tag_name": "dui"
      }, {
        "tag_name": "sit"
      }, {
        "tag_name": "potenti"
      }, {
        "tag_name": "in"
      }];
    items.forEach(item => {
      item.createdAt = Sequelize.literal('NOW()');
      item.updatedAt = Sequelize.literal('NOW()');
    });
    await queryInterface.bulkInsert('Tags', items, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Tags', null, {});
  }
};
