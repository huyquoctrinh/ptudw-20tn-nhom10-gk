'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const items =
      [
        {
          "article_id" : 1,
          "tag_id" : 17
        },
        {
          "article_id" : 2,
          "tag_id" : 4
        },
        {
          "article_id" : 3,
          "tag_id" : 2
        },
        {
          "article_id" : 4,
          "tag_id" : 1
        },
        {
          "article_id" : 5,
          "tag_id" : 5
        },
        {
          "article_id" : 6,
          "tag_id" : 3
        },
        {
          "article_id" : 7,
          "tag_id" : 16
        },
        {
          "article_id" : 8,
          "tag_id" : 12
        },
        {
          "article_id" : 9,
          "tag_id" : 10
        },
        {
          "article_id" : 10,
          "tag_id" : 12
        },
        {
          "article_id" : 11,
          "tag_id" : 11
        },
        {
          "article_id" : 12,
          "tag_id" : 11
        },
        {
          "article_id" : 13,
          "tag_id" : 4
        },
        {
          "article_id" : 14,
          "tag_id" : 17
        },
        {
          "article_id" : 15,
          "tag_id" : 4
        },
        {
          "article_id" : 16,
          "tag_id" : 5
        },
        {
          "article_id" : 17,
          "tag_id" : 4
        },
        {
          "article_id" : 18,
          "tag_id" : 1
        },
        {
          "article_id" : 19,
          "tag_id" : 2
        },
        {
          "article_id" : 20,
          "tag_id" : 17
        },
        {
          "article_id" : 21,
          "tag_id" : 12
        },
        {
          "article_id" : 22,
          "tag_id" : 1
        },
        {
          "article_id" : 23,
          "tag_id" : 11
        },
        {
          "article_id" : 24,
          "tag_id" : 16
        },
        {
          "article_id" : 25,
          "tag_id" : 14
        },
        {
          "article_id" : 26,
          "tag_id" : 9
        },
        {
          "article_id" : 27,
          "tag_id" : 4
        },
        {
          "article_id" : 28,
          "tag_id" : 16
        },
        {
          "article_id" : 29,
          "tag_id" : 6
        },
        {
          "article_id" : 30,
          "tag_id" : 12
        },
        {
          "article_id" : 27,
          "tag_id" : 2
        },
        {
          "article_id" : 27,
          "tag_id" : 3
        },
        {
          "article_id" : 71,
          "tag_id" : 40
        },
        {
          "article_id" : 33,
          "tag_id" : 3
        },
        {
          "article_id" : 36,
          "tag_id" : 1
        },
        {
          "article_id" : 81,
          "tag_id" : 1
        },
        {
          "article_id" : 3,
          "tag_id" : 1
        },
        {
          "article_id" : 52,
          "tag_id" : 1
        },
        {
          "article_id" : 74,
          "tag_id" : 3
        },
        {
          "article_id" : 31,
          "tag_id" : 1
        },
        {
          "article_id" : 32,
          "tag_id" : 2
        },
        {
          "article_id" : 34,
          "tag_id" : 4
        },
        {
          "article_id" : 35,
          "tag_id" : 5
        },
        {
          "article_id" : 36,
          "tag_id" : 6
        },
        {
          "article_id" : 37,
          "tag_id" : 7
        },
        {
          "article_id" : 38,
          "tag_id" : 8
        },
        {
          "article_id" : 39,
          "tag_id" : 9
        },
        {
          "article_id" : 40,
          "tag_id" : 10
        },
        {
          "article_id" : 41,
          "tag_id" : 11
        },
        {
          "article_id" : 42,
          "tag_id" : 12
        },
        {
          "article_id" : 43,
          "tag_id" : 13
        },
        {
          "article_id" : 44,
          "tag_id" : 14
        },
        {
          "article_id" : 45,
          "tag_id" : 15
        },
        {
          "article_id" : 46,
          "tag_id" : 16
        },
        {
          "article_id" : 47,
          "tag_id" : 17
        },
        {
          "article_id" : 48,
          "tag_id" : 18
        },
        {
          "article_id" : 51,
          "tag_id" : 19
        },
        {
          "article_id" : 50,
          "tag_id" : 20
        },
        {
          "article_id" : 49,
          "tag_id" : 21
        },
        {
          "article_id" : 57,
          "tag_id" : 22
        },
        {
          "article_id" : 52,
          "tag_id" : 23
        },
        {
          "article_id" : 53,
          "tag_id" : 24
        },
        {
          "article_id" : 54,
          "tag_id" : 21
        },
        {
          "article_id" : 55,
          "tag_id" : 14
        },
        {
          "article_id" : 56,
          "tag_id" : 27
        },
        {
          "article_id" : 58,
          "tag_id" : 28
        },
        {
          "article_id" : 59,
          "tag_id" : 29
        },
        {
          "article_id" : 60,
          "tag_id" : 30
        },
        {
          "article_id" : 61,
          "tag_id" : 31
        },
        {
          "article_id" : 62,
          "tag_id" : 32
        },
        {
          "article_id" : 63,
          "tag_id" : 33
        },
        {
          "article_id" : 64,
          "tag_id" : 34
        },
        {
          "article_id" : 65,
          "tag_id" : 35
        },
        {
          "article_id" : 67,
          "tag_id" : 36
        },
        {
          "article_id" : 68,
          "tag_id" : 37
        },
        {
          "article_id" : 69,
          "tag_id" : 38
        },
        {
          "article_id" : 70,
          "tag_id" : 39
        },
        {
          "article_id" : 72,
          "tag_id" : 40
        },
        {
          "article_id" : 73,
          "tag_id" : 2
        },
        {
          "article_id" : 75,
          "tag_id" : 4
        },
        {
          "article_id" : 76,
          "tag_id" : 5
        },
        {
          "article_id" : 77,
          "tag_id" : 6
        },
        {
          "article_id" : 78,
          "tag_id" : 7
        },
        {
          "article_id" : 79,
          "tag_id" : 8
        },
        {
          "article_id" : 80,
          "tag_id" : 9
        },
        {
          "article_id" : 84,
          "tag_id" : 10
        },
        {
          "article_id" : 82,
          "tag_id" : 11
        },
        {
          "article_id" : 83,
          "tag_id" : 12
        },
        {
          "article_id" : 85,
          "tag_id" : 13
        },
        {
          "article_id" : 86,
          "tag_id" : 14
        },
        {
          "article_id" : 87,
          "tag_id" : 15
        },
        {
          "article_id" : 88,
          "tag_id" : 16
        },
        {
          "article_id" : 89,
          "tag_id" : 17
        },
        {
          "article_id" : 90,
          "tag_id" : 18
        },
        {
          "article_id" : 91,
          "tag_id" : 19
        },
        {
          "article_id" : 92,
          "tag_id" : 20
        },
        {
          "article_id" : 93,
          "tag_id" : 21
        },
        {
          "article_id" : 94,
          "tag_id" : 22
        },
        {
          "article_id" : 95,
          "tag_id" : 23
        },
        {
          "article_id" : 96,
          "tag_id" : 24
        },
        {
          "article_id" : 97,
          "tag_id" : 27
        },
        {
          "article_id" : 98,
          "tag_id" : 28
        },
        {
          "article_id" : 99,
          "tag_id" : 29
        },
        {
          "article_id" : 100,
          "tag_id" : 30
        },
        {
          "article_id" : 101,
          "tag_id" : 31
        },
        {
          "article_id" : 102,
          "tag_id" : 32
        },
        {
          "article_id" : 103,
          "tag_id" : 33
        },
        {
          "article_id" : 104,
          "tag_id" : 37
        }
      ]
      
    items.forEach(item => {
      item.createdAt = Sequelize.literal('NOW()');
      item.updatedAt = Sequelize.literal('NOW()');
    });
    await queryInterface.bulkInsert('ArticleTags', items, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('ArticleTags', null, {});
  }
};
