const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxLength: 100,
    unique: true
  },
  notes: {
    type: String,
    required: false
  },
  price: {
    type: String,
    required: true
  },
  diet: {
    type: String
  },
  itemType: {
    type: String,
    required: true
  },
  menuSection: {
    type: String,
    required: true
  }
},
{
  timestamps: true
});

const Food = mongoose.model("Food", foodSchema, "food");
module.exports = Food;