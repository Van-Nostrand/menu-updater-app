const express = require('express')
const router = express.Router({ mergeParams: true })
const path = require('path')

const { getWholeMenu } = require('../handlers/main')


//serve the react menu
router.get('/', (_req, res) => {
  res.sendFile('index.html')
})

module.exports = router
