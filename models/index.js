const sequelize = require('./sql')

module.exports.sequelize = sequelize
module.exports.Beer = require('./beer')
module.exports.Food = require('./food')
module.exports.Wine = require('./wine')
module.exports.User = require('./user')
module.exports.Cocktail = require('./cocktail')
module.exports.Spirit = require('./spirit')
module.exports.NonAlc = require('./NonAlc')
