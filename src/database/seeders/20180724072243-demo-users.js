'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users',
      [
        {
          login: "pavel",
          email: "bavenka@gmail1.com",
          password: "test1",
          name: "pavel",
          age: 22,
        },
        {
          login: "denis",
          email: "denis@mail.ru",
          password: "test2",
          name: "denis",
          age: 25,
        },
        {
          login: "alex",
          email: "alex@mail.ru",
          password: "test3",
          name: "alex",
          age: 21,
        }
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
