module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Reviews',
      'ProductId',
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'Products',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'Reviews',
      'ProductId'
    );
  }
};
