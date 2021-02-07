const mongoose = require('mongoose');

const cocktailSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxLength: 50,
    unique: true
  },
  notes: {
    type: String,
  },
  price: {
    type: String,
  }, 
  itemType: {
    type: String,
    required: true
  }
},
{
  timestamps: true
});

// mongodb will automatically pluralize the schema to create a collection name
// the third argument of mongoose.model prevents mongodb from doing this
// This is so obnoxious, I should have learned SQL
const Cocktail = mongoose.model("Cocktail", cocktailSchema, "cocktail");
module.exports = Cocktail;