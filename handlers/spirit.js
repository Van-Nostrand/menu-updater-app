const { Spirit } = require('../models')
const { ITEM_TYPES } = require('../util/constants')
const { updateRowLoop } = require('./helpers')

// /spirit GET
exports.getAllSpirits = async (_req, res, next) => {
  try {
    res.locals.allSpirits = await Spirit.findAll()
    res.locals.created = null
    next()

  } catch (err) {
    return next(err)
  }
}

// /spirit/create POST
exports.createSpirit = async (req, _res, next) => {
  try {
    const spirit = await Spirit.create({ ...req.body, itemType: ITEM_TYPES.SPIRITS })

    next()
  } catch (err) {
    return next(err)
  }
}

// /edit/:spirit_id?_method=PUT
exports.updateSpirit = async (req, res, next) => {
  try {
    const spiritToUpdate = await Spirit.findOneAndUpdate({ where: { id: req.params.spirit_id } })
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


exports.editSpirit = async (req, res, next) => {
  try {
    res.locals.spirit = await Spirit.findOne({ where: { id: req.params.spirit_id } })
    next()
  } catch (err) {
    return next(err)
  }
}

// /edit/:spirit_id?_method=DELETE
exports.deleteSpirit = async (req, res, next) => {
  try {
    res.locals.deleted =  await Spirit.destroy({ where: { id: req.params.spirit_id } })
    next()
  } catch (err) {
    return next(err)
  }
}
