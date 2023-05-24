'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const items = [{
      "imagePath": "/img/article/img-1.png",
      "name": "consequat",
      "article_id": 16
    }, {
      "imagePath": "/img/article/img-5.png",
      "name": "non",
      "article_id": 9
    }, {
      "imagePath": "/img/article/img-4.png",
      "name": "tincidunt",
      "article_id": 29
    }, {
      "imagePath": "/img/article/img-7.png",
      "name": "augue",
      "article_id": 7
    }, {
      "imagePath": "/img/article/img-6.png",
      "name": "purus",
      "article_id": 21
    }, {
      "imagePath": "/img/article/img-9.png",
      "name": "sit",
      "article_id": 1
    }, {
      "imagePath": "/img/article/img-2.png",
      "name": "tellus",
      "article_id": 30
    }, {
      "imagePath": "/img/article/img-7.png",
      "name": "sed",
      "article_id": 13
    }, {
      "imagePath": "/img/article/img-2.png",
      "name": "mattis",
      "article_id": 24
    }, {
      "imagePath": "/img/article/img-9.png",
      "name": "velit",
      "article_id": 11
    }, {
      "imagePath": "/img/article/img-5.png",
      "name": "et",
      "article_id": 27
    }, {
      "imagePath": "/img/article/img-3.png",
      "name": "blandit",
      "article_id": 3
    }, {
      "imagePath": "/img/article/img-9.png",
      "name": "adipiscing",
      "article_id": 5
    }, {
      "imagePath": "/img/article/img-5.png",
      "name": "orci",
      "article_id": 19
    }, {
      "imagePath": "/img/article/img-9.png",
      "name": "sit",
      "article_id": 2
    }, {
      "imagePath": "/img/article/img-6.png",
      "name": "sed",
      "article_id": 25
    }, {
      "imagePath": "/img/article/img-3.png",
      "name": "sem",
      "article_id": 16
    }, {
      "imagePath": "/img/article/img-6.png",
      "name": "est",
      "article_id": 22
    }, {
      "imagePath": "/img/article/img-4.png",
      "name": "sem",
      "article_id": 23
    }, {
      "imagePath": "/img/article/img-6.png",
      "name": "in",
      "article_id": 21
    }, {
      "imagePath": "/img/article/img-5.png",
      "name": "rhoncus",
      "article_id": 19
    }, {
      "imagePath": "/img/article/img-9.png",
      "name": "ante",
      "article_id": 4
    }, {
      "imagePath": "/img/article/img-8.png",
      "name": "quam",
      "article_id": 29
    }, {
      "imagePath": "/img/article/img-5.png",
      "name": "aenean",
      "article_id": 5
    }, {
      "imagePath": "/img/article/img-8.png",
      "name": "ac",
      "article_id": 29
    }, {
      "imagePath": "/img/article/img-2.png",
      "name": "nam",
      "article_id": 7
    }, {
      "imagePath": "/img/article/img-3.png",
      "name": "mattis",
      "article_id": 13
    }, {
      "imagePath": "/img/article/img-5.png",
      "name": "neque",
      "article_id": 8
    }, {
      "imagePath": "/img/article/img-3.png",
      "name": "orci",
      "article_id": 20
    }, {
      "imagePath": "/img/article/img-7.png",
      "name": "posuere",
      "article_id": 16
    }, {
      "imagePath": "/img/article/img-5.png",
      "name": "morbi",
      "article_id": 27
    }, {
      "imagePath": "/img/article/img-2.png",
      "name": "urna",
      "article_id": 13
    }, {
      "imagePath": "/img/article/img-3.png",
      "name": "suspendisse",
      "article_id": 21
    }, {
      "imagePath": "/img/article/img-3.png",
      "name": "in",
      "article_id": 23
    }, {
      "imagePath": "/img/article/img-5.png",
      "name": "sapien",
      "article_id": 5
    }, {
      "imagePath": "/img/article/img-2.png",
      "name": "sed",
      "article_id": 8
    }, {
      "imagePath": "/img/article/img-3.png",
      "name": "faucibus",
      "article_id": 22
    }, {
      "imagePath": "/img/article/img-6.png",
      "name": "sociis",
      "article_id": 25
    }, {
      "imagePath": "/img/article/img-1.png",
      "name": "quam",
      "article_id": 21
    }, {
      "imagePath": "/img/article/img-6.png",
      "name": "sapien",
      "article_id": 30
    }];
    items.forEach(item => {
      item.createdAt = Sequelize.literal('NOW()');
      item.updatedAt = Sequelize.literal('NOW()');
    });
    await queryInterface.bulkInsert('Images', items, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Images', null, {});
  }
};
