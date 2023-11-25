const { DataTypes } = require('sequelize')
const db = require('./db')

const Spirit = db.define('Spirit', {
  brandname: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: false,
  },
  productname: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  singleprice: {
    type: DataTypes.STRING,
  },
  doubleprice: {
    type: DataTypes.STRING,
  },
  style: {
    type: DataTypes.STRING,
  },
  itemType: {
    type: DataTypes.STRING,
    allowNull: false
  }
})

module.exports = Spirit
