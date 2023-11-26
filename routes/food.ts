import express from 'express'
const router = express.Router({ mergeParams: true })

import { createFood, getAllFood, updateFood, deleteFood, editFood, sortAllFood } from '../handlers/food'

// VIEW ALL FOOD
router.route('/')
  .get(getAllFood, sortAllFood, (_req, res, next) => {
    res.locals.mode = 'display'

    res.render('allfood')
  })

// CREATE FOOD
router.route('/create')
  .get((_req, res) => {
    res.render('creators/createfood')
  })
  .post(createFood, (_req, res) => {
    res.redirect('/food')
  })

// EDIT ALL FOOD - depreciated
router.route('/edit')
  .get(getAllFood, (_req, res) => {
    res.locals.mode = 'edit'
    res.render('allfood', { category: 'Food' })
  })


// EDIT ONE FOOD
router.route('/edit/:food_id')
  .get(editFood, (_req, res) => {
    res.render('updateItem')
  })
  .put(updateFood, (_req, res) => {
    res.redirect('/food')
  })
  .delete(deleteFood, (_req, res) => {
    res.redirect('/food')
  })


export default router
