const mainRoutes = require("./Routes/main.js");
const clbRoutes = require("./Routes/clb.js");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const logger = require("morgan");
const ManagerRoutes = require("./Routes/manager");
const scoresRoutes = require("./Routes/scores");
const recordRoutes = require("./Routes/record");
const playerRoutes = require("./Routes/player");
const postRoutes = require("./Routes/post");
const accountRoutes = require("./Routes/account");
const cors = require("cors");

// const cors = require('cors');
const port = process.env.PORT || 3000;
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const express = require("express");
// set up express app
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger("dev"));
app.use("/api", mainRoutes);
app.use("/api/", clbRoutes);
app.use("/api/", ManagerRoutes);
app.use("/api/", scoresRoutes);
app.use("/api/", recordRoutes);
app.use("/api/", playerRoutes);
app.use("/api/", postRoutes);
app.use("/api/", accountRoutes);

app.get("/", (req, res) => {
  res.status(200).send("<a>Hello World, This is Backend of project EPLS</a>");
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
    console.log("Error connecting to database : ", error);
  });

// // const a=require('./Data/team.json');
// // console.log(a[4]);

// let month=1800;

// setInterval(()=>{
//   const getCLB = require("./Crawl/clb");
//   getCLB;
//   const getManager = require("./Crawl/manager");
//   getManager;
//   // const handleClbApi = require('./utils/handleClb');
//   // handleClbApi
//   // const handleManagerApi = require('./utils/handleManager');
//   // handleManagerApi
// },month);

// // 12 tháng
const twelveHour = 500000;
setInterval(() => {
  const getScores = require("./Crawl/scores");
  getScores;

  const handleScoresApi = require("./utils/handleScores");
  handleScoresApi;
  const getRecord = require("./Crawl/record");
  getRecord;

  const handleRecordApi = require("./utils/handleRecord");
  handleRecordApi;
}, twelveHour);

// // 1 tháng

// const haftHour=600000;
// setInterval(()=>{
//   const handleScoresApi = require('./utils/handleScores');
//   handleScoresApi
// },haftHour);
// // // 12 tháng

// const oneHour=3600000;
// setInterval(() => {
//   const handleRecordApi = require("./utils/handleRecord");
//   handleRecordApi;
// }, oneHour);
