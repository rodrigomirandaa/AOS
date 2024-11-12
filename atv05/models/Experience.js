const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // Importando a configuração do banco de dados

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
  tableName: 'experiences', // Certifique-se de que o nome da tabela está correto
  timestamps: false, // Se você tiver colunas `createdAt` e `updatedAt`
});

module.exports = Experience;
