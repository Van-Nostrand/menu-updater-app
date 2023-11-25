const { DataTypes } = require('sequelize')
const db = require('./db')

const NonAlc = db.define('NonAlc', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: false
  },
  notes: {
    type: DataTypes.STRING,
  },
  price: {
    type: DataTypes.STRING,
  },
  itemType: {
    type: DataTypes.STRING,
    allowNull: false
  }
})

module.exports = NonAlc