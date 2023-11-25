require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const path = require('path')
const cors = require('cors')
const methodOverride = require('method-override')
const authRoutes = require('./routes/auth')
const authModule = require('./middleware/auth')
const beerRoutes = require('./routes/beer')
const foodRoutes = require('./routes/food')
const mainRoutes = require('./routes/main')
const cocktailRoutes = require('./routes/cocktail')
const spiritRoutes = require('./routes/spirit')
const nonalcRoutes = require('./routes/nonalc')
const externalRoutes = require('./routes/external')
const seedDB = require('./seedDB')
const PORT = 8000

const { loginRequired, ensureCorrectUser } = authModule
////////////////////////////////////////
// SEE MODELS/INDEX FOR MONGOOSE CONFIG
const db = require('./models')

////////////////////////////
// UNCOMMENT TO RESEED DB
// seedDB();

////////////////////////////////////
// GENERAL SETUP
app.use(methodOverride('_method'))
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'public')))

////////////////////////////
// ERROR HANDLING
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  // console.log(err);
})

///////////////////////////////
// DEFINE ROUTES
// TODO - rename and redefine these routes to things that make more sense
app.use('/beer', beerRoutes)     // REQUIRES AUTH. backend view/edit beer
app.use('/food', foodRoutes)     // REQUIRES AUTH. backend view/edit food
app.use('/cocktail', cocktailRoutes)
app.use('/spirit', spiritRoutes)
app.use('/nonalc', nonalcRoutes)
app.use('/', mainRoutes)         // customers accessing the frontend
app.use('/api/', externalRoutes) // DOES NOT REQUIRE AUTH. path for frontend to get menu data
app.use('/api/auth', authRoutes) // AUTH 4 LYFE

app.listen(process.env.PORT || 8000, () => {
  console.log('app running')
})

