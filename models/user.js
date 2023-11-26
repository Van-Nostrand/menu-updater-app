const { DataTypes } = require('sequelize')
const sequelize = require('./sql')
const bcrypt = require('bcrypt')

const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    async set (value) {
      const hash = await bcrypt.hash(value, 10)
      this.setDataValue('password', hash)
    }
  }
})

// userSchema.methods.comparePassword = async function (candidatePassword, next){
//   try{
//     const isMatch = await bcrypt.compare(candidatePassword, this.password)
//     return isMatch
//   } catch(err){
//     return next(err)
//   }
// }

module.exports = User
