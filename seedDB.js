const mongoose = require('mongoose')
const Beer = require('./models/beer')
const Food = require('./models/food')
const Wine = require('./models/wine')
const Cocktail = require('./models/cocktail')
const Spirit = require('./models/spirit')
const Nonalc = require('./models/nonalc')

async function seedDB (){
  try{
    //clear the database of all items
    await Beer.remove({}, function (err){
      if(err){
        console.log(err)
      }
      else{
        console.log('all beers are drunked')
      }
    })

    await Food.remove({}, function (err){
      if(err){
        console.log(err)
      }
      else{
        console.log('all foods are eated')
      }
    })

    await Wine.remove({}, function (err){
      if(err){
        console.log(err)
      }
      else {
        console.log('all wines are decanted')
      }
    })

    await Cocktail.remove({}, function (err){
      if(err){
        console.log(err)
      }
      else {
        console.log('all cocktails are sipped')
      }
    })

    await Spirit.remove({}, function (err){
      if(err){
        console.log(err)
      }
      else{
        console.log('all spirits are shot')
      }
    })

    await Nonalc.remove({}, function (err){
      if(err){
        console.log(err)
      }
      else {
        console.log('all nonalcs are mixed')
      }
    })

    //RESEED
    await starters.forEach(function (seed){
      Food.create(seed, function (err, data){
        if(err){
          console.log(err)
        }
        else{
          console.log('added a starter')
        }
      })
    })

    await smallplates.forEach(function (seed){
      Food.create(seed, function (err, data){
        if(err){
          console.log(err)
        }
        else{
          console.log('added a small plate')
        }
      })
    })

    await largeplates.forEach(function (seed){
      Food.create(seed, function (err, data){
        if(err){
          console.log(err)
        }
        else{
          console.log('added a large plate')
        }
      })
    })

    await desserts.forEach(function (seed){
      Food.create(seed, function (err, data){
        if(err){
          console.log(err)
        }
        else{
          console.log('added a dessert')
        }
      })
    })

    await beerdata.forEach(function (seed){
      Beer.create(seed, function (err, data){
        if(err){
          console.log(err)
        }
        else{
          console.log('added a beer!')
        }
      })
    })

    await SPIRITS.forEach(function (seed){
      Spirit.create(seed, function (err, data){
        if(err){
          console.log('error creating item')
          console.log(seed)
          console.log(err)
        }
        else{
          console.log('added a spirit!')
        }
      })
    })

    await COCKTAILS.forEach(function (seed){
      Cocktail.create(seed, function (err, data){
        if(err){
          console.log('error creating item')
          console.log(seed)
          console.log(err)
        }
        else{
          console.log('added a cocktail!')
        }
      })
    })

    await WINE.forEach(function (seed){
      Wine.create(seed, function (err, data){
        if(err){
          console.log('error creating item')
          console.log(seed)
          console.log(err)
        }
        else{
          console.log('added a wine!')
        }
      })
    })

    await NON_ALCOHOLIC.forEach(function (seed){
      Nonalc.create(seed, function (err, data){
        if(err){
          console.log('error creating item')
          console.log(seed)
          console.log(err)
        }
        else{
          console.log('added a juicebox!')
        }
      })
    })

  } catch(err){
    console.log(err)
  }
}

module.exports = seedDB


////////////////////////////
///  VARIABLES

