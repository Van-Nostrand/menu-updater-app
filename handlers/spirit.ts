import { RequestHandler} from 'express'
import { Spirit } from '../models'
import { ITEM_TYPES } from '../util/constants'
import { updateRowLoop } from './helpers'

// /spirit GET
export const getAllSpirits: RequestHandler = async (_req, res, next) => {
  try {
    res.locals.allSpirits = await Spirit.findAll()
    res.locals.created = null
    next()

  } catch (err) {
    return next(err)
  }
}

// /spirit/create POST
export const createSpirit: RequestHandler = async (req, _res, next) => {
  try {
    await Spirit.create({ ...req.body, itemType: ITEM_TYPES.SPIRIT })

    next()
  } catch (err) {
    return next(err)
  }
}

// /edit/:spirit_id?_method=PUT
export const updateSpirit: RequestHandler = async (req, res, next) => {
  try {
    const spiritToUpdate = await Spirit.findOne({ where: { id: req.params.spirit_id } })
    if (spiritToUpdate) {
      updateRowLoop(req.body, spiritToUpdate, 'Spirit')
      res.locals.updatedSpirit = spiritToUpdate
      await spiritToUpdate.save()
    } else {
      throw new Error('could not find spirit', { cause: req.params.spirit_id })
    }
    next()
  } catch (err) {
    return next(err)
  }
}


export const editSpirit: RequestHandler = async (req, res, next) => {
  try {
    res.locals.spirit = await Spirit.findOne({ where: { id: req.params.spirit_id } })
    next()
  } catch (err) {
    return next(err)
  }
}

// /edit/:spirit_id?_method=DELETE
export const deleteSpirit: RequestHandler = async (req, res, next) => {
  try {
    res.locals.deleted =  await Spirit.destroy({ where: { id: req.params.spirit_id } })
    next()
  } catch (err) {
    return next(err)
  }
}