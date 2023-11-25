const mongoose = require('mongoose')

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
    type: String,
    required: true
  },
  pour1price: {
    type: String,
    required: true
  },
  pour2: {
    type: String,
    required: false
  },
  pour2price: {
    type: String,
    required: false
  },
  pour3: {
    type: String,
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
})

// mongodb will automatically pluralize the schema to create a collection name
// the third argument of mongoose.model prevents mongodb from doing this
// This is so obnoxious, I should have learned SQL
const Beer = mongoose.model('Beer', beerSchema, 'beer')
module.exports = Beer