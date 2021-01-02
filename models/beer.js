const mongoose = require('mongoose');

const beerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxLength: 100,
    unique: true
  },
  tapnumber: {
    type: Number,
    required: false
  },
  pour1: {
    type: Number,
    required: true
  },
  pour1price: {
    type: String,
    required: true
  },
  pour2: {
    type: Number,
    required: false
  },
  pour2price: {
    type: String,
    required: false
  }, 
  pour3: {
    type: Number,
    required: false
  },
  pour3price: {
    type: String,
    required: false
  },
  itemType: {
    type: String,
    required: true
  }
},
{
  timestamps: true
});

const Beer = mongoose.model("Beer", beerSchema);
module.exports = Beer;