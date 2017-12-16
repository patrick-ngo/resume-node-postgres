'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return [
      queryInterface.addColumn(
        'Jobs',
        'start',
        {
          type: Sequelize.STRING,
        }
      ),
      queryInterface.addColumn(
        'Jobs',
        'end',
        {
          type: Sequelize.STRING,
        }
      ),
    ];
  },

  down: function (queryInterface, Sequelize) {
    return [
      queryInterface.removeColumn('Jobs', 'start'),
      queryInterface.removeColumn('Jobs', 'end'),
    ];
  }
};