const SPIRITS = [
  {
    brandname: 'Jameson',
    productname: 'Whisky',
    style: 'irish',
    itemType: 'spirit',
    singleprice: '7',
    doubleprice: '11'
  },
  {
    brandname: 'George Dickel',
    productname: 'Tennessee Whisky',
    style: 'tennessee',
    itemType: 'spirit',
    singleprice: '7',
    doubleprice: '11'
  },
  {
    brandname: 'Jack Daniels',
    productname: 'Old No. 7',
    style: 'tennessee',
    itemType: 'spirit',
    singleprice: '8',
    doubleprice: '13'
  },
  {
    brandname: 'Beefeater',
    productname: 'London Dry Gin',
    style: 'gin',
    itemType: 'spirit',
    singleprice: '6.50',
    doubleprice: '10.50'
  },
  {
    brandname: 'Odd Society',
    productname: 'Wallflower',
    style: 'gin',
    itemType: 'spirit',
    singleprice: '9',
    doubleprice: '16'
  },
  {
    brandname: 'Hayman\'s',
    productname: 'Sloe Gin',
    style: 'gin',
    itemType: 'spirit',
    singleprice: '9',
    doubleprice: '16'
  },
  {
    brandname: 'Victoria Distillery',
    productname: 'Cocktail Gin',
    style: 'gin',
    itemType: 'spirit',
    singleprice: '9',
    doubleprice: '16'
  },
  {
    brandname: 'Resurrection',
    productname: 'BC Dry Gin',
    style: 'gin',
    itemType: 'spirit',
    singleprice: '10',
    doubleprice: '18'
  },
  {
    brandname: 'Long Table',
    productname: 'London Dry Gin',
    style: 'gin',
    itemType: 'spirit',
    singleprice: '10',
    doubleprice: '18'
  },
  {
    brandname: 'Long Table',
    productname: 'Cucumber Gin',
    style: 'gin',
    itemType: 'spirit',
    singleprice: '10',
    doubleprice: '18'
  },
  {
    brandname: 'Empress',
    productname: '1908 Gin',
    style: 'gin',
    itemType: 'spirit',
    singleprice: '11',
    doubleprice: '19'
  },
  {
    brandname: 'Resurrection',
    productname: 'Rose Gin',
    style: 'gin',
    itemType: 'spirit',
    singleprice: '13',
    doubleprice: '23'
  },
  {
    brandname: 'Absolut',
    productname: 'Vodka',
    style: 'vodka',
    itemType: 'spirit',
    singleprice: '6.50',
    doubleprice: '10.50'
  },
  {
    brandname: 'Odd Society',
    productname: 'East Van Vodka',
    style: 'vodka',
    itemType: 'spirit',
    singleprice: '9',
    doubleprice: '16'
  },
  {
    brandname: 'Long Table',
    productname: 'Texada Vodka',
    style: 'vodka',
    itemType: 'spirit',
    singleprice: '10',
    doubleprice: '18'
  },
  {
    brandname: 'Grey Goose',
    productname: 'Vodka',
    style: 'vodka',
    itemType: 'spirit',
    singleprice: '11',
    doubleprice: '19'
  },
  {
    brandname: 'Olmeca',
    productname: 'Reposado',
    style: 'tequila',
    itemType: 'spirit',
    singleprice: '7',
    doubleprice: '13'
  },
  {
    brandname: 'El Jimador',
    productname: 'Silver',
    style: 'tequila',
    itemType: 'spirit',
    singleprice: '8',
    doubleprice: '13'
  },
  {
    brandname: 'Espolón',
    productname: 'Reposado',
    style: 'tequila',
    itemType: 'spirit',
    singleprice: '9',
    doubleprice: '14'
  },
  {
    brandname: 'Cazadores',
    productname: 'Anejo',
    style: 'tequila',
    itemType: 'spirit',
    singleprice: '9',
    doubleprice: '16'
  },
  {
    brandname: 'Sombra',
    productname: 'Ensamble',
    style: 'mezcal',
    itemType: 'spirit',
    singleprice: '12',
    doubleprice: '21'
  },
  {
    brandname: 'Bacardi',
    productname: 'Superior White Rum',
    style: 'rum',
    itemType: 'spirit',
    singleprice: '6.50',
    doubleprice: '10.50'
  },
  {
    brandname: 'Appleton Estate',
    productname: 'Signature Blend',
    style: 'rum',
    itemType: 'spirit',
    singleprice: '6.50',
    doubleprice: '10.50'
  },
  {
    brandname: 'Flor de Caña',
    productname: 'Anejo',
    style: 'rum',
    itemType: 'spirit',
    singleprice: '7',
    doubleprice: '12'
  },
  {
    brandname: 'Sailor Jerry',
    productname: 'Spiced Navy',
    style: 'rum',
    itemType: 'spirit',
    singleprice: '8',
    doubleprice: '13'
  },
  {
    brandname: 'Goslings',
    productname: 'Black Seal',
    style: 'rum',
    itemType: 'spirit',
    singleprice: '8',
    doubleprice: '13'
  },
  {
    brandname: 'Aperol',
    productname: '',
    style: 'liqueur',
    itemType: 'spirit',
    singleprice: '7',
    doubleprice: '13'
  },
  {
    brandname: 'Campari',
    productname: '',
    style: 'liqueur',
    itemType: 'spirit',
    singleprice: '7',
    doubleprice: '13'
  },
  {
    brandname: 'Long Table',
    productname: 'Akvavit',
    style: 'liqueur',
    itemType: 'spirit',
    singleprice: '10',
    doubleprice: '18'
  },
  {
    brandname: 'Capel',
    productname: 'Pisco',
    style: 'brandy',
    itemType: 'spirit',
    singleprice: '8',
    doubleprice: '13'
  },
  {
    brandname: 'Courvoisier',
    productname: 'VS',
    style: 'brandy',
    itemType: 'spirit',
    singleprice: '12',
    doubleprice: '21'
  },
  {
    brandname: 'Hennessy',
    productname: 'VS',
    style: 'brandy',
    itemType: 'spirit',
    singleprice: '13',
    doubleprice: '23'
  },
  {
    brandname: 'The Famous Grouse',
    productname: '',
    style: 'scotch',
    itemType: 'spirit',
    singleprice: '7',
    doubleprice: '13'
  },
  {
    brandname: 'The Famous Grouse',
    productname: 'Smokey Black',
    style: 'scotch',
    itemType: 'spirit',
    singleprice: '8',
    doubleprice: '14'
  },
  {
    brandname: 'McClelland\'s',
    productname: 'Islay',
    style: 'scotch',
    itemType: 'spirit',
    singleprice: '10',
    doubleprice: '18'
  },
  {
    brandname: 'Auchentoshan',
    productname: 'American Oak',
    style: 'scotch',
    itemType: 'spirit',
    singleprice: '12',
    doubleprice: '21'
  },
  {
    brandname: 'Aberlour',
    productname: '12yr',
    style: 'scotch',
    itemType: 'spirit',
    singleprice: '13',
    doubleprice: '23'
  },
  {
    brandname: 'Laphroaig',
    productname: '10yr',
    style: 'scotch',
    itemType: 'spirit',
    singleprice: '14',
    doubleprice: '25'
  },
  {
    brandname: 'Wisers',
    productname: 'Special Blend',
    style: 'rye',
    itemType: 'spirit',
    singleprice: '6½',
    doubleprice: '10½'
  },
  {
    brandname: 'Odd Society',
    productname: 'Mongrel',
    style: 'rye',
    itemType: 'spirit',
    singleprice: '7',
    doubleprice: '12'
  },
  {
    brandname: 'Bulleit',
    productname: 'Rye',
    style: 'rye',
    itemType: 'spirit',
    singleprice: '7',
    doubleprice: '12'
  },
  {
    brandname: 'Lot No. 40',
    productname: 'Rye',
    style: 'rye',
    itemType: 'spirit',
    singleprice: '7',
    doubleprice: '12'
  },
  {
    brandname: 'Resurrection',
    productname: 'White Rye',
    style: 'rye',
    itemType: 'spirit',
    singleprice: '10',
    doubleprice: '18'
  },
  {
    brandname: 'Odd Society',
    productname: 'Prospector',
    style: 'rye',
    itemType: 'spirit',
    singleprice: '11',
    doubleprice: '19'
  },
  {
    brandname: 'Rittenhouse',
    productname: 'Straight Rye',
    style: 'rye',
    itemType: 'spirit',
    singleprice: '12',
    doubleprice: '21'
  },
  {
    brandname: 'Mitchers',
    productname: 'Single Barrel Straight Rye',
    style: 'rye',
    itemType: 'spirit',
    singleprice: '16',
    doubleprice: '28'
  },
  {
    brandname: 'Wild Turkey',
    productname: '81',
    style: 'bourbon',
    itemType: 'spirit',
    singleprice: '6.50',
    doubleprice: '10.50'
  },
  {
    brandname: 'Jim Beam',
    productname: 'Kentucky Bourbon',
    style: 'bourbon',
    itemType: 'spirit',
    singleprice: '7',
    doubleprice: '13'
  },

  {
    brandname: 'Old Forester',
    productname: '',
    style: 'bourbon',
    itemType: 'spirit',
    singleprice: '8',
    doubleprice: '14'
  },
  {
    brandname: 'Bulleit',
    productname: 'Bourbon',
    style: 'bourbon',
    itemType: 'spirit',
    singleprice: '9',
    doubleprice: '16'
  },
  {
    brandname: 'Four Roses',
    productname: '',
    style: 'bourbon',
    itemType: 'spirit',
    singleprice: '9',
    doubleprice: '16'
  },
  {
    brandname: 'Buffalo Trace',
    productname: '',
    style: 'bourbon',
    itemType: 'spirit',
    singleprice: '9',
    doubleprice: '16'
  },
  {
    brandname: 'Makers Mark',
    productname: '',
    style: 'bourbon',
    itemType: 'spirit',
    singleprice: '10',
    doubleprice: '18'
  },
  {
    brandname: 'Jim Beam',
    productname: 'Old Tub',
    style: 'bourbon',
    itemType: 'spirit',
    singleprice: '10',
    doubleprice: '18'
  },
  {
    brandname: 'Redemption',
    productname: '',
    style: 'bourbon',
    itemType: 'spirit',
    singleprice: '10',
    doubleprice: '18'
  },
  {
    brandname: 'Rebel Yell',
    productname: '',
    style: 'bourbon',
    itemType: 'spirit',
    singleprice: '10',
    doubleprice: '18'
  },
  {
    brandname: 'Knob Creek',
    productname: '',
    style: 'bourbon',
    itemType: 'spirit',
    singleprice: '10',
    doubleprice: '18'
  },
  {
    brandname: 'I.W. Harper',
    productname: '',
    style: 'bourbon',
    itemType: 'spirit',
    singleprice: '10',
    doubleprice: '18'
  },
  {
    brandname: 'Russel\'s Reserve',
    productname: '10yr',
    style: 'bourbon',
    itemType: 'spirit',
    singleprice: '11',
    doubleprice: '19'
  },
  {
    brandname: 'Woodford Reserve',
    productname: '',
    style: 'bourbon',
    itemType: 'spirit',
    singleprice: '11',
    doubleprice: '19'
  },
  {
    brandname: 'Basil Hayden\'s',
    productname: '',
    style: 'bourbon',
    itemType: 'spirit',
    singleprice: '11',
    doubleprice: '19'
  },
  {
    brandname: 'Knob Creek',
    productname: 'Smoked Maple',
    style: 'bourbon',
    itemType: 'spirit',
    singleprice: '11',
    doubleprice: '19'
  },
  {
    brandname: 'Legent',
    productname: '',
    style: 'bourbon',
    itemType: 'spirit',
    singleprice: '11',
    doubleprice: '19'
  },
  {
    brandname: 'Elijah Craig',
    productname: '',
    style: 'bourbon',
    itemType: 'spirit',
    singleprice: '12',
    doubleprice: '21'
  },
  {
    brandname: 'Bulleit',
    productname: '10yr',
    style: 'bourbon',
    itemType: 'spirit',
    singleprice: '12',
    doubleprice: '21'
  },
  {
    brandname: 'Wild Turkey',
    productname: 'Longbranch',
    style: 'bourbon',
    itemType: 'spirit',
    singleprice: '12',
    doubleprice: '21'
  },
  {
    brandname: 'Eagle Rare',
    productname: '',
    style: 'bourbon',
    itemType: 'spirit',
    singleprice: '12',
    doubleprice: '21'
  },
  {
    brandname: 'Jefferson\'s',
    productname: 'Bourbon',
    style: 'bourbon',
    itemType: 'spirit',
    singleprice: '12',
    doubleprice: '21'
  },
  {
    brandname: 'Old Forester',
    productname: '1870',
    style: 'bourbon',
    itemType: 'spirit',
    singleprice: '13',
    doubleprice: '23'
  },
  {
    brandname: 'Woodford Reserve',
    productname: 'Double Oaked',
    style: 'bourbon',
    itemType: 'spirit',
    singleprice: '14',
    doubleprice: '25'
  },
  {
    brandname: 'Bernheim',
    productname: 'Original',
    style: 'bourbon',
    itemType: 'spirit',
    singleprice: '15',
    doubleprice: '26'
  },
  {
    brandname: 'Clyde May\'s',
    productname: '',
    style: 'bourbon',
    itemType: 'spirit',
    singleprice: '16',
    doubleprice: '28'
  },
  {
    brandname: 'Michter\'s',
    productname: 'US No. 1 Small Batch',
    style: 'bourbon',
    itemType: 'spirit',
    singleprice: '16',
    doubleprice: '28'
  }
]

