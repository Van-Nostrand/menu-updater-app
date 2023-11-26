const jwt = require('jsonwebtoken')

// make sure the user is logged in
exports.loginRequired = function (req, res, next) {
  console.log('login required')
  try {
    const token = req.headers.authorization.split(' ')[1]
    jwt.verify(token, process.env.SECRET_KEY, function (err, decoded) {
      if (decoded) {
        next()
      } else {
        return next({ status: 401, message: 'Please Log In First' })
      }
    })
  } catch (e) {
    return next({ status: 401, message: 'Please Log In First' })
  }
}

exports.ensureCorrectUser = function (req, res, next) {
  console.log('ensureCorrectUser')
  try {
    const token = req.headers.authorization.split(' ')[1]
    jwt.verify(token, process.env.SECRET_KEY, function (err, decoded) {
      if (decoded && decoded.id === req.params.id) {
        return next()
      }
      return next({ status: 401, message: 'Unauthorized' })

    })
  } catch (e) {
    return next({ status: 401, message: 'Unauthorized' })
  }
}
