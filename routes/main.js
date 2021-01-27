const express = require('express');
const router = express.Router({mergeParams: true});
const path = require("path");

const { getWholeMenu } = require("../handlers/main");

// router.get("/", getWholeMenu, function(req, res, next){
//   res.render("viewAll", {allItems: res.locals.wholeMenu, category: "All Menu Items", created: res.locals.created});
// });

router.get("/", function(req,res,next){
  const options = {
    root: "public",
    dotfiles: "allow"
  }

    // res.sendFile("index.html", options);
    res.sendFile("index.html");
  // } catch(err){
  //   console.log(err);
  // }
})

module.exports = router;
