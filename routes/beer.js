import express from 'express'
const router = express.Router({ mergeParams: true })

import { createBeer, getAllBeers, updateBeer, deleteBeer, editBeer } from '../handlers/beer'

// VIEW ALL BEERS
router.route('/')
  .get(getAllBeers, (req, res) => {


    res.locals.mode = 'display'
    res.render('allbeers', { allItems: res.locals.allbeers, category: 'Beers' })
  })

// CREATE A BEER
router.route('/create')
  .get ((req, res, next) => {
    res.render('creators/createbeer')
  })
  .post(createBeer, (req, res) => {
    res.redirect('/beer')
  })

// EDIT ONE BEER
router.route('/edit/:beer_id')
  .get(editBeer, (req, res) => {
    res.render('updateItem')
  })
  .put(updateBeer, (req, res) => {
    res.redirect('/beer')
  })
  .delete(deleteBeer, (req, res) => {
    res.redirect('/beer')
  })

export default router
