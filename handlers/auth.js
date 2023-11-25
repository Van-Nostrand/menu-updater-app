const db = require('../models')
const jwt = require('jsonwebtoken')

exports.getAllUsers = async function (req, res, next){
  try {
    const allusers = await db.User.find()
    return next({
      status: 200,
      message: allusers
    })

  } catch(err){
    return next({
      status: 400,
      message: err
    })
  }
}

exports.signin = async function (req,res,next){

  try{

    const user = await db.User.findOne({
      // change to username?
      email: req.body.email
    })

    const { id, username, profileImageUrl } = user
    console.dir(user)
    const isMatch = await user.comparePassword(req.body.password)

    if(isMatch){
      const token = jwt.sign({
        id,
        username,
        profileImageUrl
      }, process.env.SECRET_KEY)
      return res.status(200).json({
        id,
        username,
        profileImageUrl,
        token
      })
    }
    return next({
      status: 400,
      message: 'invalid credentials'
    })

  } catch(err){
    return next({
      status: 400,
      message: err.message
    })
  }
}

exports.signup = async function (req, res, next){
  try{
    //create a user
    const user = await db.User.create(req.body)
    const {id, username, profileImageUrl} = user
    //create a token (signing a token)
    const token = jwt.sign({
      id,
      username,
      profileImageUrl
    }, process.env.SECRET_KEY)

    return res.status(200).json({
      id,
      username,
      profileImageUrl,
      token
    })
  } catch(err){
    /*
      This block of code is simply a method of reconfiguring how mongoose displays error messages
      typically, mongoose error messages are convoluted and dense.
      If there's a validation error (error code 11000), output a nice message about it.
      EITHER WAY, return error code 400. if there wasn't a validation error, it'll still be long and convoluted (i think)
    */
    if(err.code === 11000){
      err.message = 'sorry, that username and/or email is taken'
    }
    return next({
      status: 400,
      message: err.message
    })
  }
}

//the user is already signed in. We just need to verify that and then we can update some things
exports.updateUser = async function (req, res, next){
  try{
    const user = await db.User.findOne({
      email: req.body.email
    })
    const {email, profileImageUrl, username, id} = user
    // let isMatch = await user.comparePassword(req.body.password);
    const updatesToMake = req.body.updates
    return res.status(200).json({})

  }catch(err){
    return next({
      status: 400,
      message: err.message
    })
  }
}
