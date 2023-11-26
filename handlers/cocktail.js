const { Cocktail } = require('../models')
const { updateRowLoop } = require('./helpers')

// /cocktail GET
exports.getAllCocktails = async function (req, res, next) {
  try {
    res.locals.allCocktails = await Cocktail.findAll()
    res.locals.created = null
    next()

  } catch (err) {
    return next(err)
  }
}

// /cocktail/create POST
exports.createCocktail = async function (req,res,next) {
  try {
    const cocktail = await Cocktail.create({ ...req.body, itemType: 'cocktail' })

    next()
  } catch (err) {
    return next(err)
  }
}

// /edit/:cocktail_id?_method=PUT
exports.updateCocktail = async function (req, res, next) {
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


exports.editCocktail = async function (req, res, next) {
  try {
    res.locals.cocktail = await Cocktail.findOne({ where: { id: req.params.cocktail_id } })
    next()
  } catch (err) {
    return next(err)
  }
}

// /edit/:cocktail_id?_method=DELETE
exports.deleteCocktail = async function (req,res,next) {
  try {
    res.locals.deleted =  await Cocktail.destroy({ where: { id: req.params.cocktail_id } })
    next()
  } catch (err) {
    return next(err)
  }
}
