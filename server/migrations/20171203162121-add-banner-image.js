'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return [
      queryInterface.addColumn(
        'Resumes',
        'bannerImage',
        {
          type: Sequelize.STRING,
        }
      ),
    ];
  },

  down: function (queryInterface, Sequelize) {
    return [
      queryInterface.removeColumn('Resumes', 'bannerImage'),
    ];
  }
};