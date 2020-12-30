const db = require("../models");


exports.createBeer = async function(req,res,next){
  try{
    console.log(req.body)
    let beer = await db.Beer.create({...req.body});
    res.locals.created = beer;
    next();
  } catch(err){
    return next(err);
  }
}

exports.getAllBeers = async function(req, res, next){
  try{
    res.locals.allbeers = await db.Beer.find();
    if(!res.locals.created) res.locals.created = null;
    next();
  }catch(err){
    return next(err);
  }
}

// /edit/:beer_id
exports.editBeer = async function(req, res, next){  
  try{
    let theBeer = await db.Beer.findOneAndUpdate({_id: req.params.beer_id}, req.body);
    next();

  } catch(err){
    return next(err);
  }
}

exports.deleteBeer = async function(req,res,next){
  try{
    console.log("delete route reached")
    console.log(req.params.beer_id);
    let beer = await db.Beer.find({_id: req.params.beer_id});
    console.log(beer);
    res.locals.deleted =  await db.Beer.deleteOne({_id: req.params.beer_id});
    next();
  } catch(err){
    return next(err);
  }
}