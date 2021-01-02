const db = require("../models");

// /food GET
exports.getAllFood = async function(req, res, next){
  try{
    res.locals.allfood = await db.Food.find();
    res.locals.created = null;
    next();
    
  }catch(err){
    return next(err);
  }
}

// /food GET pt2
exports.sortAllFood = function(req,res,next){
  res.locals.sides = [];
  res.locals.starters = [];
  res.locals.smallplates = [];
  res.locals.largeplates = [];
  res.locals.dessert = [];

  res.locals.allfood.forEach(item => {
    if(item.menuSection === "side") res.locals.sides.push(item);
    else if(item.menuSection === "start") res.locals.starters.push(item);
    else if(item.menuSection === "small") res.locals.smallplates.push(item);
    else if(item.menuSection === "large") res.locals.largeplates.push(item);
    else if(item.menuSection === "dessert") res.locals.dessert.push(item);
  });
  
  next();
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