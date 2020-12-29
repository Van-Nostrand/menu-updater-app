const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const PORT = 8000;
const axios = require("axios");
const path = require("path");

const beerRoutes = require("./routes/beer");
const foodRoutes = require("./routes/food");

const db = require("./models");

console.log("heres db");
console.log(db);

// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function callback () {
//   console.log("h");
// });

// exports.test = function(req,res) {
//   console.log(res)
// };

app.use(bodyParser.json());
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname,"/public")));
app.use(express.static(path.join(__dirname,"/src")));
app.use("/beers", beerRoutes);
app.use("/food", foodRoutes);

app.get("/", function(req,res){
  res.render("landing");
});

app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`);
});

