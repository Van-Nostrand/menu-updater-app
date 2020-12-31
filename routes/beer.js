const express = require('express');
const router = express.Router({mergeParams: true});

const { createBeer, getAllBeers, updateBeer, deleteBeer, editBeer } = require("../handlers/beer");

// VIEW ALL BEERS
router.route("/")
  .get(getAllBeers, function(req,res,next){
    let created;
    // not sure this is efficient
    if(req.session.created){
      created = req.session.created;
      req.session.created = null;
    }
    res.locals.mode = "display";
    res.render("allbeers", {allItems: res.locals.allbeers, category: "Beers", created})
  });

// CREATE A BEER
router.route("/create")
  .get(function(req,res,next){
    res.render("creators/createbeer")
  })
  .post(createBeer, function(req,res){
    res.redirect("/beer");
  });

// EDIT ALL BEER - depreciated
router.route("/edit") 
  .get(getAllBeers, function(req,res){
    res.locals.mode = "edit"
    res.render("allbeers", {allItems: res.locals.allbeers, category: "Beers"});
  });

// EDIT ONE BEER 
router.route("/edit/:beer_id")
  .get(editBeer, function(req,res){ 
    res.render("updateItem")
  })
  .put(updateBeer, function(req, res){
    res.redirect("/beer");
  })
  .delete(deleteBeer, function(req,res){
    res.redirect("/beer");
  });

module.exports = router;
