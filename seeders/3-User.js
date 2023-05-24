'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const items = 
    [{
      "username": "bhalt0",
      "password": "1234",
      "email": "bhalt0@prweb.com",
      "name": "Ber Halt",
      "role": "reader",
      "dob": "1985-11-28"
    }, {
      "username": "brobbey1",
      "password": "1234",
      "email": "brobbey1@engadget.com",
      "name": "Baxie Robbey",
      "role": "reader",
      "dob": "2007-08-01"
    }, {
      "username": "gcogin2",
      "password": "1234",
      "email": "gcogin2@mozilla.org",
      "name": "Gabbie Cogin",
      "role": "reader",
      "dob": "1998-01-21"
    }, {
      "username": "nestick3",
      "password": "1234",
      "email": "nestick3@omniture.com",
      "name": "Novelia Estick",
      "role": "reader",
      "dob": "1979-08-13"
    }, {
      "username": "kgierek4",
      "password": "1234",
      "email": "kgierek4@youtube.com",
      "name": "Kacey Gierek",
      "role": "reader",
      "dob": "2013-11-19"
    }, {
      "username": "rmoyser0",
      "password": "1234",
      "email": "rmoyser0@squarespace.com",
      "name": "Raynard Moyser",
      "role": "editor",
      "dob": "2012-04-08"
    }, {
      "username": "dlabarre1",
      "password": "1234",
      "email": "dlabarre1@squidoo.com",
      "name": "Debor Labarre",
      "role": "editor",
      "dob": "1967-09-02"
    }, {
      "username": "warbor2",
      "password": "1234",
      "email": "warbor2@economist.com",
      "name": "Willabella Arbor",
      "role": "editor",
      "dob": "1990-10-25"
    }, {
      "username": "sgricks3",
      "password": "1234",
      "email": "sgricks3@sogou.com",
      "name": "Siana Gricks",
      "role": "editor",
      "dob": "1997-03-09"
    }, {
      "username": "kkennford4",
      "password": "1234",
      "email": "kkennford4@wikispaces.com",
      "name": "Ker Kennford",
      "role": "editor",
      "dob": "1968-10-06"
    }, {
      "username": "nlomath5",
      "password": "1234",
      "email": "nlomath5@bloglines.com",
      "name": "Nara Lomath",
      "role": "editor",
      "dob": "1983-03-20"
    }, {
      "username": "bcawkwell0",
      "password": "1234",
      "email": "bcawkwell0@hibu.com",
      "name": "Bradley Cawkwell",
      "role": "writer",
      "dob": "2015-04-30"
    }, {
      "username": "bsivewright1",
      "password": "1234",
      "email": "bsivewright1@usa.gov",
      "name": "Bart Sivewright",
      "role": "writer",
      "dob": "1983-09-02"
    }, {
      "username": "cluckhurst2",
      "password": "1234",
      "email": "cluckhurst2@loc.gov",
      "name": "Clarance Luckhurst",
      "role": "writer",
      "dob": "1978-09-07"
    }, {
      "username": "smattes3",
      "password": "1234",
      "email": "smattes3@myspace.com",
      "name": "Sawyer Mattes",
      "role": "writer",
      "dob": "1989-01-04"
    }, {
      "username": "thannis4",
      "password": "1234",
      "email": "thannis4@ehow.com",
      "name": "Tuesday Hannis",
      "role": "writer",
      "dob": "1998-03-20"
    }, {
      "username": "cmacmeeking5",
      "password": "1234",
      "email": "cmacmeeking5@geocities.jp",
      "name": "Carney MacMeeking",
      "role": "writer",
      "dob": "1994-04-24"
    }, {
      "username": "emosedale0",
      "password": "1234",
      "email": "emosedale0@dion.ne.jp",
      "name": "Elfreda Mosedale",
      "role": "admin",
      "dob": "1980-11-12"
    }];
    items.forEach(item => {
      item.createdAt = Sequelize.literal('NOW()');
      item.updatedAt = Sequelize.literal('NOW()');
    });
    await queryInterface.bulkInsert('Users', items, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
