const mainRoutes = require('./Routes/main.js')
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const logger = require('morgan');
const fs = require('fs');
require('dotenv/config')

// Call in installed dependencies
const express = require('express');
// set up express app
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger('dev'));
app.use('/api/', mainRoutes);

// set up port number
const port = 3000;
// set up home route
app.get('/', (req, res) => {
  res.status(200).send('<a>Hello world, welcom nodejs, epxress, moongodb</a>');
});
app.listen(port, (request, respond) => {
  console.log(`Our server is live on ${port}. Yay!`);
});

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(()=> {
    console.log('Database connected');
  })
  .catch((error)=> {
    console.log('Error connecting to database');
  });

// setInterval(()=>{console.log('hello')},100000)
const request = require('request-promise');
const cheerio = require('cheerio');
const getCLB=async()=>{
  await request('https://www.premierleague.com/clubs', (error, response, html) => {
  if(!error && response.statusCode == 200) {
    const $ = cheerio.load(html);
    let data = []
    $('.indexItem').each((index, el) => {
      const teamName = $(el).find('.nameContainer').find('.clubName').text();
      const stadiumName = $(el).find('.nameContainer').find('.stadiumName').text();
      const imgTeam = $(el).find('.indexBadge').find('.badge-image--70').attr('src');

      data.push({
        teamName, stadiumName,imgTeam
      }); // đẩy dữ liệu vào biến data
     
    });

     fs.writeFileSync('./Data/team.json', JSON.stringify(data));
  }
  else {
    console.log(error);
  }
});
}

getCLB();
const dataTeam = require('./Data/team.json');


// const cheerio = require('cheerio');

// const request = require('request-promise');

request('https://www.skysports.com/premier-league-table', (error, response, html) => {
if(!error && response.statusCode == 200) {
    const $ = cheerio.load(html); // load HTML

    $('.standing-table__row').each((index, el) => { // lặp từng phần tử có class là job__list-item
    //   const orderNumber = $(el).find('.standing-table__cell').text();
    const teamName = $(el).find('.standing-table__cell--name-link').text(); // lấy tên job, được nằm trong thẻ a < .job__list-item-title
    const PI = $(el).find(' .standing-table__cell:nth-child(3)').text();
    const W = $(el).find(' .standing-table__cell:nth-child(4)').text();
    const D = $(el).find(' .standing-table__cell:nth-child(5)').text();
    const L = $(el).find(' .standing-table__cell:nth-child(6)').text();
    const F = $(el).find(' .standing-table__cell:nth-child(7)').text();
    const A = $(el).find(' .standing-table__cell:nth-child(8)').text();
    const GD = $(el).find(' .standing-table__cell:nth-child(9)').text();
    const Pts = $(el).find(' .standing-table__cell:nth-child(10)').text();
    const game1 = $(el).find(' span:nth-child(1)').attr('class');
    const game2 = $(el).find(' span:nth-child(2)').attr('class');
    const game3 = $(el).find(' span:nth-child(3)').attr('class');
    const game4 = $(el).find(' span:nth-child(4)').attr('class');
    const game5 = $(el).find(' span:nth-child(5)').attr('class');
    if(index<=7 && index !=0)
    {
      console.log(teamName,'- PI :',PI,' -W :',W,'- D :',D,' -L :',L,'- F :',F,' -A :',A,'- GD :',GD,' -Pts :',Pts);
      
    }
    })
}
else {
    console.log(error);
}
});

//attr()