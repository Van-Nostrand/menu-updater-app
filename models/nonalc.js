const { DataTypes } = require('sequelize')
const sequelize = require('./sql')

const NonAlc = sequelize.define('NonAlc', {
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
