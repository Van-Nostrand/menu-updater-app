import express from 'express'
import { createUser } from '../handlers/user'

const router = express.Router({ mergeParams: true })

router.route('/register')
  .post(createUser, (_req, res) => {
    res.send('you\'ve logged in')
  })

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

export default router
