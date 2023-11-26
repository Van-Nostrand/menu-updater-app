import express from 'express'
import { getAllSpirits, createSpirit, updateSpirit, editSpirit, deleteSpirit } from '../handlers/spirit'

const router = express.Router({ mergeParams: true })

// VIEW ALL SPIRITS
router.route('/')
  .get(getAllSpirits, (req, res, next) => {

    res.locals.mode = 'display'
    res.render('allspirits', { allItems: res.locals.allspirits, category: 'Spirit' })
  })

// CREATE A SPIRITS
router.route('/create')
  .get((req, res, next) => {
    res.render('creators/createspirit')
  })
  .post(createSpirit, (req, res) => {
    res.redirect('/spirit')
  })

// EDIT ONE SPIRITS
router.route('/edit/:spirit_id')
  .get(editSpirit, (req, res) => {
    res.render('updateItem')
  })
  .put(updateSpirit, (req, res) => {
    res.redirect('/spirit')
  })
  .delete(deleteSpirit, (req, res) => {
    res.redirect('/spirit')
  })

export default router
