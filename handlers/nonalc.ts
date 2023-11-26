import { RequestHandler } from 'express'
import { NonAlc } from '../models'
import { ITEM_TYPES } from '../util/constants'
import { updateRowLoop } from './helpers'

// /NonAlc GET
export const getAllNonAlcs: RequestHandler = async (_req, res, next) => {
  try {
    res.locals.allNonAlcs = await NonAlc.findAll()
    res.locals.created = null
    next()

  } catch (err) {
    return next(err)
  }
}

// /NonAlc/create POST
export const createNonAlc: RequestHandler = async (req, res, next) => {
  try {
    await NonAlc.create({ ...req.body, itemType: ITEM_TYPES.NON_ALC })

    next()
  } catch (err) {
    return next(err)
  }
}

// /edit/:NonAlc_id?_method=PUT
export const updateNonAlc: RequestHandler = async (req, res, next) => {
  try {
    const nonAlcToUpdate = await NonAlc.findOne({ where: { id: req.params.NonAlc_id } })
    if (nonAlcToUpdate) {
      updateRowLoop(req.body, nonAlcToUpdate, 'NonAlc')
    }
    res.locals.updatedNonAlc = nonAlcToUpdate
    await nonAlcToUpdate.save()

    next()
  } catch (err) {
    return next(err)
  }
}


export const editNonAlc: RequestHandler = async (req, res, next) => {
  try {
    res.locals.NonAlc = await NonAlc.findOne({ where: { id: req.params.NonAlc_id } })
    next()
  } catch (err) {
    return next(err)
  }
}

// /edit/:NonAlc_id?_method=DELETE
export const deleteNonAlc: RequestHandler = async (req,res,next) => {
  try {
    res.locals.deleted =  await NonAlc.destroy({ where: { id: req.params.NonAlc_id } })
    next()
  } catch (err) {
    return next(err)
  }
}
