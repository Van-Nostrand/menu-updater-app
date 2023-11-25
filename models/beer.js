const { DataTypes } = require('sequelize')
const db = require('./db')

const Beer = db.define('Beer', {
  name: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false
  },
  tapnumber: {
    type: DataTypes.NUMBER,
    allowNull: true
  },
  pour1: {
    type: DataTypes.STRING,
    allowNull: false
  },
  pour1price: {
    type: DataTypes.STRING,
    allowNull: false
  },
  pour2: {
    type: DataTypes.STRING,
    allowNull: true
  },
  pour2price: {
    type: DataTypes.STRING,
    allowNull: true
  },
  pour3: {
    type: DataTypes.STRING,
    allowNull: true
  },
  pour3price: {
    type: DataTypes.STRING,
    allowNull: true
  },
  itemType: {
    type: DataTypes.STRING,
    allowNull: false
  }
})

module.exports = Beer