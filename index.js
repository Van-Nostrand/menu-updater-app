const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const PORT = 8000;
const axios = require("axios");
const path = require("path");
const mongoose = require("mongoose");

const MONGODB_CURRENT_IP = '192.168.0.107';
const MONGODB_CURRENT_PORT = '27017';
const MONGODB_DB_NAME = "restaurant";

const MONGODB_OPTIONS = {
  // db: { native_parser: true },
  // server: { poolSize: 5 },
  // replset: { rs_name: 'myReplicaSetName' },
  user: 'restauranteditor',
  pass: '12345678',
  useNewUrlParser: true,
  keepAlive: true,
  useUnifiedTopology: true
  // promiseLibrary: global.Promise
}
const url = `mongodb://${MONGODB_CURRENT_IP}:${MONGODB_CURRENT_PORT}/${MONGODB_DB_NAME}`;

mongoose.connect(url, MONGODB_OPTIONS);

let db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  console.log("h");
});

exports.test = function(req,res) {
  console.log(res)
};

// console.log(mongoose);

app.use(express.static(path.join(__dirname,"/public")));
app.use(express.static(path.join(__dirname,"/src")));

app.get("/", function(req,res){
  res.sendFile("index.html");
});

app.post("/create-beer", function(req,res){
  let parameters = req.params;
  res.send(parameters);
});

app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`);
});

