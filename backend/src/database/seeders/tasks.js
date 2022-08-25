'use strict';
module.exports = {
  up: async (queryInterface, _Sequelize) => queryInterface.bulkInsert('tasks',
    [
      {
        task: 'Terminar o desafio da blitz',
        status: 'Pendente',
      },
    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('tasks', null, {}),
};