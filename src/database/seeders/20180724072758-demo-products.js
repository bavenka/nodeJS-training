'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Products',
      [
        {
          name: "Supreme T-Shirt",
          price:  12,
        },
        {
          name: "Adidas T-Shirt",
          price: 11,
        },
        {
          name: "Nike T-Shirt",
          price: 13
        }
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Products', null, {});
  }
};
