const mongoose = require('mongoose');
const Beer = require('./models/beer');
const Food = require("./models/food");

const beerdata = [
  {
    name: "Deschutes Mirror Pond",
    pour1: 14,
    pour1price: 8.5
  },
  {
    name: "Steamworks Pilsner",
    pour1: 20,
    pour1price: 6.5
  },
  {
    name: "Lost Coast Tangerine Wheat Ale",
    pour1: 14,
    pour1price: 8.5
  },
  {
    name: "Gigantic LP Stout",
    pour1: 14,
    pour1price: 8.5
  },
  {
    name: "Barnside Pale",
    pour1: 16,
    pour1price: 7
  }
]

const fooddata = [
  {
    name: "Poutine",
    notes: "Fries, gravy, chunky cheese, garnished with a Fleur De Lis",
    price: 12,
    diet: "It's not healthy for anyone"
  },
  {
    name: "Burger",
    notes: "Bun, beef, cheese",
    price: 20,
    diet: "straight up diabetes"
  },
  {
    name: "Spaghetti and Meatballs",
    notes: "made with your moms special sauce",
    price: 22,
    diet: "It'sa reala goodeh!"
  },
  {
    name: "side salad",
    notes: "greens, tomato, vinaigrette",
    price: 8,
    diet: "gluten free"
  },
]

function seedDB(){
  //clear the database of food and beer
  Beer.remove({}, function(err){
    if(err){
      console.log(err);
    }
    else{
      console.log("all beers are drunked");
    }
  });
  Food.remove({}, function(err){
    if(err){
      console.log(err);
    }
    else{
      console.log("all foods are eated");
    }
  });

  fooddata.forEach(function(seed){
    Food.create(seed, function(err, data){
      if(err){
        console.log(err);
      }
      else{
        console.log("added a food!");
      }
    })
  })
  //reseed
  beerdata.forEach(function(seed){
    Beer.create(seed, function(err, data){
      if(err){
        console.log(err);
      }
      else{
        console.log("added a beer!");
      }
    });
  });
}

module.exports = seedDB;