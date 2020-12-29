### menu updater app

This will be used to create, edit and delete menu items in a restaurant database

here's a mongoose schema for beer:

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
    type: Number,
    required: true
  },
  pour2: {
    type: Number,
    required: false
  },
  pour2price: {
    type: Number,
    required: false
  }, 
  pour3: {
    type: Number,
    required: false
  },
  pour3price: {
    type: Number,
    required: false
  }
},
{
  timestamps: true
});

beerSchema.methods.editBeerData = async function(data, next){
  try{
    if(data.name) this.name = data.name;
    if(data.tapnumber) this.tapnumber = data.tapnumber;
    if(data.pour1) this.pour1 = data.pour1;
    if(data.pour1price) this.pour1price = data.pour1price;
    if(data.pour2) this.pour2 = data.pour2;
    if(data.pour2price) this.pour2price = data.pour2price;
    if(data.pour3) this.pour3 = data.pour3;
    if(data.pour3price) this.pour3price = data.pour3price;
  }catch(err){
    return next(err);
  }
};

mongoadmin
fixie6187kida
"serverKey" : "jcZWLiFUfrKv/Dnxr/4iu4iIHhA="