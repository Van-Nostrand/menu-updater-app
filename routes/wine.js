const express = require('express')
const router = express.Router({mergeParams: true})

const { createWine, getAllWine, updateWine, deleteWine, editWine } = require('../handlers/wine')

// VIEW ALL WINE
router.route('/')
  .get(getAllWine, (req, res, next) =>{

    res.locals.mode = 'display'
    res.render('allwine', {allItems: res.locals.allwine, category: 'Wine'})
  })

// CREATE A WINE
router.route('/create')
  .get((req, res, next) =>{
    res.render('creators/createwine')
  })
  .post(createWine, (req, res) =>{
    res.redirect('/wine')
  })

// EDIT ONE WINE
router.route('/edit/:wine_id')
  .get(editWine, (req, res) =>{
    res.render('updateItem')
  })
  .put(updateWine, (req, res) =>{
    res.redirect('/wine')
  })
  .delete(deleteWine, (req, res) =>{
    res.redirect('/wine')
  })

export default router
