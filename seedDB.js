const mongoose = require('mongoose');
const Beer = require('./models/beer');
const Food = require("./models/food");



const starters = [
  {
    name: "Candied Bacon",
    price: "2 for 1 or $10 for 6",
    notes: "Johnston Farm smoked bacon baked with house-spice blend",
    diet: "gluten and dairy free", 
    itemType: "food",
    menuSection: "start"
  },
  {
    name: "Pickled Vegetables",
    price: "6",
    notes: "House-pickled seasonally sourced selections",
    diet: "vegan, gluten free", 
    itemType: "food",
    menuSection: "start"
  },
  {
    name: "Felix Farm Kennebec Fries",
    price: "7",
    notes: "Double-cooked Felix Farm Kennebec potatoes, black garlic aioli, fresh herbs",
    diet: "gluten and dairy free", 
    itemType: "food",
    menuSection: "start"
  },
  {
    name: "Warm Mixed Olives",
    price: "7",
    notes: "House marinated with citrus and herbs",
    diet: "vegan, gluten free", 
    itemType: "food",
    menuSection: "start"
  },
  {
    name: "Spiced Candied Nuts",
    price: "7",
    notes: "Roasted in-house with our own spice blend",
    diet: "vegan, gluten free", 
    itemType: "food",
    menuSection: "start"
  },
  {
    name: "Crispy Farmcrest Chicken Crackling",
    price: "8",
    notes: "Fried chicken skin seasoned with a blend of lime, chilis, lemongrass, herbs",
    diet: "gluten and dairy free", 
    itemType: "food",
    menuSection: "start"
  },
  {
    name: "Cashew Spread",
    price: "10",
    notes: "With pickled vegetables, fresh herbs, fresh bread, all made in-house",
    diet: "vegan", 
    itemType: "food",
    menuSection: "start"
  }
];

const smallplates = [
  {
    name: "Pacific Wild Shrimp Fritter",
    price: "10",
    notes: "Corn, soy bean, herbs, spicy black garlic aioli",
    diet: "dairy free", 
    itemType: "food",
    menuSection: "small"
  },
  {
    name: "Roasted Organic Carrot and Brussel Sprouts Salad",
    price: "10",
    notes: "Carrots, brussel sprouts, radish, sunflower seeds, double smoked bacon vinaigrette",
    diet: "gluten free",
    itemType: "food",
    menuSection: "small"
  },
  {
    name: "Craft Poutine",
    price: "11",
    notes: "Double-cooked Felix Farm Kennebec potatoes, Quebec cheese curds, house-made chicken gravy",
    diet: "", 
    itemType: "food",
    menuSection: "small"
  },
  {
    name: "Pacific Humboldt Squid",
    price: "12",
    notes: "Tomato, leeks, garlic, chilis, herbs",
    diet: "gluten and dairy free", 
    itemType: "food",
    menuSection: "small"
  },
  {
    name: "Fraser Valley Pork Belly",
    price: "13",
    notes: "Seared pork belly, house pickles, green onions, smoked onion jam",
    diet: "gluten and dairy free", 
    itemType: "food",
    menuSection: "small"
  },
  {
    name: "Westcoast Crab Dip",
    price: "15",
    notes: "Bacon, leeks, herbs, house bread",
    diet: "", 
    itemType: "food",
    menuSection: "small"
  },
  {
    name: "Farmcrest Wings",
    price: "16",
    notes: "1lb of wings, daikon, carrots, celery, garlic chili butter sauce",
    diet: "gluten free", 
    itemType: "food",
    menuSection: "small"
  },
  {
    name: "Cache Creek Beef Tartar",
    price: "18",
    notes: "Black garlic, celery, radish, egg yolk, shallots, toast",
    diet: "dairy free", 
    itemType: "food",
    menuSection: "small"
  },

  {
    name: "B.C. Brassica",
    price: "8",
    notes: "Broccoli, kale, cashews, garlic, herbs",
    diet: "vegan, gluten free, contains nuts", 
    itemType: "food",
    menuSection: "small"
  },
  {
    name: "B.C. Kale Salad",
    price: "9",
    notes: "Tomato, radish, pumpkin seeds, balsamic soy dressing",
    diet: "vegan, gluten free", 
    itemType: "food",
    menuSection: "small"
  },
  {
    name: "Cauliflower Soup",
    price: "12",
    notes: "Cauliflower, cheddar crumble",
    diet: "vegetarian",
    itemType: "food",
    menuSection: "small"
  },
  {
    name: '"Fried Rice"',
    price: "14",
    notes: "Mushrooms, gai lan, corn, shallots, sesame sauce",
    diet: "vegan, gluten free", 
    itemType: "food",
    menuSection: "small"
  }
];

