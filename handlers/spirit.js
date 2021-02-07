const db = require("../models");

// /spirit GET
exports.getAllSpirits = async function(req, res, next){
  try{
    res.locals.allSpirits = await db.Spirit.find();
    res.locals.created = null;
    next();
    
  }catch(err){
    return next(err);
  }
}

// /spirit/create POST
exports.createSpirit = async function(req,res,next){
  try{
    let spirit = await db.Spirit.create({...req.body, itemType: "spirit"});

    next();
  } catch(err){
    return next(err);
  }
}

// /edit/:spirit_id?_method=PUT
exports.updateSpirit = async function(req, res, next){
  try{
    res.locals.updatedSpirit = await db.Spirit.findOneAndUpdate({_id: req.params.spirit_id}, req.body);
    next();
  } catch(err){
    return next(err);
  }
}


exports.editSpirit = async function(req, res, next){
  try{
    let filter = {_id: req.params.spirit_id};
    res.locals.spirit = await db.Spirit.findOne(filter);
    next()
  } catch(err) {
    return next(err);
  }
}

// /edit/:spirit_id?_method=DELETE
exports.deleteSpirit = async function(req,res,next){
  try{
    res.locals.deleted =  await db.Spirit.deleteOne({_id: req.params.spirit_id});
    next();
  } catch(err){
    return next(err);
  }
}