const { DataTypes } = require('sequelize')
const db = require('./sql')

const Wine = db.define('Wine', {
  brandname: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: false,
  },
  productname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  region: {
    type: DataTypes.STRING
  },
  fiveozprice: {
    type: DataTypes.STRING,
  },
  eightozprice: {
    type: DataTypes.STRING,
  },
  bottleprice: {
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

module.exports = Wine
