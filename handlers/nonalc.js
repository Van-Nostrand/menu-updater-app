const { NonAlc } = require('../models')
const { ITEM_TYPES } = require('../util/constants')
const { updateRowLoop } = require('./helpers')

// /NonAlc GET
exports.getAllNonAlcs = async (_req, res, next) => {
  try {
    res.locals.allNonAlcs = await NonAlc.findAll()
    res.locals.created = null
    next()

  } catch (err) {
    return next(err)
  }
}

// /NonAlc/create POST
exports.createNonAlc = async (req, res, next) => {
  try {
    const NonAlc = await NonAlc.create({ ...req.body, itemType: ITEM_TYPES.NON_ALC })

    next()
  } catch (err) {
    return next(err)
  }
}

// /edit/:NonAlc_id?_method=PUT
exports.updateNonAlc = async (req, res, next) => {
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


exports.editNonAlc = async (req, res, next) => {
  try {
    res.locals.NonAlc = await NonAlc.findOne({ where: { id: req.params.NonAlc_id } })
    next()
  } catch (err) {
    return next(err)
  }
}

// /edit/:NonAlc_id?_method=DELETE
exports.deleteNonAlc = async (req,res,next) => {
  try {
    res.locals.deleted =  await NonAlc.destroy({ where: { id: req.params.NonAlc_id } })
    next()
  } catch (err) {
    return next(err)
  }
}
