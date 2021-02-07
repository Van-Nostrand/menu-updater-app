const db = require("../models");

// /cocktail GET
exports.getAllCocktails = async function(req, res, next){
  try{
    res.locals.allCocktails = await db.Cocktail.find();
    res.locals.created = null;
    next();
    
  }catch(err){
    return next(err);
  }
}

// /cocktail/create POST
exports.createCocktail = async function(req,res,next){
  try{
    let cocktail = await db.Cocktail.create({...req.body, itemType: "cocktail"});

    next();
  } catch(err){
    return next(err);
  }
}

// /edit/:cocktail_id?_method=PUT
exports.updateCocktail = async function(req, res, next){
  try{
    res.locals.updatedCocktail = await db.Cocktail.findOneAndUpdate({_id: req.params.cocktail_id}, req.body);
    next();
  } catch(err){
    return next(err);
  }
}


exports.editCocktail = async function(req, res, next){
  try{
    let filter = {_id: req.params.cocktail_id};
    res.locals.cocktail = await db.Cocktail.findOne(filter);
    next()
  } catch(err) {
    return next(err);
  }
}

// /edit/:cocktail_id?_method=DELETE
exports.deleteCocktail = async function(req,res,next){
  try{
    res.locals.deleted =  await db.Cocktail.deleteOne({_id: req.params.cocktail_id});
    next();
  } catch(err){
    return next(err);
  }
}