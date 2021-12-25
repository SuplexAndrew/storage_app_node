'use strict';
const bcrypt = require("bcrypt");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const roles = await queryInterface.bulkInsert('roles', [{
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
    }], {
      returning: true,
    });
    const password = 'password'
    const salt = await bcrypt.genSalt(10)
    const hashed = await bcrypt.hash(password, salt)
    const admin = await queryInterface.bulkInsert('users', [{
      login: 'Admin',
      password: hashed,
      salt,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {
      returning: true,
    });
    return queryInterface.bulkInsert('user_roles', [{
      userId: admin[0].id,
      roleId: roles[0].id,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.bulkDelete('users', null, {}),
      queryInterface.bulkDelete('user_roles', null, {}),
      queryInterface.bulkDelete('roles', null, {})
    ])
  }
};
