const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxLength: 100,
    unique: true
  },
  notes: {
    type: String
  },
  price: {
    type: Number,
    required: true
  },
  diet: {
    type: String
  },
  itemType: {
    type: String,
    required: true
  }
},
{
  timestamps: true
});

foodSchema.methods.editFoodData = async function(data, next){
  try{
    if(data.name) this.name = data.name;
    if(data.notes) this.notes = data.notes;
    if(data.price) this.price = data.price;
    if(data.diet) this.diet = data.diet;
  }catch(err){
    return next(err);
  }
};

const Food = mongoose.model("Food", foodSchema);
module.exports = Food;