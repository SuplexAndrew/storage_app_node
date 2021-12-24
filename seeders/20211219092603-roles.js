'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('roles', [{
      name: 'Администратор',
      value: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Пользователь',
      value: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Наблюдатель',
      value: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('roles', null, {});
  }
};
