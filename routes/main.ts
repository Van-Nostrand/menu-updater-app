import express from 'express'
// import path from 'path'
// import { getWholeMenu } from '../handlers/main'
const router = express.Router({ mergeParams: true })



//serve the react menu
router.get('/', (_req, res) => {
  res.sendFile('index.html')
})

export default router
