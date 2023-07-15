'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const items = [
      {
        "imagePath" : "\/img\/article\/img-1.png",
        "name" : "consequat",
        "article_id" : 1
      },
      {
        "imagePath" : "\/img\/article\/img-5.png",
        "name" : "non",
        "article_id" : 2
      },
      {
        "imagePath" : "\/img\/article\/img-4.png",
        "name" : "tincidunt",
        "article_id" : 3
      },
      {
        "imagePath" : "\/img\/article\/img-7.png",
        "name" : "augue",
        "article_id" : 4
      },
      {
        "imagePath" : "\/img\/article\/img-6.png",
        "name" : "purus",
        "article_id" : 5
      },
      {
        "imagePath" : "\/img\/article\/img-9.png",
        "name" : "sit",
        "article_id" : 6
      },
      {
        "imagePath" : "\/img\/article\/img-2.png",
        "name" : "tellus",
        "article_id" : 7
      },
      {
        "imagePath" : "\/img\/article\/img-7.png",
        "name" : "sed",
        "article_id" : 8
      },
      {
        "imagePath" : "\/img\/article\/img-2.png",
        "name" : "mattis",
        "article_id" : 9
      },
      {
        "imagePath" : "\/img\/article\/img-9.png",
        "name" : "velit",
        "article_id" : 10
      },
      {
        "imagePath" : "\/img\/article\/img-5.png",
        "name" : "et",
        "article_id" : 11
      },
      {
        "imagePath" : "\/img\/article\/img-3.png",
        "name" : "blandit",
        "article_id" : 12
      },
      {
        "imagePath" : "\/img\/article\/img-9.png",
        "name" : "adipiscing",
        "article_id" : 13
      },
      {
        "imagePath" : "\/img\/article\/img-5.png",
        "name" : "orci",
        "article_id" : 14
      },
      {
        "imagePath" : "\/img\/article\/img-9.png",
        "name" : "sit",
        "article_id" : 15
      },
      {
        "imagePath" : "\/img\/article\/img-3.png",
        "name" : "orci",
        "article_id" : 29
      },
      {
        "imagePath" : "\/img\/article\/img-1.png",
        "name" : "quam",
        "article_id" : 21
      },
      {
        "imagePath" : "\/img\/article\/img-1.png",
        "name" : "quam",
        "article_id" : 21
      },
      {
        "imagePath" : "\/img\/article\/img-6.png",
        "name" : "sed",
        "article_id" : 16
      },
      {
        "imagePath" : "\/img\/article\/img-3.png",
        "name" : "sem",
        "article_id" : 17
      },
      {
        "imagePath" : "\/img\/article\/img-6.png",
        "name" : "est",
        "article_id" : 18
      },
      {
        "imagePath" : "\/img\/article\/img-4.png",
        "name" : "sem",
        "article_id" : 19
      },
      {
        "imagePath" : "\/img\/article\/img-6.png",
        "name" : "in",
        "article_id" : 20
      },
      {
        "imagePath" : "\/img\/article\/img-5.png",
        "name" : "rhoncus",
        "article_id" : 21
      },
      {
        "imagePath" : "\/img\/article\/img-9.png",
        "name" : "ante",
        "article_id" : 22
      },
      {
        "imagePath" : "\/img\/article\/img-8.png",
        "name" : "quam",
        "article_id" : 23
      },
      {
        "imagePath" : "\/img\/article\/img-5.png",
        "name" : "aenean",
        "article_id" : 24
      },
      {
        "imagePath" : "\/img\/article\/img-8.png",
        "name" : "ac",
        "article_id" : 25
      },
      {
        "imagePath" : "\/img\/article\/img-2.png",
        "name" : "nam",
        "article_id" : 26
      },
      {
        "imagePath" : "\/img\/article\/img-3.png",
        "name" : "mattis",
        "article_id" : 27
      },
      {
        "imagePath" : "\/img\/article\/img-5.png",
        "name" : "neque",
        "article_id" : 28
      },
      {
        "imagePath" : "\/img\/article\/img-7.png",
        "name" : "posuere",
        "article_id" : 30
      },
      {
        "imagePath" : "\/img\/article\/img-5.png",
        "name" : "morbi",
        "article_id" : 31
      },
      {
        "imagePath" : "\/img\/article\/img-2.png",
        "name" : "urna",
        "article_id" : 32
      },
      {
        "imagePath" : "\/img\/article\/img-3.png",
        "name" : "suspendisse",
        "article_id" : 33
      },
      {
        "imagePath" : "\/img\/article\/img-3.png",
        "name" : "in",
        "article_id" : 34
      },
      {
        "imagePath" : "\/img\/article\/img-5.png",
        "name" : "sapien",
        "article_id" : 35
      },
      {
        "imagePath" : "\/img\/article\/img-2.png",
        "name" : "sed",
        "article_id" : 36
      },
      {
        "imagePath" : "\/img\/article\/img-3.png",
        "name" : "faucibus",
        "article_id" : 37
      },
      {
        "imagePath" : "\/img\/article\/img-6.png",
        "name" : "sociis",
        "article_id" : 38
      },
      {
        "imagePath" : "\/img\/article\/img-1.png",
        "name" : "quam",
        "article_id" : 39
      },
      {
        "imagePath" : "\/img\/article\/img-6.png",
        "name" : "sapien",
        "article_id" : 40
      },
      {
        "imagePath" : "\/img\/article\/img-1.png",
        "name" : "quam",
        "article_id" : 41
      },
      {
        "imagePath" : "\/img\/article\/img-1.png",
        "name" : "quam",
        "article_id" : 42
      },
      {
        "imagePath" : "\/img\/article\/img-1.png",
        "name" : "quam",
        "article_id" : 43
      },
      {
        "imagePath" : "\/img\/article\/img-1.png",
        "name" : "quam",
        "article_id" : 44
      },
      {
        "imagePath" : "\/img\/article\/img-1.png",
        "name" : "quam",
        "article_id" : 45
      },
      {
        "imagePath" : "\/img\/article\/img-1.png",
        "name" : "quam",
        "article_id" : 46
      },
      {
        "imagePath" : "\/img\/article\/img-1.png",
        "name" : "quam",
        "article_id" : 47
      },
      {
        "imagePath" : "\/img\/article\/img-1.png",
        "name" : "quam",
        "article_id" : 48
      },
      {
        "imagePath" : "\/img\/article\/img-1.png",
        "name" : "quam",
        "article_id" : 49
      },
      {
        "imagePath" : "\/img\/article\/img-1.png",
        "name" : "quam",
        "article_id" : 50
      },
      {
        "imagePath" : "\/img\/article\/img-1.png",
        "name" : "quam",
        "article_id" : 51
      },
      {
        "imagePath" : "\/img\/article\/img-1.png",
        "name" : "quam",
        "article_id" : 52
      },
      {
        "imagePath" : "\/img\/article\/img-1.png",
        "name" : "quam",
        "article_id" : 53
      },
      {
        "imagePath" : "\/img\/article\/img-1.png",
        "name" : "quam",
        "article_id" : 54
      },
      {
        "imagePath" : "\/img\/article\/img-1.png",
        "name" : "quam",
        "article_id" : 55
      },
      {
        "imagePath" : "\/img\/article\/img-1.png",
        "name" : "quam",
        "article_id" : 56
      },
      {
        "imagePath" : "\/img\/article\/img-1.png",
        "name" : "quam",
        "article_id" : 57
      },
      {
        "imagePath" : "\/img\/article\/img-1.png",
        "name" : "quam",
        "article_id" : 58
      },
      {
        "imagePath" : "\/img\/article\/img-1.png",
        "name" : "quam",
        "article_id" : 59
      },
      {
        "imagePath" : "\/img\/article\/img-1.png",
        "name" : "quam",
        "article_id" : 60
      },
      {
        "imagePath" : "\/img\/article\/img-1.png",
        "name" : "quam",
        "article_id" : 61
      },
      {
        "imagePath" : "\/img\/article\/img-1.png",
        "name" : "quam",
        "article_id" : 62
      },
      {
        "imagePath" : "\/img\/article\/img-1.png",
        "name" : "quam",
        "article_id" : 63
      },
      {
        "imagePath" : "\/img\/article\/img-1.png",
        "name" : "quam",
        "article_id" : 64
      },
      {
        "imagePath" : "\/img\/article\/img-1.png",
        "name" : "quam",
        "article_id" : 65
      },
      {
        "imagePath" : "\/img\/article\/img-1.png",
        "name" : "quam",
        "article_id" : 67
      },
      {
        "imagePath" : "\/img\/article\/img-1.png",
        "name" : "quam",
        "article_id" : 68
      },
      {
        "imagePath" : "\/img\/article\/img-1.png",
        "name" : "quam",
        "article_id" : 69
      },
      {
        "imagePath" : "\/img\/article\/img-1.png",
        "name" : "quam",
        "article_id" : 70
      },
      {
        "imagePath" : "\/img\/article\/img-1.png",
        "name" : "quam",
        "article_id" : 81
      },
      {
        "imagePath" : "\/img\/article\/img-1.png",
        "name" : "quam",
        "article_id" : 71
      },
      {
        "imagePath" : "\/img\/article\/img-1.png",
        "name" : "quam",
        "article_id" : 72
      },
      {
        "imagePath" : "\/img\/article\/img-1.png",
        "name" : "quam",
        "article_id" : 73
      },
      {
        "imagePath" : "\/img\/article\/img-1.png",
        "name" : "quam",
        "article_id" : 74
      },
      {
        "imagePath" : "\/img\/article\/img-1.png",
        "name" : "quam",
        "article_id" : 75
      },
      {
        "imagePath" : "\/img\/article\/img-1.png",
        "name" : "quam",
        "article_id" : 76
      },
      {
        "imagePath" : "\/img\/article\/img-1.png",
        "name" : "quam",
        "article_id" : 77
      },
      {
        "imagePath" : "\/img\/article\/img-1.png",
        "name" : "quam",
        "article_id" : 78
      },
      {
        "imagePath" : "\/img\/article\/img-1.png",
        "name" : "quam",
        "article_id" : 79
      },
      {
        "imagePath" : "\/img\/article\/img-1.png",
        "name" : "quam",
        "article_id" : 80
      },
      {
        "imagePath" : "public\\uploads\\image-1688798095425-253966315.jpg",
        "name" : "image-1688798095425-253966315.jpg",
        "article_id" : null
      },
      {
        "imagePath" : "public\\uploads\\image-1688798962788-426092460.jpg",
        "name" : "image-1688798962788-426092460.jpg",
        "article_id" : null
      },
      {
        "imagePath" : "\/img\/article\/img-1.png",
        "name" : "quam",
        "article_id" : 82
      },
      {
        "imagePath" : "\/img\/article\/img-1.png",
        "name" : "quam",
        "article_id" : 83
      },
      {
        "imagePath" : "\/img\/article\/img-1.png",
        "name" : "quam",
        "article_id" : 84
      },
      {
        "imagePath" : "\/img\/article\/img-1.png",
        "name" : "quam",
        "article_id" : 85
      },
      {
        "imagePath" : "\/img\/article\/img-1.png",
        "name" : "quam",
        "article_id" : 86
      },
      {
        "imagePath" : "\/img\/article\/img-1.png",
        "name" : "quam",
        "article_id" : 87
      },
      {
        "imagePath" : "\/img\/article\/img-1.png",
        "name" : "quam",
        "article_id" : 88
      },
      {
        "imagePath" : "\/img\/article\/img-1.png",
        "name" : "quam",
        "article_id" : 89
      },
      {
        "imagePath" : "\/img\/article\/img-1.png",
        "name" : "quam",
        "article_id" : 90
      },
      {
        "imagePath" : "\/img\/article\/img-1.png",
        "name" : "quam",
        "article_id" : 91
      },
      {
        "imagePath" : "\/img\/article\/img-1.png",
        "name" : "quam",
        "article_id" : 92
      },
      {
        "imagePath" : "\/img\/article\/img-1.png",
        "name" : "quam",
        "article_id" : 93
      },
      {
        "imagePath" : "\/img\/article\/img-1.png",
        "name" : "quam",
        "article_id" : 94
      },
      {
        "imagePath" : "\/img\/article\/img-1.png",
        "name" : "quam",
        "article_id" : 95
      },
      {
        "imagePath" : "\/img\/article\/img-1.png",
        "name" : "quam",
        "article_id" : 96
      },
      {
        "imagePath" : "\/img\/article\/img-1.png",
        "name" : "quam",
        "article_id" : 97
      },
      {
        "imagePath" : "\/img\/article\/img-1.png",
        "name" : "quam",
        "article_id" : 98
      },
      {
        "imagePath" : "\/img\/article\/img-1.png",
        "name" : "quam",
        "article_id" : 99
      },
      {
        "imagePath" : "\/img\/article\/img-1.png",
        "name" : "quam",
        "article_id" : 100
      },
      {
        "imagePath" : "\/img\/article\/img-1.png",
        "name" : "quam",
        "article_id" : 101
      },
      {
        "imagePath" : "\/img\/article\/img-1.png",
        "name" : "quam",
        "article_id" : 102
      },
      {
        "imagePath" : "\/img\/article\/img-1.png",
        "name" : "quam",
        "article_id" : 103
      },
      {
        "imagePath" : "\/img\/article\/img-1.png",
        "name" : "quam",
        "article_id" : 104
      },
      {
        "imagePath" : "\/uploads\/image-1688799455099-553899478.png",
        "name" : "image-1688799455099-553899478.png",
        "article_id" : null
      },
      {
        "imagePath" : "\/img\/article\/img-1.png",
        "name" : "quam",
        "article_id" : 66
      },
      {
        "imagePath" : "\/img\/article\/img-1.png",
        "name" : "quam",
        "article_id" : null
      },
      {
        "imagePath" : "\/uploads\/image-1688799654567-273283156.png",
        "name" : "image-1688799654567-273283156.png",
        "article_id" : 116
      },
      {
        "imagePath" : "image-1688797196594-443576407.jpg",
        "name" : "Messenger đang bị lỗi không gửi được hình ảnh, video trên diện rộng",
        "article_id" : null
      },
      {
        "imagePath" : "\/uploads\/image-1688830951756-424244960.png",
        "name" : "image-1688830951756-424244960.png",
        "article_id" : 117
      },
      {
        "imagePath" : "\/uploads\/image-1688839144650-71503222.png",
        "name" : "image-1688839144650-71503222.png",
        "article_id" : 124
      },
      {
        "imagePath" : "\/uploads\/image-1688844088309-557045769.png",
        "name" : "image-1688844088309-557045769.png",
        "article_id" : 127
      },
      {
        "imagePath" : "\/uploads\/image-1688851796069-391473268.png",
        "name" : "image-1688851796069-391473268.png",
        "article_id" : 129
      },
      {
        "imagePath" : "\/uploads\/image-1688851889172-445561418.png",
        "name" : "image-1688851889172-445561418.png",
        "article_id" : 130
      },
      {
        "imagePath" : "\/uploads\/image-1688852049434-573894686.png",
        "name" : "image-1688852049434-573894686.png",
        "article_id" : 131
      },
      {
        "imagePath" : "\/img\/article\/img-1.png",
        "name" : "image-1688901415295-294582704.png",
        "article_id" : 132
      },
      {
        "imagePath" : "\/uploads\/image-1688924379165-542056069.png",
        "name" : "image-1688924379165-542056069.png",
        "article_id" : 132
      },
      {
        "imagePath" : "\/uploads\/image-1689012626634-80107408.png",
        "name" : "image-1689012626634-80107408.png",
        "article_id" : 133
      },
      {
        "imagePath" : "\/uploads\/image-1689158857221-56777822.png",
        "name" : "image-1689158857221-56777822.png",
        "article_id" : 136
      }
    ];
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
