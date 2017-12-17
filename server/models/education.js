'use strict';
module.exports = (sequelize, DataTypes) => {
  var Education = sequelize.define('Education', {
    title: DataTypes.STRING,
    school: DataTypes.STRING,
    period: DataTypes.STRING,
    start: DataTypes.STRING,
    end: DataTypes.STRING,
    degree: DataTypes.STRING,
    location: DataTypes.STRING,
    description: DataTypes.STRING,
    current: DataTypes.BOOLEAN,
    imageUrl: DataTypes.STRING,
    resumeId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: (models) => {
        Education.belongsTo(models.Resume, {
          foreignKey: 'resumeId',
          onDelete: 'CASCADE',
        });
      },
    }
  });
  return Education;
};