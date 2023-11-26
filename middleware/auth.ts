import { RequestHandler } from 'express'
import jwt from 'jsonwebtoken'

// make sure the user is logged in
export const loginRequired: RequestHandler = (req, _res, next) => {
  console.log('login required')
  try {
    const token = req.headers.authorization.split(' ')[1]
    jwt.verify(token, process.env.SECRET_KEY, (_err: Error | undefined, decoded: Record<string, unknown>) => {
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

export const ensureCorrectUser: RequestHandler = (req, res, next) => {
  console.log('ensureCorrectUser')
  try {
    const token = req.headers.authorization.split(' ')[1]
    jwt.verify(token, process.env.SECRET_KEY, (_err: Error | undefined, decoded: { id: string }) => {
      if (decoded && decoded.id === req.params.id) {
        return next()
      }
      return next({ status: 401, message: 'Unauthorized' })

    })
  } catch (e) {
    return next({ status: 401, message: 'Unauthorized' })
  }
}
