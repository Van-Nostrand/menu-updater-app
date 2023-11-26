import { RequestHandler } from 'express'
import { Food } from '../models'
import { ITEM_TYPES } from '../util/constants'
import { updateRowLoop } from './helpers'

// /food GET
export const getAllFood: RequestHandler = async (_req, res, next) => {
  try {
    res.locals.allfood = await Food.findAll()
    res.locals.created = null
    next()
  } catch (err) {
    return next(err)
  }
}

// /food GET pt2
export const sortAllFood: RequestHandler = (_req, res, next) => {
  res.locals.sides = []
  res.locals.starters = []
  res.locals.smallplates = []
  res.locals.largeplates = []
  res.locals.dessert = []
  res.locals.feature = []

  res.locals.allfood.forEach((item: { menuSection: string }) => {
    if (item.menuSection === 'side') res.locals.sides.push(item)
    else if (item.menuSection === 'feature') res.locals.feature.push(item)
    else if (item.menuSection === 'start') res.locals.starters.push(item)
    else if (item.menuSection === 'small') res.locals.smallplates.push(item)
    else if (item.menuSection === 'large') res.locals.largeplates.push(item)
    else if (item.menuSection === 'dessert') res.locals.dessert.push(item)
  })

  next()
}

// /food/create POST
export const createFood: RequestHandler = async (req, _res, next) => {
  try {
    const food = await Food.create({ ...req.body, itemType: ITEM_TYPES.FOOD })

    next()
  } catch (err) {
    return next(err)
  }
}

// /edit/:food_id?_method=PUT
export const updateFood: RequestHandler = async (req, res, next) => {
  try {
    const foodToUpdate = await Food.findOne({ where: { id: req.params.food_id } })
    if (foodToUpdate) {
      updateRowLoop(req.body, foodToUpdate, 'Food')
      res.locals.updatedFood = foodToUpdate
      await foodToUpdate.save()
    } else {
      throw new Error('could not find food', { cause: req.params.food_id })
    }
    next()
  } catch (err) {
    return next(err)
  }
}


export const editFood: RequestHandler = async (req, res, next) => {
  try {
    res.locals.food = await Food.findOne({ where: { id: req.params.food_id } })
    next()
  } catch (err) {
    return next(err)
  }
}

// /edit/:food_id?_method=DELETE
export const deleteFood: RequestHandler = async (req, res, next) => {
  try {
    res.locals.deleted =  await Food.destroy({ where: { id: req.params.food_id } })
    next()
  } catch (err) {
    return next(err)
  }
}
