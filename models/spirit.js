const mongoose = require('mongoose')

const spiritSchema = new mongoose.Schema({
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

  singleprice: {
    type: String,
  },
  doubleprice: {
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
const Spirit = mongoose.model('Spirit', spiritSchema, 'spirit')
module.exports = Spirit