const { Sequelize } = require('sequelize')

const db = new Sequelize({
  dialect: 'sqlite',
  storage: './db/menu.sqlite'
})

module.exports = db