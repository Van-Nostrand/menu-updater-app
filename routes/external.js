import express from 'express'
const router = express.Router({ mergeParams: true })

import { exportMenuData } from '../handlers/external'

// /api/
router.get('/', exportMenuData, (req, res, next) =>{
  return res.status(200).json(res.locals.wholeMenu)
})

export default router
