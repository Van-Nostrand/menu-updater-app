const { DataTypes } = require('sequelize')
const db = require('./db')

const Cocktail = db.define('Cocktail', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
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
},
{
  timestamps: true
})

module.exports = Cocktail