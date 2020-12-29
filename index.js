const express     = require('express'),
      app         = express(),
      bodyParser  = require("body-parser"),
      axios       = require("axios"),
      path        = require("path"),
      cors        = require("cors"),
      beerRoutes  = require("./routes/beer"),
      foodRoutes  = require("./routes/food"),
      mainRoutes  = require("./routes/main"),
      seedDB      = require("./seedDB"),
      PORT        = 8000;


//--------------------------------------------
// SEE MODELS/INDEX FOR MONGOOSE CONFIG
const db = require("./models");

//use to reset the database for development
// seedDB();

app.use(cors());
app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname,"/public")));
app.use(express.static(path.join(__dirname,"/src")));
app.use("/beers", beerRoutes);
app.use("/food", foodRoutes);
app.use("/", mainRoutes);

// app.get("/", function(req,res){
//   res.render("landing");
// });

app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`);
});

