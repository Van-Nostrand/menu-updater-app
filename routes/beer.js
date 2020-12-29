const express = require('express');
const router = express.Router({mergeParams: true});

const { createBeer, getAllBeers, editBeer } = require("../handlers/beer");

router.route("/").post(createBeer)
                .get(getAllBeers, function(req,res,next){
                  res.render("viewAll", {allItems: res.locals.allbeers})
                });

router.route("/edit/:beer_id").post(editBeer);

module.exports = router;
