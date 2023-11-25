const db = require('../models')

// /NonAlc GET
exports.getAllNonAlcs = async function (req, res, next){
  try{
    res.locals.allNonAlcs = await db.NonAlc.find()
    res.locals.created = null
    next()

  }catch(err){
    return next(err)
  }
}

// /NonAlc/create POST
exports.createNonAlc = async function (req,res,next){
  try{
    const NonAlc = await db.NonAlc.create({...req.body, itemType: 'NonAlc'})

    next()
  } catch(err){
    return next(err)
  }
}

// /edit/:NonAlc_id?_method=PUT
exports.updateNonAlc = async function (req, res, next){
  try{
    res.locals.updatedNonAlc = await db.NonAlc.findOneAndUpdate({_id: req.params.NonAlc_id}, req.body)
    next()
  } catch(err){
    return next(err)
  }
}


exports.editNonAlc = async function (req, res, next){
  try{
    const filter = {_id: req.params.NonAlc_id}
    res.locals.NonAlc = await db.NonAlc.findOne(filter)
    next()
  } catch(err) {
    return next(err)
  }
}

// /edit/:NonAlc_id?_method=DELETE
exports.deleteNonAlc = async function (req,res,next){
  try{
    res.locals.deleted =  await db.NonAlc.deleteOne({_id: req.params.NonAlc_id})
    next()
  } catch(err){
    return next(err)
  }
}
