const express = require('express');
const router = express.Router({mergeParams: true});

const { getWholeMenu } = require("../handlers/main");

router.get("/", getWholeMenu, function(req, res, next){
  res.render("viewAll", {allItems: res.locals.wholeMenu, category: "All Menu Items", created: res.locals.created});
});

module.exports = router;
