const db = require('../models')

// /nonalc GET
exports.getAllNonalcs = async function (req, res, next){
  try{
    res.locals.allNonalcs = await db.Nonalc.find()
    res.locals.created = null
    next()

  }catch(err){
    return next(err)
  }
}

// /nonalc/create POST
exports.createNonalc = async function (req,res,next){
  try{
    const nonalc = await db.Nonalc.create({...req.body, itemType: 'nonalc'})

    next()
  } catch(err){
    return next(err)
  }
}

// /edit/:nonalc_id?_method=PUT
exports.updateNonalc = async function (req, res, next){
  try{
    res.locals.updatedNonalc = await db.Nonalc.findOneAndUpdate({_id: req.params.nonalc_id}, req.body)
    next()
  } catch(err){
    return next(err)
  }
}


exports.editNonalc = async function (req, res, next){
  try{
    const filter = {_id: req.params.nonalc_id}
    res.locals.nonalc = await db.Nonalc.findOne(filter)
    next()
  } catch(err) {
    return next(err)
  }
}

// /edit/:nonalc_id?_method=DELETE
exports.deleteNonalc = async function (req,res,next){
  try{
    res.locals.deleted =  await db.Nonalc.deleteOne({_id: req.params.nonalc_id})
    next()
  } catch(err){
    return next(err)
  }
}