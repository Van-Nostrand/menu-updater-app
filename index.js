const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const PORT = 8000;
const axios = require("axios");
const path = require("path");


app.use(express.static(path.join(__dirname,"/public")));
app.use(express.static(path.join(__dirname,"/src")));

app.get("/", function(req,res){
  res.sendFile("index.html");
});

app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`);
});

