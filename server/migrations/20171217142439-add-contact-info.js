'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return [
      queryInterface.addColumn(
        'Resumes',
        'contactSummary',
        {
          type: Sequelize.STRING,
        }
      ),
      queryInterface.addColumn(
        'Resumes',
        'contactNumber',
        {
          type: Sequelize.STRING,
        }
      ),
      queryInterface.addColumn(
        'Resumes',
        'email',
        {
          type: Sequelize.STRING,
        }
      ),
      queryInterface.addColumn(
        'Jobs',
        'imageUrl',
        {
          type: Sequelize.STRING,
        }
      ),
    ];
  },

  down: (queryInterface, Sequelize) => {
    return [
      queryInterface.removeColumn('Resumes', 'contactSummary'),
      queryInterface.removeColumn('Resumes', 'contactNumber'),
      queryInterface.removeColumn('Resumes', 'email'),
      queryInterface.removeColumn('Jobs', 'imageUrl'),
    ];
  }
};
