require('dotenv').config();
const express         = require('express'),
      app             = express(),
      bodyParser      = require("body-parser"),
      path            = require("path"),
      cors            = require("cors"),
      methodOverride  = require("method-override"),
      authRoutes      = require("./routes/auth"),
    { loginRequired, 
      ensureCorrectUser} = require("./middleware/auth"),
      beerRoutes      = require("./routes/beer"),
      foodRoutes      = require("./routes/food"),
      mainRoutes      = require("./routes/main"),
      externalRoutes  = require("./routes/external");
      seedDB          = require("./seedDB"),
      PORT            = 8000;

////////////////////////////////////////
// SEE MODELS/INDEX FOR MONGOOSE CONFIG
const db = require("./models");

////////////////////////////
// UNCOMMENT TO RESEED DB
// seedDB();

////////////////////////////////////
// GENERAL SETUP
app.use(methodOverride("_method"));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname,"public")));

////////////////////////////
// ERROR HANDLING
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  // console.log(err);
});

///////////////////////////////
// DEFINE ROUTES
// TODO - rename and redefine these routes to things that make more sense
app.use("/beer", beerRoutes);     // REQUIRES AUTH. backend view/edit beer
app.use("/food", foodRoutes);     // REQUIRES AUTH. backend view/edit food
app.use("/", mainRoutes);         // customers accessing the frontend
app.use("/api/", externalRoutes); // DOES NOT REQUIRE AUTH. path for frontend to get menu data
app.use('/api/auth', authRoutes); // AUTH 4 LYFE

app.listen(process.env.PORT || 8000, () => {
  console.log(`app running`);
});

