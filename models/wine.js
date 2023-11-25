const mongoose = require('mongoose')

const wineSchema = new mongoose.Schema({
  brandname: {
    type: String,
    required: true,
    maxLength: 50,
    unique: false,
  },
  productname: {
    type: String,
    required: true,
    maxLength: 50
  },
  region: {
    type: String
  },
  fiveozprice: {
    type: String,
  },
  eightozprice: {
    type: String,
  },
  bottleprice: {
    type: String,
  },
  style: {
    type: String,
  },
  itemType: {
    type: String,
    required: true
  }
},
{
  timestamps: true
})

// mongodb will automatically pluralize the schema to create a collection name
// the third argument of mongoose.model prevents mongodb from doing this
// This is so obnoxious, I should have learned SQL
const Wine = mongoose.model('Wine', wineSchema, 'wine')
module.exports = Wine