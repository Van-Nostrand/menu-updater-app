const express = require('express');
const router = express.Router({mergeParams: true});

const { getAllCocktails, createCocktail, updateCocktail, editCocktail, deleteCocktail } = require("../handlers/cocktail");

// VIEW ALL COCKTAILS
router.route("/")
  .get(getAllCocktails, function(req,res,next){
  
    res.locals.mode = "display";
    res.render("allcocktails", {allItems: res.locals.allcocktails, category: "Cocktail"})
  });

// CREATE A COCKTAILS
router.route("/create")
  .get(function(req,res,next){
    res.render("creators/createcocktail")
  })
  .post(createCocktail, function(req,res){
    res.redirect("/cocktail");
  });

// EDIT ONE COCKTAILS 
router.route("/edit/:cocktail_id")
  .get(editCocktail, function(req,res){ 
    res.render("updateItem")
  })
  .put(updateCocktail, function(req, res){
    res.redirect("/cocktail");
  })
  .delete(deleteCocktail, function(req,res){
    res.redirect("/cocktail");
  });

module.exports = router;
