const { Beer, Food } = require('../models')

// export to external api
exports.exportMenuData = async (req, res, next) => {
  // console.log("external request!")
  try {
    const allbeer = await Beer.findAll()
    const allfood = await Food.findAll()
    res.locals.wholeMenu = [allbeer, allfood]

    next()
  } catch (err) {
    console.log(err)
  }
}
