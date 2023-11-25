const { DataTypes } = require('sequelize')
const db = require('./db')

const User = db.define('User', {
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
    type:Object,
    allowNull: false
  }
})

// userSchema.pre('save', async function (next){
//   try{
//     // checks to see if this user has modified their password? maybe the signature?
//     if(!this.isModified('password')){
//       return next()
//     }
//     const hashedPassword = await bcrypt.hash(this.password, 10)
//     this.password = hashedPassword
//     return next()

//   } catch(err){
//     return next(err)
//   }
// })

// userSchema.methods.comparePassword = async function (candidatePassword, next){
//   try{
//     const isMatch = await bcrypt.compare(candidatePassword, this.password)
//     return isMatch
//   } catch(err){
//     return next(err)
//   }
// }

module.exports = User