const WINE = [
  {
    brandname: 'Tightrope',
    productname: 'Pinot Gris',
    fiveozprice: '10',
    eightozprice: '14',
    bottleprice: '42',
    region: 'B.C.',
    style: 'white',
    itemType: 'wine',
  },
  {
    brandname: 'Bonamici',
    productname: 'Rose',
    fiveozprice: '10',
    eightozprice: '14',
    bottleprice: '42',
    style: 'rose',
    itemType: 'wine',
    region: 'B.C.'
  },
  {
    brandname: 'Sandhill',
    productname: 'Pinot Blanc',
    fiveozprice: '11',
    eightozprice: '15',
    bottleprice: '45' ,
    style: 'white',
    itemType: 'wine',
    region: 'B.C.'
  },
  {
    brandname: 'Gray Monk',
    productname: 'Chardonnay',
    fiveozprice: '12',
    eightozprice: '16',
    bottleprice: '48',
    style: 'white',
    itemType: 'wine',
    region: 'B.C.'
  },
  {
    brandname: 'Kanazawa',
    productname: 'Nomu',
    fiveozprice: '12',
    eightozprice: '16',
    bottleprice: '48',
    style: 'white',
    itemType: 'wine',
    region: 'B.C.'
  },
  {
    brandname: 'Charles Smith',
    productname: 'Riesling',
    fiveozprice: '12',
    eightozprice: '16',
    bottleprice: '48',
    style: 'white',
    itemType: 'wine',
    region: 'Wash.'
  },
  {
    brandname: 'Kim Crawford',
    productname: 'Sauvignon Blanc',
    fiveozprice: '12',
    eightozprice: '16',
    bottleprice: '48',
    style: 'white',
    itemType: 'wine',
    region: 'N.Z.'
  },

  {
    brandname: 'Septima',
    productname: 'Malbec',
    fiveozprice: '10',
    eightozprice: '14',
    bottleprice: '42',
    style: 'red',
    itemType: 'wine',
    region: 'Arg.'
  },
  {
    brandname: 'Sandhill',
    productname: 'Cabernet Merlot',
    fiveozprice: '11',
    eightozprice: '15',
    bottleprice: '45',
    style: 'red',
    itemType: 'wine',
    region: 'B.C.'
  },
  {
    brandname: 'See Ya Later Ranch',
    productname: 'Pinot Noir',
    fiveozprice: '11',
    eightozprice: '15',
    bottleprice: '45',
    style: 'red',
    itemType: 'wine',
    region: 'B.C.'
  },
  {
    brandname: 'Lake Breeze',
    productname: 'Meritage',
    fiveozprice: '12',
    eightozprice: '16',
    bottleprice: '48',
    style: 'red',
    itemType: 'wine',
    region: 'B.C.'
  },
  {
    brandname: 'James Mitchell',
    productname: 'Cabernet Sauvignon',
    fiveozprice: '12',
    eightozprice: '16',
    bottleprice: '48',
    style: 'red',
    itemType: 'wine',
    region: 'Cal.'
  },
  {
    brandname: 'Kanazawa',
    productname: 'Merlot',
    fiveozprice: '12',
    eightozprice: '16',
    bottleprice: '48',
    style: 'red',
    itemType: 'wine',
    region: 'B.C.'
  },
  {
    brandname: 'Codorniu Cava',
    fiveozprice: '10',
    bottleprice: '42',
    style: 'bubbly',
    itemType: 'wine',
    region: 'Spain'
  },
  {
    brandname: 'Stellars Jay',
    fiveozprice: '11',
    bottleprice: '45',
    style: 'bubbly',
    itemType: 'wine',
    region: 'B.C.'
  }
]

