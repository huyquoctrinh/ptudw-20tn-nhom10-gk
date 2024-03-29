'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const items = [
      {
        "id" : 12,
        "pseudonym" : "Sage grouse"
      },
      {
        "id" : 13,
        "pseudonym" : "Monkey, rhesus"
      },
      {
        "id" : 14,
        "pseudonym" : "Prehensile-tailed porcupine"
      },
      {
        "id" : 15,
        "pseudonym" : "Anaconda"
      },
      {
        "id" : 16,
        "pseudonym" : "Long-tailed skua"
      },
      {
        "id" : 17,
        "pseudonym" : "Nine-banded armadillo"
      },
      {
        "id" : 58,
        "pseudonym" : "Writer"
      },
      {
        "id" : 69,
        "pseudonym" : null
      },
      {
        "id" : 61,
        "pseudonym" : "Laptopcute"
      },
      {
        "id" : 66,
        "pseudonym" : ""
      },
      {
        "id" : 74,
        "pseudonym" : null
      }
    ];
    items.forEach(item => {
      item.createdAt = Sequelize.literal('NOW()');
      item.updatedAt = Sequelize.literal('NOW()');
    });
    await queryInterface.bulkInsert('Writers', items, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Writers', null, {});
  }
};
