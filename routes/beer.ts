import express, { RequestHandler } from 'express'
const router = express.Router({ mergeParams: true })

import { createBeer, getAllBeers, updateBeer, deleteBeer, editBeer } from '../handlers/beer'

// VIEW ALL BEERS
router.route('/')
// todo: convert all of these anonymous functions to real ones
  .get(getAllBeers, <RequestHandler>((_req, res) => {
    res.locals.mode = 'display'
    res.render('allbeers', { allItems: res.locals.allbeers, category: 'Beers' })
  }))

// CREATE A BEER
router.route('/create')
  .get ((_req, res) => {
    res.render('creators/createbeer')
  })
  .post(createBeer, (_req, res) => {
    res.redirect('/beer')
  })

// EDIT ONE BEER
router.route('/edit/:beer_id')
  .get(editBeer, (_req, res) => {
    res.render('updateItem')
  })
  .put(updateBeer, (_req, res) => {
    res.redirect('/beer')
  })
  .delete(deleteBeer, (_req, res) => {
    res.redirect('/beer')
  })

export default router
