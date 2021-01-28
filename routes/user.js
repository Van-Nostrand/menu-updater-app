const express = require('express');
const router = express.Router({mergeParams: true});

const {createUser} = require("../handlers/user");

router.route("/register")
  .post(createUser, function(req,res){
    res.send("you've logged in");
  });

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