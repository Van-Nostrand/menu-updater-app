const db = require("../models");
const axios = require('axios');

// view all food and beer
exports.getWholeMenu = async function(req, res, next){
  try{
    let allbeer = await db.Beer.find();
    let allfood = await db.Food.find();
    res.locals.wholeMenu = [...allbeer, ...allfood];
    res.locals.created = null; //? necessary?

    next();

  }catch(err){
    return next(err);
  }
}

// export to external api
exports.exportMenuData = async function(req, res, next){
  try{
    let allbeer = await db.Beer.find();
    let allfood = await db.Food.find();
    res.send({allbeer, allfood});
  } catch(err){
    console.log(err);
  }

}

