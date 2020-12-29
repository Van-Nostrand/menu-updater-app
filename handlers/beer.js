const db = require("../models");

exports.createBeer = async function(req,res,next){
  try{
    let beer = await db.Beer.create({...req.body});

    return res.status(200).json(beer);
  } catch(err){
    return next(err);
  }
}

exports.getAllBeers = async function(req, res, next){
  try{
    res.locals.allbeers = await db.Beer.find();
    next();
  }catch(err){
    return next(err);
  }
}

exports.editBeer = async function(req, res, next){  
  try{
    let theBeer = await db.Beer.findOneAndUpdate({id: req.params.beer_id}, req.body);
    return res.status(200).json(theBeer);

  } catch(err){
    return next(err);
  }
}