const { Sequelize } = require('sequelize')

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './models/db/menu.sqlite'
})

module.exports = sequelize
