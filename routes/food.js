const express = require('express');
const router = express.Router({mergeParams: true});

const { createFood, getAllFoods, editFood } = require("../handlers/food");

router.route("/")
  .get(getAllFoods, function(req,res,next){
    res.render("viewAll", {allItems: res.locals.allfoods, category: "Food"});
  })
  .post(createFood);
router.route("/edit/:id").post(editFood);

module.exports = router;
