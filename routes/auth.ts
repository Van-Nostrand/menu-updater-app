import express from 'express'
import { signup, signin, getAllUsers, updateUser } from '../handlers/auth'

const router = express.Router()

router.post('/signup', signup)

router.post('/signin', signin)

router.get('/getAll', getAllUsers)

router.put('/updateUser', updateUser)

export default router
