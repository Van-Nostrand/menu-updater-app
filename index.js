const express         = require('express'),
      app             = express(),
      session         = require('express-session'),
      bodyParser      = require("body-parser"),
      cookieParser    = require('cookie-parser'),
      axios           = require("axios"),
      path            = require("path"),
      cors            = require("cors"),
      methodOverride  = require("method-override"),
      beerRoutes      = require("./routes/beer"),
      foodRoutes      = require("./routes/food"),
      mainRoutes      = require("./routes/main"),
      seedDB          = require("./seedDB"),
      PORT            = 8000;


//--------------------------------------------
// SEE MODELS/INDEX FOR MONGOOSE CONFIG
const db = require("./models");

//use to reset the database for development
// seedDB();

// express configuration
// app.use(cookieParser());
app.use(session({secret: "ITS A DAMN SECRET", cookie: { sameSite: 'strict'}}));
app.use(methodOverride("_method"));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname,"/public")));

app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  console.log(err);
});

// define routes
app.use("/beers", beerRoutes);
app.use("/food", foodRoutes);
app.use("/", mainRoutes);

app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`);
});

