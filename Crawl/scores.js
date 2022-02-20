const fs = require("fs");
const cheerio = require("cheerio");
const request = require("request-promise");

const filterMatch = (match) => {
    if (match == null) return "No game";
    if (match.includes("win")) return "w";
    if (match.includes("draw")) return "d";
    if (match.includes("loss")) return "l";
    return "No game";
  };
  
  request(
    "https://www.skysports.com/premier-league-table",
    (error, response, html) => {
      if (!error && response.statusCode == 200) {
        const $ = cheerio.load(html); // load HTML
        let scores = [];
        $(".standing-table__row").each((index, el) => {
          // lặp từng phần tử có class là job__list-item
          //   const orderNumber = $(el).find('.standing-table__cell').text()
          if (index != 0 && index <= 7) {
            const teamName = $(el)
              .find(".standing-table__cell--name-link")
              .text(); // lấy tên job, được nằm trong thẻ a < .job__list-item-title
            const PI = $(el).find(" .standing-table__cell:nth-child(3)").text();
            const W = $(el).find(" .standing-table__cell:nth-child(4)").text();
            const D = $(el).find(" .standing-table__cell:nth-child(5)").text();
            const L = $(el).find(" .standing-table__cell:nth-child(6)").text();
            const F = $(el).find(" .standing-table__cell:nth-child(7)").text();
            const A = $(el).find(" .standing-table__cell:nth-child(8)").text();
            const GD = $(el).find(" .standing-table__cell:nth-child(9)").text();
            const Pts = $(el).find(" .standing-table__cell:nth-child(10)").text();
            let match1='';
            match1 = $(el).find(" span:nth-child(2)").attr("class");
            match1 = filterMatch(match1);
            let match2=''; 
            match2 = $(el).find(" span:nth-child(3)").attr("class");
            match2 = filterMatch(match2);
            let match3=''; 
            match3 = $(el).find(" span:nth-child(4)").attr("class");
            match3 = filterMatch(match3);
            let match4=''; 
            match4 = $(el).find(" span:nth-child(5)").attr("class");
            match4 = filterMatch(match4);
            let match5=''; 
            match5 = $(el).find(" span:nth-child(6)").attr("class");
            match5 = filterMatch(match5);
            scores.push({
              teamName,
              PI,
              W,
              D,
              L,
              F,
              A,
              GD,
              Pts,
              match1,
              match2,
              match3,
              match4,
              match5,
            });
          }
        });
        fs.writeFileSync("./Data/scores.json", JSON.stringify(scores));
      } else {
        console.log(error);
      }
    }
  );

const twelveHour=43200000+60000;
setInterval(()=>{
  const handleScoresApi = require('../utils/handleScores'); 
  handleScoresApi
},twelveHour);