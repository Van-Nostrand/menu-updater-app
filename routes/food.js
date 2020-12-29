const express = require('express');
const router = express.Router({mergeParams: true});

const { createFood, getAllFoods, editFood } = require("../handlers/food");

router.route("/").get(getAllFoods).post(createFood);
router.route("/edit/:id").post(editFood);

module.exports = router;
