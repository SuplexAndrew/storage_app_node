'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Items', [{
      name: 'Шары надувные',
      price: 10,
      countOnStorage: 1234,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Гвозди забивные',
      price: 44,
      countOnStorage: 3589,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Трусы с приколом',
      price: 10000,
      countOnStorage: 15,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Items', null, {});
  }
};
