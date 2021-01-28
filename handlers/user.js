const db = require("../models");

app.post('/register', 

exports.createUser = async (req, res) => {
  try {
      let user = new db.User({
          name: req.body.name,
          email: req.body.email,
          password: await hash(req.body.password, salt) // dont remove the await
      })
      let response = await user.save();
      res.status(200).json({
          status: "Success",
          data: response
      })
  } catch (err) {
      //handle error
  }
};

// module.exports = (app) => {
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