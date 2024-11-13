const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); 

const Experience = sequelize.define('Experience', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  year: {
    type: DataTypes.STRING,
    allowNull: false
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false
  },
  company: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  },
  technologies: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  tableName: 'experiences', 
  timestamps: false, 
});

module.exports = Experience;
