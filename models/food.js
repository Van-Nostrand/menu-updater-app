const { DataTypes } = require('sequelize')
const db = require('./db')

const Food = db.define('Food', {
  name: {
    type: DataTypes.STRING,
    maxLength: 100,
    unique: true,
    allowNull: false
  },
  notes: {
    type: DataTypes.STRING,
    allowNull: true
  },
  price: {
    type: DataTypes.STRING,
    allowNull: false
  },
  diet: {
    type: DataTypes.STRING
  },
  itemType: {
    type: DataTypes.STRING,
    allowNull: false
  },
  menuSection: {
    type: DataTypes.STRING,
    allowNull: false
  }
})

module.exports = Food