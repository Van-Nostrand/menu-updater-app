import express from 'express'
import { getAllNonAlcs, createNonAlc, updateNonAlc, editNonAlc, deleteNonAlc } from '../handlers/nonalc'

const router = express.Router({ mergeParams: true })

// VIEW ALL NonAlc
router.route('/')
  .get(getAllNonAlcs, (_req, res) => {

    res.locals.mode = 'display'
    res.render('allNonAlc', { allItems: res.locals.allNonAlc, category: 'NonAlc' })
  })

// CREATE A NonAlc
router.route('/create')
  .get((_req, res) => {
    res.render('creators/createNonAlc')
  })
  .post(createNonAlc, (_req, res) => {
    res.redirect('/NonAlc')
  })

// EDIT ONE NonAlc
router.route('/edit/:NonAlc_id')
  .get(editNonAlc, (_req, res) => {
    res.render('updateItem')
  })
  .put(updateNonAlc, (_req, res) => {
    res.redirect('/NonAlc')
  })
  .delete(deleteNonAlc, (_req, res) => {
    res.redirect('/NonAlc')
  })

export default router
