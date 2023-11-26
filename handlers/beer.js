import { Beer } from '../models'
import { ITEM_TYPES } from '../util/constants'
import { updateRowLoop } from './helpers'

// /beers GET
const getAllBeers = async (_req, res, next) => {
  try {
    res.locals.allbeers = await Beer.findAll()
    if (!res.locals.created) {
      res.locals.created = null
    }
    next()
  } catch (err) {
    return next(err)
  }
}

// /beers/create POST
const createBeer = async (req, res, next) => {
  try {
    if (!(
      'name' in req.body &&
      'pour1' in req.body &&
      'pour1price' in req.body
    )) {
      throw new Error('missing required properties from request body', { cause: req.body })
    }
    res.locals.beer = await Beer.create({
      ...req.body,
      itemType: ITEM_TYPES.BEER
    })
    next()
  } catch (err) {
    return next(err)
  }
}

// /edit/:beer_id?_method=PUT
const updateBeer = async (req, res, next) => {
  try {
    const beerToUpdate = await Beer.findOne({ where: { id: req.params.beer_id } })
    if (beerToUpdate) {
      updateRowLoop(req.body, beerToUpdate, 'Beer')

      res.locals.updatedBeer = beerToUpdate
      await beerToUpdate.save()
    } else {
      throw new Error('could not find beer', { cause: req.params.beer_id })
    }
    next()
  } catch (err) {
    return next(err)
  }
}

// /edit/:beer_id GET
const editBeer = async (req, res, next) => {
  try {
    res.locals.beer = await Beer.findOne({ where: { id: req.params.beer_id } })
    next()
  } catch (err) {
    return next(err)
  }
}

// /edit/:beer_id?_method=DELETE
const deleteBeer = async (req,res,next) => {
  try {
    res.locals.deleted = await Beer.destroy({ where: { id: req.params.beer_id } })
    next()
  } catch (err) {
    return next(err)
  }
}

export {
  getAllBeers,
  createBeer,
  updateBeer,
  editBeer,
  deleteBeer,
}
