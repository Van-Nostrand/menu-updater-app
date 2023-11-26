import { RequestHandler } from 'express'
import { Cocktail } from '../models'
import { updateRowLoop } from './helpers'

// /cocktail GET
const getAllCocktails: RequestHandler = async (req, res, next) => {
  try {
    res.locals.allCocktails = await Cocktail.findAll()
    res.locals.created = null
    next()

  } catch (err) {
    return next(err)
  }
}

// /cocktail/create POST
const createCocktail: RequestHandler = async (req, res, next) => {
  try {
    await Cocktail.create({ ...req.body, itemType: 'cocktail' })

    next()
  } catch (err) {
    return next(err)
  }
}

// /edit/:cocktail_id?_method=PUT
const updateCocktail: RequestHandler = async (req, res, next) => {
  try {
    const cocktailToUpdate = await Cocktail.findOne({ where: { id: req.params.cocktail_id } })
    if (cocktailToUpdate) {
      updateRowLoop(req.body, cocktailToUpdate, 'Cocktail')
      res.locals.updatedCocktail = cocktailToUpdate
      await cocktailToUpdate.save()
    } else {
      throw new Error('could not find cocktail', { cause: req.params.cocktail_id })
    }
    next()
  } catch (err) {
    return next(err)
  }
}


const editCocktail: RequestHandler = async (req, res, next) => {
  try {
    res.locals.cocktail = await Cocktail.findOne({ where: { id: req.params.cocktail_id } })
    next()
  } catch (err) {
    return next(err)
  }
}

// /edit/:cocktail_id?_method=DELETE
const deleteCocktail: RequestHandler = async (req, res, next) => {
  try {
    res.locals.deleted =  await Cocktail.destroy({ where: { id: req.params.cocktail_id } })
    next()
  } catch (err) {
    return next(err)
  }
}

export {
  getAllCocktails,
  createCocktail,
  updateCocktail,
  editCocktail,
  deleteCocktail,
}