const COCKTAILS = [
  {
    name: 'Gastown',
    price: '13',
    notes: 'Sons of Vancouver amaretto and chili vodka, lemon juice, egg whites, citrus zest',
    itemType: 'cocktail'
  },
  {
    name: 'Portland Spritz',
    price: '11',
    notes: 'Absolut vodka, St Germain, cassis, lemon, raspberries',
    itemType: 'cocktail'
  },
  {
    name: 'Mt Hood Warmer',
    price: '14',
    notes: 'Chai infused whiskey, Ampersand "Nocino!", Grand Marnier, orange, sugar, absinthe',
    itemType: 'cocktail'
  },
  {
    name: 'Eastburn Daquiri',
    price: '13',
    notes: 'Butter infused rum, lemon, sugar, house-made candied ginger',
    itemType: 'cocktail'
  },
  {
    name: 'Lonsdale Quay',
    price: '15',
    notes: 'Vodka, Galliano, St Germain, earl grey tea, lemon, sugar, egg white',
    itemType: 'cocktail'
  },
  {
    name: 'Charlotte\'s Tick Bite',
    price: '13',
    notes: 'Pisco, Cocalero, Cointreau, lime, salt, rimmed with spicy seasoning',
    itemType: 'cocktail'
  },
  {
    name: 'Rose City Pearing',
    price: '15',
    notes: 'McClellands Islay scotch, Lot 40 Rye, Guiseppe Carpano Vermouth, pear, lemon, sugar',
    itemType: 'cocktail'
  },
  {
    name: 'Forest Park',
    price: '14',
    notes: 'Tequila, Green Chartreuse, sugar, lime, cassis, egg white',
    itemType: 'cocktail'
  },
]

