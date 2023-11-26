import express from 'express'
const router = express.Router({ mergeParams: true })

import { getAllCocktails, createCocktail, updateCocktail, editCocktail, deleteCocktail } from '../handlers/cocktail'

// VIEW ALL COCKTAILS
router.route('/')
  .get(getAllCocktails, (_req, res) => {

    res.locals.mode = 'display'
    res.render('allcocktails', { allItems: res.locals.allcocktails, category: 'Cocktail' })
  })

// CREATE A COCKTAILS
router.route('/create')
  .get((_req, res) => {
    res.render('creators/createcocktail')
  })
  .post(createCocktail, (_req, res) => {
    res.redirect('/cocktail')
  })

// EDIT ONE COCKTAILS
router.route('/edit/:cocktail_id')
  .get(editCocktail, (_req, res) => {
    res.render('updateItem')
  })
  .put(updateCocktail, (_req, res) => {
    res.redirect('/cocktail')
  })
  .delete(deleteCocktail, (_req, res) => {
    res.redirect('/cocktail')
  })

export default router
