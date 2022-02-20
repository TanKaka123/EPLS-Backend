const mainRoutes = require("./Routes/main.js");
const clbRoutes = require("./Routes/clb.js");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const logger = require("morgan");
const ManagerRoutes=require('./Routes/manager');
const scoresRoutes = require('./Routes/scores');
const recordRoutes = require('./Routes/record');

require("dotenv/config");
const port =process.env.PORT ||  3000;

// Call in installed dependencies
const express = require("express");
// set up express app
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger("dev"));
app.use("/api/", mainRoutes);
app.use("/api/", clbRoutes);
app.use("/api/", ManagerRoutes);
app.use('/api/',scoresRoutes);
app.use('/api/',recordRoutes);
// set up port number
// set up home route
// app.get("/", (req, res) => {
//   res.status(200).send("<a>Hello World, This is Backend of project EPLS</a>");
// });
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





// // const a=require('./Data/team.json'); 
// // console.log(a[4]);

 
// const month=2629743830;

// setInterval(()=>{
//   const getCLB = require("./Crawl/clb");
//   getCLB;
// },month);

// setInterval(()=>{
//   const getManager = require("./Crawl/manager");
//   getManager;
// },month);

// // 12 tháng
// const twelveHour=43200000;
// setInterval(()=>{
//   const getScores = require("./Crawl/scores");
//   getScores;
  
//   const getRecord = require("./Crawl/record");
//   getRecord;
// },twelveHour);

// // 1 tháng


// setInterval(()=>{
//   const handleClbApi = require('./utils/handleClb');
// },month+60000);

// setInterval(()=>{
//   const handleManagerApi = require('./utils/handleManager');
// },month+60000);

// // 12 tháng
// setInterval(()=>{
//   const handleRecordApi = require('./utils/handleRecord');    
//   const handleScoresApi = require('./utils/handleScores'); 
// },twelveHour);