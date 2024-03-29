const { DataTypes } = require('sequelize')
const sequelize = require('./sql')

const Spirit = sequelize.define('Spirit', {
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
