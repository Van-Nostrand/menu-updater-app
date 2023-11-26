import express from 'express'
import { getAllSpirits, createSpirit, updateSpirit, editSpirit, deleteSpirit } from '../handlers/spirit'

const router = express.Router({ mergeParams: true })

// VIEW ALL SPIRITS
router.route('/').get(
  getAllSpirits,
  (_req, res) => {
    res.locals.mode = 'display'
    res.render('allspirits', { allItems: res.locals.allspirits, category: 'Spirit' })
  }
)

// CREATE A SPIRITS
router.route('/create')
  .get((_req, res) => {
    res.render('creators/createspirit')
  })
  .post(createSpirit, (_req, res) => {
    res.redirect('/spirit')
  })

// EDIT ONE SPIRITS
router.route('/edit/:spirit_id')
  .get(editSpirit, (_req, res) => {
    res.render('updateItem')
  })
  .put(updateSpirit, (_req, res) => {
    res.redirect('/spirit')
  })
  .delete(deleteSpirit, (_req, res) => {
    res.redirect('/spirit')
  })

export default router
