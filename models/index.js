const { Sequelize } = require('sequelize')

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './db/menu.sqlite'
})


const testSequelize = async () => {
  try {
    await sequelize.authenticate()
    console.log('connection to sqlite has been established')
  } catch (err) {
    console.error('could not authenticate sqlite', err)
  }
}
testSequelize()

module.exports.db = sequelize
module.exports.Beer = require('./beer')
module.exports.Food = require('./food')
module.exports.Wine = require('./wine')
module.exports.User = require('./user')
module.exports.Cocktail = require('./cocktail')
module.exports.Spirit = require('./spirit')
module.exports.Nonalc = require('./nonalc')