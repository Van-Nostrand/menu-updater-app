import { RequestHandler } from "express";
import { User } from "../models";
import jwt from "jsonwebtoken";

const getAllUsers: RequestHandler = async (_req, _res, next) => {
  try {
    const allusers = await User.findAll()
    return next({
      status: 200,
      message: allusers
    })

  } catch (err) {
    return next({
      status: 400,
      message: err
    })
  }
}

const signin: RequestHandler = async (req, res, next) => {
  try {
    const user = await User.findOne({ where: {
      // change to username? no
      email: req.body.email
    } })

    //@ts-ignore
    const { id, username, profileImageUrl } = user
    console.dir('user is', user)
    // todo: re-implement
    const isMatch = await user.comparePassword(req.body.password)

    if (isMatch) {
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

  } catch (err) {
    return next({
      status: 400,
      message: err.message
    })
  }
}

const signup: RequestHandler = async (req, res, next) => {
  try {
    //create a user
    const user = await User.create(req.body)
    //@ts-ignore
    const { id, username, profileImageUrl } = user
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
  } catch (err) {
    if (err.code === 11000) { // mongoose leftover?
      err.message = 'sorry, that username and/or email is taken'
    }
    return next({
      status: 400,
      message: err.message
    })
  }
}

//the user is already signed in. We just need to verify that and then we can update some things
const updateUser: RequestHandler = async (req, res, next) => {
  // todo: fix this
  try {
    const user = await User.findOne({ where: {
      email: req.body.email
    } })
    //@ts-ignore
    const { email, profileImageUrl, username, id } = user
    // let isMatch = await user.comparePassword(req.body.password);
    const updatesToMake = req.body.updates
    return res.status(200).json({})

  } catch (err) {
    return next({
      status: 400,
      message: err.message
    })
  }
}

export { updateUser, signup, signin, getAllUsers }
