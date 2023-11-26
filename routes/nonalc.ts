import express from 'express'
import { getAllNonAlcs, createNonAlc, updateNonAlc, editNonAlc, deleteNonAlc } from '../handlers/nonalc'

const router = express.Router({ mergeParams: true })

// VIEW ALL NonAlc
router.route('/')
  .get(getAllNonAlcs, (req, res, next) => {

    res.locals.mode = 'display'
    res.render('allNonAlc', { allItems: res.locals.allNonAlc, category: 'NonAlc' })
  })

// CREATE A NonAlc
router.route('/create')
  .get((req, res, next) => {
    res.render('creators/createNonAlc')
  })
  .post(createNonAlc, (req, res) => {
    res.redirect('/NonAlc')
  })

// EDIT ONE NonAlc
router.route('/edit/:NonAlc_id')
  .get(editNonAlc, (req, res) => {
    res.render('updateItem')
  })
  .put(updateNonAlc, (req, res) => {
    res.redirect('/NonAlc')
  })
  .delete(deleteNonAlc, (req, res) => {
    res.redirect('/NonAlc')
  })

export default router