const NON_ALCOHOLIC = [
  {
    name: 'Pop',
    price: '3.50',
    notes: 'Pepsi, Diet Pepsi, Sprite, Ginger Ale, Soda, Tonic'
  },
  {
    name: 'Orange Juice',
    price: '3.50'
  },
  {
    name: 'Cranberry Juice',
    price: '3.50'
  },
  {
    name: 'Fentimans Sodas',
    price: '5',
    notes: 'Ginger beer or Burdock and Dandelion'
  },
  {
    name: 'Mocktails',
    price: '5',
    notes: 'PLACEHOLDER'
  }
]

const starters = [
  {
    name: 'Candied Bacon',
    price: '2 for 1 or $10 for 6',
    notes: 'Johnston Farm smoked bacon baked with house-spice blend',
    diet: 'gluten and dairy free',
    itemType: 'food',
    menuSection: 'start'
  },
  {
    name: 'Pickled Vegetables',
    price: '6',
    notes: 'House-pickled seasonally sourced selections',
    diet: 'vegan, gluten free',
    itemType: 'food',
    menuSection: 'start'
  },
  {
    name: 'Felix Farm Kennebec Fries',
    price: '7',
    notes: 'Double-cooked Felix Farm Kennebec potatoes, black garlic aioli, fresh herbs',
    diet: 'gluten and dairy free',
    itemType: 'food',
    menuSection: 'start'
  },
  {
    name: 'Warm Mixed Olives',
    price: '7',
    notes: 'House marinated with citrus and herbs',
    diet: 'vegan, gluten free',
    itemType: 'food',
    menuSection: 'start'
  },
  {
    name: 'Spiced Candied Nuts',
    price: '7',
    notes: 'Roasted in-house with our own spice blend',
    diet: 'vegan, gluten free',
    itemType: 'food',
    menuSection: 'start'
  },
  {
    name: 'Crispy Farmcrest Chicken Crackling',
    price: '8',
    notes: 'Fried chicken skin seasoned with a blend of lime, chilis, lemongrass, herbs',
    diet: 'gluten and dairy free',
    itemType: 'food',
    menuSection: 'start'
  },
  {
    name: 'Cashew Spread',
    price: '10',
    notes: 'With pickled vegetables, fresh herbs, fresh bread, all made in-house',
    diet: 'vegan',
    itemType: 'food',
    menuSection: 'start'
  }
]

