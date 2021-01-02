const express = require('express');
const router = express.Router({mergeParams: true});

const { createFood, getAllFood, updateFood, deleteFood, editFood, sortAllFood } = require("../handlers/food");

// VIEW ALL FOOD
router.route("/")
  .get(getAllFood, sortAllFood, function(req,res,next){
    res.locals.mode = "display";

    res.render("allfood");
  });

// CREATE FOOD
router.route("/create")
  .get(function(req,res){
    res.render("creators/createfood");
  })
  .post(createFood, function(req,res){
    res.redirect("/food");
  });

// EDIT ALL FOOD - depreciated
router.route("/edit")
  .get(getAllFood, function(req,res){
    res.locals.mode = "edit"
    res.render("allfood", { category: "Food"});
  });


// EDIT ONE FOOD
router.route("/edit/:food_id")
  .get(editFood, function(req,res){ 
    res.render("updateItem")
  })
  .put(updateFood, function(req, res){
    res.redirect("/food");
  })
  .delete(deleteFood, function(req,res){
    res.redirect("/food");
  });


module.exports = router;