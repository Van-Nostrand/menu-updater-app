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
    let allbeers = await db.Beer.find();

    return res.status(200).json(allbeers);

  }catch(err){
    return next(err);
  }
}

exports.editBeer = async function(req, res, next){  
  try{
    let filter = {id: req.params.beer_id};
    let theBeer = await db.Beer.findOneAndUpdate(filter, req.body);

    return res.status(200).json(theBeer);

  } catch(err){
    return next(err);
  }
}