const smallplates = [
  {
    name: 'Pacific Wild Shrimp Fritter',
    price: '10',
    notes: 'Corn, soy bean, herbs, spicy black garlic aioli',
    diet: 'dairy free',
    itemType: 'food',
    menuSection: 'omni'
  },
  {
    name: 'Roasted Organic Carrot and Brussel Sprouts Salad',
    price: '10',
    notes: 'Carrots, brussel sprouts, radish, sunflower seeds, double smoked bacon vinaigrette',
    diet: 'gluten free',
    itemType: 'food',
    menuSection: 'omni'
  },
  {
    name: 'Craft Poutine',
    price: '11',
    notes: 'Double-cooked Felix Farm Kennebec potatoes, Quebec cheese curds, house-made chicken gravy',
    diet: '',
    itemType: 'food',
    menuSection: 'omni'
  },
  {
    name: 'Pacific Humboldt Squid',
    price: '12',
    notes: 'Tomato, leeks, garlic, chilis, herbs',
    diet: 'gluten and dairy free',
    itemType: 'food',
    menuSection: 'omni'
  },
  {
    name: 'Fraser Valley Pork Belly',
    price: '13',
    notes: 'Seared pork belly, house pickles, green onions, smoked onion jam',
    diet: 'gluten and dairy free',
    itemType: 'food',
    menuSection: 'omni'
  },
  {
    name: 'Westcoast Crab Dip',
    price: '15',
    notes: 'Bacon, leeks, herbs, house bread',
    diet: '',
    itemType: 'food',
    menuSection: 'omni'
  },
  {
    name: 'Farmcrest Wings',
    price: '16',
    notes: '1lb of wings, daikon, carrots, celery, garlic chili butter sauce',
    diet: 'gluten free',
    itemType: 'food',
    menuSection: 'omni'
  },
  {
    name: 'Cache Creek Beef Tartar',
    price: '18',
    notes: 'Black garlic, celery, radish, egg yolk, shallots, toast',
    diet: 'dairy free',
    itemType: 'food',
    menuSection: 'omni'
  },

  {
    name: 'B.C. Brassica',
    price: '8',
    notes: 'Broccoli, kale, cashews, garlic, herbs',
    diet: 'vegan, gluten free, contains nuts',
    itemType: 'food',
    menuSection: 'herb'
  },
  {
    name: 'B.C. Kale Salad',
    price: '9',
    notes: 'Tomato, radish, pumpkin seeds, balsamic soy dressing',
    diet: 'vegan, gluten free',
    itemType: 'food',
    menuSection: 'herb'
  },
  {
    name: 'Cauliflower Soup',
    price: '12',
    notes: 'Cauliflower, cheddar crumble',
    diet: 'vegetarian',
    itemType: 'food',
    menuSection: 'herb'
  },
  {
    name: '"Fried Rice"',
    price: '14',
    notes: 'Mushrooms, gai lan, corn, shallots, sesame sauce',
    diet: 'vegan, gluten free',
    itemType: 'food',
    menuSection: 'herb'
  }
]

