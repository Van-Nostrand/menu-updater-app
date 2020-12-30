const express = require('express');
const router = express.Router({mergeParams: true});

const { createBeer, getAllBeers, editBeer, deleteBeer } = require("../handlers/beer");

router.route("/")
  .get(getAllBeers, function(req,res,next){
    res.render("viewAll", {allItems: res.locals.allbeers, category: "Beers"})
  })

router.route("/create-beer")
  

router.route("/create")
  .get(function(req,res,next){
    res.render("createbeer")
  })
  .post(createBeer, getAllBeers, function(req,res){
    res.render("viewAll", {allItems: res.locals.allbeers, category: "Beers"});
  });

router.route("/edit")
  .get(getAllBeers, function(req,res){
    res.render("editAll", {allItems: res.locals.allbeers, category: "Beers"});
  });

router.route("/edit/:beer_id")
  .post(editBeer)
  .delete(deleteBeer, function(req,res){
    res.redirect("/");
  });

module.exports = router;
