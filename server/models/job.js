'use strict';
module.exports = (sequelize, DataTypes) => {
  var Job = sequelize.define('Job', {
    title: DataTypes.STRING,
    company: DataTypes.STRING,
    period: DataTypes.STRING,
    industry: DataTypes.STRING,
    location: DataTypes.STRING,
    description: DataTypes.STRING,
    current: DataTypes.BOOLEAN
  }, {
    classMethods: {
      // associate: function(models) {
      //   // associations can be defined here
      // }
      associate: (models) => {
        Job.belongsTo(models.Resume, {
          foreignKey: 'resumeId',
          onDelete: 'CASCADE',
        });
      },
    }
  });
  return Job;
};