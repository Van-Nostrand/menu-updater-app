const express         = require('express'),
      app             = express(),
      session         = require('express-session'),
      bodyParser      = require("body-parser"),
      cookieParser    = require('cookie-parser'),
      axios           = require("axios"),
      path            = require("path"),
      cors            = require("cors"),
      sass            = require('sass'),
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

sass.render({
  file: path.join(__dirname, "scss/index.scss"),
  outFile: path.join(__dirname, 'public/index.css'), 
},
  function(err, result){
    if(err) {
      console.log("error in sass.render")
      console.log(err);
    }
    else {
      console.log("sass seems to be working");
    }
  }
)


app.use(session({
  secret: "ITS A DAMN SECRET", 
  resave: false, 
  saveUninitialized: false, 
  cookie: { sameSite: 'strict'}
}));
app.use(methodOverride("_method"));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname,"public")));

// error handling
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  console.log(err);
});

// define routes
app.use("/beer", beerRoutes);
app.use("/food", foodRoutes);
app.use("/", mainRoutes);

app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`);
});

