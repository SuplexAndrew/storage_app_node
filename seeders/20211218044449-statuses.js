'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('statuses', [{
      title: 'Ожидает обработки',
      code: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: 'В обработке',
      code: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: 'Доставка',
      code: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: 'Готов к получению',
      code: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: 'Отменен',
      code: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    },]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('statuses', null, {});
  }
};
