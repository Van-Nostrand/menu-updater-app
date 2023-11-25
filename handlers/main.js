const db = require('../models')

// view all food and beer
exports.getWholeMenu = async function (req, res, next){
  try{
    const allbeer = await db.Beer.find()
    const allfood = await db.Food.find()
    res.locals.wholeMenu = [...allbeer, ...allfood]
    res.locals.created = null //? necessary?

    next()

  }catch(err){
    return next(err)
  }
}

// export to external api
exports.exportMenuData = async function (req, res, next){
  try{
    const allbeer = await db.Beer.find()
    const allfood = await db.Food.find()
    res.send({allbeer, allfood})
  } catch(err){
    console.log(err)
  }

}

