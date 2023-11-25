const express = require('express')
const router = express.Router({mergeParams: true})

const { getAllNonAlcs, createNonAlc, updateNonAlc, editNonAlc, deleteNonAlc } = require('../handlers/NonAlc')

// VIEW ALL NonAlc
router.route('/')
  .get(getAllNonAlcs, function (req,res,next){

    res.locals.mode = 'display'
    res.render('allNonAlc', {allItems: res.locals.allNonAlc, category: 'NonAlc'})
  })

// CREATE A NonAlc
router.route('/create')
  .get(function (req,res,next){
    res.render('creators/createNonAlc')
  })
  .post(createNonAlc, function (req,res){
    res.redirect('/NonAlc')
  })

// EDIT ONE NonAlc
router.route('/edit/:NonAlc_id')
  .get(editNonAlc, function (req,res){
    res.render('updateItem')
  })
  .put(updateNonAlc, function (req, res){
    res.redirect('/NonAlc')
  })
  .delete(deleteNonAlc, function (req,res){
    res.redirect('/NonAlc')
  })

module.exports = router
