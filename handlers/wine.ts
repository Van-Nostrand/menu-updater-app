import { RequestHandler } from 'express'
import { Wine } from '../models'
import { ITEM_TYPES } from '../util/constants'
import { updateRowLoop } from './helpers'

// /wine GET
export const getAllWine: RequestHandler = async (_req, res, next) => {
  try {
    res.locals.allwine = await Wine.findAll()
    next()
  } catch (err) {
    return next(err)
  }
}

// /wine/create POST
export const createWine: RequestHandler = async (req, _res, next) => {
  try {
    await Wine.create({ ...req.body, itemType: ITEM_TYPES.WINE })
    next()
  } catch (err) {
    return next(err)
  }
}

// /edit/:wine_id?_method=PUT
export const updateWine: RequestHandler = async (req, res, next) => {
  try {
    const wineToUpdate = await Wine.findOne({ where: { id: req.params.wine_id } })
    if (wineToUpdate) {
      updateRowLoop(req.body, wineToUpdate, 'Wine')
      res.locals.updatedWine = wineToUpdate
      await wineToUpdate.save()
    } else {
      throw new Error('could not find wine', { cause: req.params.wine_id })
    }
    next()
  } catch (err) {
    return next(err)
  }
}

// /edit/:wine_id GET
export const editWine: RequestHandler = async (req, res, next) => {
  try {
    res.locals.wine = await Wine.findOne({ where: { id: req.params.wine_id } })
    next()
  } catch (err) {
    return next(err)
  }
}

// /edit/:wine_id?_method=DELETE
export const deleteWine: RequestHandler = async (req, res, next) => {
  try {
    res.locals.deleted =  await Wine.destroy({ where: { id: req.params.wine_id } })
    next()
  } catch (err) {
    return next(err)
  }
}
