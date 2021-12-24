'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('items', [{
      name: 'Шары надувные',
      price: 10,
      countInStorage: 1234,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Гвозди забивные',
      price: 44,
      countInStorage: 3589,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Трусы с приколом',
      price: 10000,
      countInStorage: 15,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('items', null, {});
  }
};
