import express from "express";
import { createWine, getAllWine, updateWine, deleteWine, editWine } from "../handlers/wine";

const router = express.Router({mergeParams: true})

// VIEW ALL WINE
router.route('/')
  .get(getAllWine, (_req, res) => {

    res.locals.mode = 'display'
    res.render('allwine', {allItems: res.locals.allwine, category: 'Wine'})
  })

// CREATE A WINE
router.route('/create')
  .get((_req, res) => {
    res.render('creators/createwine')
  })
  .post(createWine, (_req, res) => {
    res.redirect('/wine')
  })

// EDIT ONE WINE
router.route('/edit/:wine_id')
  .get(editWine, (_req, res) => {
    res.render('updateItem')
  })
  .put(updateWine, (_req, res) => {
    res.redirect('/wine')
  })
  .delete(deleteWine, (_req, res) => {
    res.redirect('/wine')
  })

export default router
