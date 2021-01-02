const db = require("../models");

// /food GET
exports.getAllFood = async function(req, res, next){
  try{
    res.locals.allfood = await db.Food.find();
    console.log(res.locals.allfood)
    res.locals.created = null;
    next();
    
  }catch(err){
    return next(err);
  }
}

// /food/create POST
exports.createFood = async function(req,res,next){
  try{
    let food = await db.Food.create({...req.body, itemType: "food"});
    req.session.created = food;

    next();
  } catch(err){
    return next(err);
  }
}

// /edit/:food_id?_method=PUT
exports.updateFood = async function(req, res, next){
  try{
    res.locals.updatedFood = await db.Food.findOneAndUpdate({_id: req.params.food_id}, req.body);
    next();
  } catch(err){
    return next(err);
  }
}


exports.editFood = async function(req, res, next){
  try{
    let filter = {_id: req.params.food_id};
    res.locals.food = await db.Food.findOne(filter);
    next()
  } catch(err) {
    return next(err);
  }
}

// /edit/:food_id?_method=DELETE
exports.deleteFood = async function(req,res,next){
  try{
    res.locals.deleted =  await db.Food.deleteOne({_id: req.params.food_id});
    next();
  } catch(err){
    return next(err);
  }
}