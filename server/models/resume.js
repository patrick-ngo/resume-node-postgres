'use strict';
module.exports = (sequelize, DataTypes) => {
  var Resume = sequelize.define('Resume', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    profileImage: DataTypes.STRING,
    bannerImage: DataTypes.STRING,
    title: DataTypes.STRING,
    education: DataTypes.STRING,
    location: DataTypes.STRING,
    summary: DataTypes.STRING,
  }, {
    classMethods: {
      // associate: function(models) {
      //   // associations can be defined here
      // }
      associate: (models) => {
        Resume.hasMany(models.Job, {
          foreignKey: 'resumeId',
          as: 'jobs',
        });
      },
    }
  });
  return Resume;
};