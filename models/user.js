const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    maxLength: 30,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type:Object,
    required: true
  }

},
{
  timestamps: true
})

userSchema.pre('save', async function (next){
  try{
    // checks to see if this user has modified their password? maybe the signature?
    if(!this.isModified('password')){
      return next()
    }
    const hashedPassword = await bcrypt.hash(this.password, 10)
    this.password = hashedPassword
    return next()

  } catch(err){
    return next(err)
  }
})

userSchema.methods.comparePassword = async function (candidatePassword, next){
  try{
    const isMatch = await bcrypt.compare(candidatePassword, this.password)
    return isMatch
  } catch(err){
    return next(err)
  }
}


const User = mongoose.model('User', userSchema, 'user')
module.exports = User