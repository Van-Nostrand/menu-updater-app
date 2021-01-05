const mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.Promise = Promise;

const MONGODB_CURRENT_IP = '192.168.0.105';
const MONGODB_CURRENT_PORT = '27017';
const MONGODB_DB_NAME = "restaurant";
const MONGODB_OPTIONS = {
  user: 'restauranteditor',
  pass: '12345678',
  dbName: "restaurant",
  useNewUrlParser: true,
  keepAlive: true,
  useUnifiedTopology: true,
  useCreateIndex: true
}
// const URL = `mongodb://${MONGODB_CURRENT_IP}:${MONGODB_CURRENT_PORT}/${MONGODB_DB_NAME}`;
const URL = `mongodb://localhost:${MONGODB_CURRENT_PORT}/${MONGODB_DB_NAME}`;
// const URL = `mongodb+srv://databaseManager:9Zhn7npViUeCW98@cluster0.pchwe.mongodb.net/Cluster0?retryWrites=true&w=majority`;

mongoose.connect(
  process.env.MONGODB_URI || URL,
  MONGODB_OPTIONS
);

module.exports.Beer = require('./beer');
module.exports.Food = require("./food");

// databaseManager
// 9Zhn7npViUeCW98
