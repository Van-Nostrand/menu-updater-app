const express = require('express');
const router = express.Router({mergeParams: true});

const { createBeer, getAllBeers, editBeer } = require("../handlers/beer");

router.route("/").post(createBeer)
                .get(getAllBeers);

router.route("/edit/:beer_id").post(editBeer);

module.exports = router;
