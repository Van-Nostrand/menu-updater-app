import express from 'express'
const router = express.Router({ mergeParams: true })

import { createFood, getAllFood, updateFood, deleteFood, editFood, sortAllFood } from '../handlers/food'

// VIEW ALL FOOD
router.route('/')
  .get(getAllFood, sortAllFood, (req, res, next) =>{
    res.locals.mode = 'display'

    res.render('allfood')
  })

// CREATE FOOD
router.route('/create')
  .get((req, res) =>{
    res.render('creators/createfood')
  })
  .post(createFood, (req, res) =>{
    res.redirect('/food')
  })

// EDIT ALL FOOD - depreciated
router.route('/edit')
  .get(getAllFood, (req, res) =>{
    res.locals.mode = 'edit'
    res.render('allfood', { category: 'Food' })
  })


// EDIT ONE FOOD
router.route('/edit/:food_id')
  .get(editFood, (req, res) =>{
    res.render('updateItem')
  })
  .put(updateFood, (req, res) =>{
    res.redirect('/food')
  })
  .delete(deleteFood, (req, res) =>{
    res.redirect('/food')
  })


export default router
