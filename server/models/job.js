'use strict';
module.exports = (sequelize, DataTypes) => {
  var Job = sequelize.define('Job', {

    //job title
    title: DataTypes.STRING,

    //company name
    company: DataTypes.STRING,

    //period of employment
    period: DataTypes.STRING,

    //start of employment
    start: DataTypes.STRING,

    //end of employment
    end: DataTypes.STRING,

    //industry type
    industry: DataTypes.STRING,

    //location
    location: DataTypes.STRING,

    //description of the job
    description: DataTypes.STRING,

    //if the job is current or not
    current: DataTypes.BOOLEAN,

    //image of the company
    imageUrl: DataTypes.STRING,

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