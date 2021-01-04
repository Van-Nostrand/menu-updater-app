const express = require('express');
const router = express.Router({mergeParams: true});

const { exportMenuData } = require("../handlers/external");

// /api/
router.get("/", exportMenuData, function(req, res, next){
  console.log("/api get route")
  return res.status(200).json({...res.locals.wholeMenu});
});

module.exports = router;