const largeplates = [
  {
    name: 'Cache Creek Dry-Aged Burger',
    price: '20',
    notes: 'Cheddar, bacon, onion, lettuce, tomato, daikon, aioli. Served with fries, or salad (+$2)',
    diet: '',
    itemType: 'food',
    menuSection: 'large'
  },
  {
    name: 'Grain Bowl',
    price: '21',
    notes: 'Organic farro, organic greens, tomato, cucumber, soy bean, tofu, cashew herb dressing',
    diet: 'vegan, contains nuts',
    itemType: 'food',
    menuSection: 'large'
  },
  {
    name: 'Farmcrest Chicken and Waffle',
    price: '23',
    notes: 'Fried chicken breast, mushroom, bacon, butter, gravy',
    diet: '',
    itemType: 'food',
    menuSection: 'large'
  },
  {
    name: 'Pacific Wild Salmon',
    price: '24',
    notes: 'Fried rice, corn, broccoli, sesame leek sauce',
    diet: 'gluten and dairy free',
    itemType: 'food',
    menuSection: 'large'
  }
]

const desserts = [
  {
    name: 'Fried Pear Pie',
    price: '8',
    notes: 'Deep fried pear hand pie, hazelnuts, spiced sugar',
    diet: 'vegetarian, contains nuts',
    itemType: 'food',
    menuSection: 'dessert'
  },
  {
    name: 'Chocolate Mousse',
    price: '9',
    notes: 'Sponge cake, whipped cream, cacao nibs',
    diet: 'vegetarian, contains nuts',
    itemType: 'food',
    menuSection: 'dessert'
  }
]

