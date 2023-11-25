const db = require("../models");

// export to external api
exports.exportMenuData = async function(req, res, next){
  // console.log("external request!")
  try{
    let allbeer = await db.Beer.find();
    let allfood = await db.Food.find();
    res.locals.wholeMenu = [allbeer, allfood];
    
    next();
  } catch(err){
    console.log(err);
  }
}