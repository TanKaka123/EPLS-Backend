const mainRoutes = require("./Routes/main.js");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const logger = require("morgan");
const fs = require("fs");
require("dotenv/config");

// Call in installed dependencies
const express = require("express");
// set up express app
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger("dev"));
app.use("/api/", mainRoutes);

// set up port number
const port = 3000;
// set up home route
app.get("/", (req, res) => {
  res.status(200).send("<a>Hello world, welcom nodejs, epxress, moongodb</a>");
});
app.listen(port, (request, respond) => {
  console.log(`Our server is live on ${port}. Yay!`);
});

mongoose
  .connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database connected");
  })
  .catch((error) => {
    console.log("Error connecting to database");
  });

// const request = require("request-promise");
// const cheerio = require("cheerio");

const getCLB=require('./Crawl/clb');
getCLB;

const getScores=require('./Crawl/scores');
getScores; 
  
const getManager=require('./Crawl/manager');
getManager;

const getRecord=require('./Crawl/record');
getRecord;
   

