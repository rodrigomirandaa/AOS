const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); 

const PersonalInfo = sequelize.define('PersonalInfo', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  hero_content: {
    type: DataTypes.STRING(1000),
    allowNull: false
  },
  about_text: {
    type: DataTypes.STRING(1000),
    allowNull: false
  },
  address: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  phone_no: {
    type: DataTypes.STRING(20),
    allowNull: false
  },
  email: {
    type: DataTypes.STRING(100),
    allowNull: false
  }
}, {
  tableName: 'personal_info', 
  timestamps: false, 
});

module.exports = PersonalInfo;
