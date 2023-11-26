const { Wine } = require('../models')
const { ITEM_TYPES } = require('../util/constants')
const { updateRowLoop } = require('./helpers')

// /wine GET
exports.getAllWine = async (req, res, next) => {
  try {
    res.locals.allwine = await Wine.findAll()
    next()
  } catch (err) {
    return next(err)
  }
}

// /wine/create POST
exports.createWine = async (req, res, next) => {
  try {
    await Wine.create({ ...req.body, itemType: ITEM_TYPES.WINE })
    next()
  } catch (err) {
    return next(err)
  }
}

// /edit/:wine_id?_method=PUT
exports.updateWine = async (req, res, next) => {
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
exports.editWine = async (req, res, next) => {
  try {
    res.locals.wine = await Wine.findOne({ where: { id: req.params.wine_id } })
    next()
  } catch (err) {
    return next(err)
  }
}

// /edit/:wine_id?_method=DELETE
exports.deleteWine = async (req, res, next) => {
  try {
    res.locals.deleted =  await Wine.destroy({ where: { id: req.params.wine_id } })
    next()
  } catch (err) {
    return next(err)
  }
}
