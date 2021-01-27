const express = require('express');
const router = express.Router({mergeParams: true});
const path = require("path");

const { getWholeMenu } = require("../handlers/main");


//serve the react menu
router.get("/", function(req,res,next){
  res.sendFile("index.html");
})

module.exports = router;
