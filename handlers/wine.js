const db = require('../models')

// /wine GET
exports.getAllWine = async function (req, res, next){
  try{
    res.locals.allwine = await db.Wine.find()
    next()
  }catch(err){
    return next(err)
  }
}

// /wine/create POST
exports.createWine = async function (req,res,next){
  try{
    await db.Wine.create({...req.body, itemType: 'wine'})
    next()
  } catch(err){
    return next(err)
  }
}

// /edit/:wine_id?_method=PUT
exports.updateWine = async function (req, res, next){
  try{
    res.locals.updatedWine = await db.Wine.findOneAndUpdate({_id: req.params.wine_id}, req.body)
    next()
  } catch(err){
    return next(err)
  }
}

// /edit/:wine_id GET
exports.editWine = async function (req, res, next){
  try{
    res.locals.wine = await db.Wine.findOne({_id: req.params.wine_id})
    next()
  } catch(err){
    return next(err)
  }
}

// /edit/:wine_id?_method=DELETE
exports.deleteWine = async function (req,res,next){
  try{
    res.locals.deleted =  await db.Wine.deleteOne({_id: req.params.wine_id})
    next()
  } catch(err){
    return next(err)
  }
}