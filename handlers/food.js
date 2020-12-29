const db = require("../models");

exports.createFood = async function(req,res,next){
  try{
    let food = await db.Food.create({...req.body});

    return res.status(200).json(food);
  } catch(err){
    return next(err);
  }
}

exports.getAllFoods = async function(req, res, next){
  try{
    let allfoods = await db.Food.find();

    return res.status(200).json(allfoods);

  }catch(err){
    return next(err);
  }
}

exports.editFood = async function(req, res, next){  
  try{
    let filter = {id: req.params.food_id};
    let theFood = await db.Food.findOneAndUpdate(filter, req.body);

    return res.status(200).json(theFood);

  } catch(err){
    return next(err);
  }
}