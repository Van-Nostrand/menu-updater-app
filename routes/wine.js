const express = require('express');
const router = express.Router({mergeParams: true});

const { createWine, getAllWine, updateWine, deleteWine, editWine } = require("../handlers/wine");

// VIEW ALL WINE
router.route("/")
  .get(getAllWine, function(req,res,next){
  
    res.locals.mode = "display";
    res.render("allwine", {allItems: res.locals.allwine, category: "Wine"})
  });

// CREATE A WINE
router.route("/create")
  .get(function(req,res,next){
    res.render("creators/createwine")
  })
  .post(createWine, function(req,res){
    res.redirect("/wine");
  });

// EDIT ONE WINE 
router.route("/edit/:wine_id")
  .get(editWine, function(req,res){ 
    res.render("updateItem")
  })
  .put(updateWine, function(req, res){
    res.redirect("/wine");
  })
  .delete(deleteWine, function(req,res){
    res.redirect("/wine");
  });

module.exports = router;
