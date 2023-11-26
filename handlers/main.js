const { Beer, Food } = require('../models')

// view all food and beer
exports.getWholeMenu = async (req, res, next) => {
  try {
    const allbeer = await Beer.findAll()
    const allfood = await Food.findAll()
    res.locals.wholeMenu = [...allbeer, ...allfood]
    res.locals.created = null //? necessary?

    next()

  } catch (err) {
    return next(err)
  }
}

// export to external api
exports.exportMenuData = async (req, res, next) => {
  try {
    const allbeer = await Beer.findAll()
    const allfood = await Food.findAll()
    res.send({ allbeer, allfood })
  } catch (err) {
    console.log(err)
  }

}

