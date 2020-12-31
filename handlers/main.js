const db = require("../models");

exports.getWholeMenu = async function(req, res, next){
  try{
    let allbeers = await db.Beer.find();
    let allfoods = await db.Food.find();
    res.locals.wholeMenu = [...allbeers, ...allfoods];
    res.locals.created = null; //?

    next();

  }catch(err){
    return next(err);
  }
}

