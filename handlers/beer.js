const db = require("../models");

// /beers GET
exports.getAllBeers = async function(req, res, next){
  try{
    res.locals.allbeers = await db.Beer.find();
    if(!res.locals.created) res.locals.created = null;
    next();
  }catch(err){
    return next(err);
  }
}

// /beers/create POST
exports.createBeer = async function(req,res,next){
  try{
    let beer = await db.Beer.create({...req.body, itemType: "beer"});
    req.session.created = beer;
    next();
  } catch(err){
    return next(err);
  }
}

// /edit/:beer_id?_method=PUT
exports.updateBeer = async function(req, res, next){  
  try{
    res.locals.updatedBeer = await db.Beer.findOneAndUpdate({_id: req.params.beer_id}, req.body);
    next();
  } catch(err){
    return next(err);
  }
}

// /edit/:beer_id GET
exports.editBeer = async function(req, res, next){
  try{
    res.locals.beer = await db.Beer.findOne({_id: req.params.beer_id});
    next();
  } catch(err){
    return next(err);
  }
}

// /edit/:beer_id?_method=DELETE
exports.deleteBeer = async function(req,res,next){
  try{
    res.locals.deleted =  await db.Beer.deleteOne({_id: req.params.beer_id});
    next();
  } catch(err){
    return next(err);
  }
}