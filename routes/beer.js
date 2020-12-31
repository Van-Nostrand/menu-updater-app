const express = require('express');
const router = express.Router({mergeParams: true});

const { createBeer, getAllBeers, updateBeer, deleteBeer, editBeer } = require("../handlers/beer");

// VIEW ALL BEERS
router.route("/")
  .get(getAllBeers, function(req,res,next){
    let created;
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
    res.render("createbeer")
  })
  .post(createBeer, function(req,res){
    res.redirect("/beers");
  });

// EDIT ALL BEER
router.route("/edit")
  .get(getAllBeers, function(req,res){
    res.locals.mode = "edit"
    res.render("allbeers", {allItems: res.locals.allbeers, category: "Beers"});
  });

// EDIT ONE BEER - get route not currently used
router.route("/edit/:beer_id")
  .get(editBeer, function(req,res){ 
    res.render("updateItem", {item: res.locals.oneBeer})
  })
  .put(updateBeer, function(req, res){
    res.redirect("/beers");
  })
  .delete(deleteBeer, function(req,res){
    res.redirect("/beers");
  });

module.exports = router;
