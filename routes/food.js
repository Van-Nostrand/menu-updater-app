const express = require('express');
const router = express.Router({mergeParams: true});

router.route("/").get(function(req,res){
  res.send("foods!");
});

module.exports = router;