const largeplates = [
  {
    name: "Cache Creek Dry-Aged Burger",
    price: "20",
    notes: "Cheddar, bacon, onion, lettuce, tomato, daikon, aioli. Served with fries, or salad (+$2)",
    diet: "", 
    itemType: "food",
    menuSection: "large"
  },
  {
    name: "Grain Bowl",
    price: "21",
    notes: "Organic farro, organic greens, tomato, cucumber, soy bean, tofu, cashew herb dressing",
    diet: "vegan, contains nuts", 
    itemType: "food",
    menuSection: "large"
  },
  {
    name: "Farmcrest Chicken and Waffle",
    price: "23",
    notes: "Fried chicken breast, mushroom, bacon, butter, gravy",
    diet: "", 
    itemType: "food",
    menuSection: "large"
  },
  {
    name: "Pacific Wild Salmon",
    price: "24",
    notes: "Fried rice, corn, broccoli, sesame leek sauce",
    diet: "gluten and dairy free", 
    itemType: "food",
    menuSection: "large"
  }  
];

const desserts = [
  {
    name: "Fried Pear Pie",
    price: "8",
    notes: "Deep fried pear hand pie, hazelnuts, spiced sugar",
    diet: "vegetarian, contains nuts", 
    itemType: "food",
    menuSection: "dessert"
  },
  {
    name: "Chocolate Mousse",
    price: "9", 
    notes: "Sponge cake, whipped cream, cacao nibs",
    diet: "vegetarian, contains nuts", 
    itemType: "food",
    menuSection: "dessert"
  }
];

const beerdata = [
  {
    name: "Deschutes Mirror Pond",
    pour1: "14",
    pour1price: "8.5",
    itemType: "beer"
  },
  {
    name: "Steamworks Pilsner",
    pour1: "20",
    pour1price: "6.5",
    itemType: "beer"
  },
  {
    name: "Lost Coast Tangerine Wheat Ale",
    pour1: "14",
    pour1price: "8.5",
    itemType: "beer"
  },
  {
    name: "Gigantic LP Stout",
    pour1: "14",
    pour1price: "8.5",
    itemType: "beer"
  },
  {
    name: "Barnside Pale",
    pour1: "16",
    pour1price: "7",
    itemType: "beer"
  }
]

const fooddata = [
  {
    name: "Poutine",
    notes: "Fries, gravy, chunky cheese, garnished with a Fleur De Lis",
    price: 12,
    diet: "It's not healthy for anyone",
    itemType: "food",
    menuSection: "small"
  },
  {
    name: "Burger",
    notes: "Bun, beef, cheese",
    price: 20,
    diet: "straight up diabetes",
    itemType: "food",
    menuSection: "large"
  },
  {
    name: "Spaghetti and Meatballs",
    notes: "made with your moms special sauce",
    price: 22,
    diet: "It'sa reala goodeh!",
    itemType: "food",
    menuSection: "large"
  },
  {
    name: "side salad",
    notes: "greens, tomato, vinaigrette",
    price: 8,
    diet: "gluten free",
    itemType: "food",
    menuSection: "side"
  },
  {
    name: "fries",
    notes: "comes with aioli",
    price: 5,
    diet: "gluten free",
    itemType: "food",
    menuSection: "start"
  }
]

async function seedDB(){
  try{
    //clear the database of food and beer
    await Beer.remove({}, function(err){
      if(err){
        console.log(err);
      }
      else{
        console.log("all beers are drunked");
      }
    });

    await Food.remove({}, function(err){
      if(err){
        console.log(err);
      }
      else{
        console.log("all foods are eated");
      }
    });

    //RESEED
    await starters.forEach(function(seed){
      Food.create(seed, function(err, data){
        if(err){
          console.log(err);
        }
        else{ 
          console.log(`added a starter`)
        }
      })
    })

    await smallplates.forEach(function(seed){
      Food.create(seed, function(err, data){
        if(err){
          console.log(err);
        }
        else{ 
          console.log(`added a small plate`)
        }
      })
    }) 

    await largeplates.forEach(function(seed){
      Food.create(seed, function(err, data){
        if(err){
          console.log(err);
        }
        else{ 
          console.log(`added a large plate`)
        }
      })
    })
    
    await desserts.forEach(function(seed){
      Food.create(seed, function(err, data){
        if(err){
          console.log(err);
        }
        else{ 
          console.log(`added a dessert`)
        }
      })
    }) 
    
    await beerdata.forEach(function(seed){
      Beer.create(seed, function(err, data){
        if(err){
          console.log(err);
        }
        else{
          console.log("added a beer!");
        }
      });
    });

  } catch(err){
    console.log(err);
  }
  
}

module.exports = seedDB;

