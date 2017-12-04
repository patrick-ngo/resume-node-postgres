'use strict';
module.exports = (sequelize, DataTypes) => {
  var Resume = sequelize.define('Resume', {

    //name of the person
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    //profile image  
    profileImage: DataTypes.STRING,

    //banner image
    bannerImage: DataTypes.STRING,

    //title
    title: DataTypes.STRING,

    //educational background
    education: DataTypes.STRING,

    //location
    location: DataTypes.STRING,

    //summary text
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