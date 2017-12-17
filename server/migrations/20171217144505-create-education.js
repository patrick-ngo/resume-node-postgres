'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Educations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      school: {
        type: Sequelize.STRING
      },
      period: {
        type: Sequelize.STRING
      },
      start: {
        type: Sequelize.STRING
      },
      end: {
        type: Sequelize.STRING
      },
      degree: {
        type: Sequelize.STRING
      },
      location: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      current: {
        type: Sequelize.BOOLEAN
      },
      imageUrl: {
        type: Sequelize.STRING
      },
      resumeId: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      resumeId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'Resumes',
          key: 'id',
          as: 'resumeId',
        },
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Educations');
  }
};