const beerdata = [
  {
    name: 'Deschutes Mirror Pond',
    pour1: '14',
    pour1price: '8.5',
    itemType: 'beer'
  },
  {
    name: 'Steamworks Pilsner',
    pour1: '20',
    pour1price: '6.5',
    itemType: 'beer'
  },
  {
    name: 'Lost Coast Tangerine Wheat Ale',
    pour1: '14',
    pour1price: '8.5',
    itemType: 'beer'
  },
  {
    name: 'Gigantic LP Stout',
    pour1: '14',
    pour1price: '8.5',
    itemType: 'beer'
  },
  {
    name: 'Barnside Pale',
    pour1: '16',
    pour1price: '7',
    itemType: 'beer'
  }
]

const fooddata = [
  {
    name: 'Poutine',
    notes: 'Fries, gravy, chunky cheese, garnished with a Fleur De Lis',
    price: 12,
    diet: 'It\'s not healthy for anyone',
    itemType: 'food',
    menuSection: 'small'
  },
  {
    name: 'Burger',
    notes: 'Bun, beef, cheese',
    price: 20,
    diet: 'straight up diabetes',
    itemType: 'food',
    menuSection: 'large'
  },
  {
    name: 'Spaghetti and Meatballs',
    notes: 'made with your moms special sauce',
    price: 22,
    diet: 'It\'sa reala goodeh!',
    itemType: 'food',
    menuSection: 'large'
  },
  {
    name: 'side salad',
    notes: 'greens, tomato, vinaigrette',
    price: 8,
    diet: 'gluten free',
    itemType: 'food',
    menuSection: 'side'
  },
  {
    name: 'fries',
    notes: 'comes with aioli',
    price: 5,
    diet: 'gluten free',
    itemType: 'food',
    menuSection: 'start'
  }
]