const express = require('express');
const router = express.Router({mergeParams: true});

const { getAllNonalcs, createNonalc, updateNonalc, editNonalc, deleteNonalc } = require("../handlers/nonalc");

// VIEW ALL NONALC
router.route("/")
  .get(getAllNonalcs, function(req,res,next){
  
    res.locals.mode = "display";
    res.render("allnonalc", {allItems: res.locals.allnonalc, category: "Nonalc"})
  });

// CREATE A NONALC
router.route("/create")
  .get(function(req,res,next){
    res.render("creators/createnonalc")
  })
  .post(createNonalc, function(req,res){
    res.redirect("/nonalc");
  });

// EDIT ONE NONALC 
router.route("/edit/:nonalc_id")
  .get(editNonalc, function(req,res){ 
    res.render("updateItem")
  })
  .put(updateNonalc, function(req, res){
    res.redirect("/nonalc");
  })
  .delete(deleteNonalc, function(req,res){
    res.redirect("/nonalc");
  });

module.exports = router;
