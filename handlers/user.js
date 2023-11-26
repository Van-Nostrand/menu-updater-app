import { User } from '../models'

export const createUser = async (req, res) => {
  try {
    const user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    })
    res.status(200).json({
      status: 'Success',
      data: user
    })
  } catch (err) {
    console.error('could not create user', err)
    res.status(400).json({
      success: false,
      message: `failed to create user${err instanceof Error ? `: ${err.message}` : ''}`
    })
  }
}

// export default (app) => {
//   const User = require('./user.model')
//   const {
//       generateSalt,
//       hash,
//       compare
//   } = require('./index');
//   let salt = generateSalt(10);
//   app.post('/register', async (req, res) => {
//       try {
//           let user = new User({
//               name: req.body.name,
//               email: req.body.email,
//               password: await hash(req.body.password, salt) // dont remove the await
//           })
//           let response = await user.save();
//           res.status(200).json({
//               status: "Success",
//               data: response
//           })
//       } catch (err) {
//           //handle error
//       }
//   });
// }
