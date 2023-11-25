const express = require('express')
const router = express.Router({mergeParams: true})

const { getAllSpirits, createSpirit, updateSpirit, editSpirit, deleteSpirit } = require('../handlers/spirit')

// VIEW ALL SPIRITS
router.route('/')
  .get(getAllSpirits, function (req,res,next){

    res.locals.mode = 'display'
    res.render('allspirits', {allItems: res.locals.allspirits, category: 'Spirit'})
  })

// CREATE A SPIRITS
router.route('/create')
  .get(function (req,res,next){
    res.render('creators/createspirit')
  })
  .post(createSpirit, function (req,res){
    res.redirect('/spirit')
  })

// EDIT ONE SPIRITS 
router.route('/edit/:spirit_id')
  .get(editSpirit, function (req,res){
    res.render('updateItem')
  })
  .put(updateSpirit, function (req, res){
    res.redirect('/spirit')
  })
  .delete(deleteSpirit, function (req,res){
    res.redirect('/spirit')
  })

module.exports = router
