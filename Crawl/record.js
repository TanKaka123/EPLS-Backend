const fs = require("fs");
const cheerio = require("cheerio");
const request = require("request-promise");
const { stringify } = require("querystring");
const { title } = require("process");

const record = () => {
  request(
    "https://www.premierleague.com/stats/top/players",
    (error, response, html) => {
      if (!error && response.statusCode == 200) {
        const $ = cheerio.load(html);

        let setTitle;
        $(".statsCard").each((index, el) => {
          let data = [];
          if (index <= 2 || index == 17 || index == 13) {
            const title = $(el).find(".statsTitle").find("a").text();
            const position = $(el).find(".statsHero").find(".pos").text();
            const name = $(el).find(".statsHero").find(".statName").text();
            const clbName = $(el)
              .find(".statsHero")
              .find(".statNameSecondary")
              .text();
            const imgCLB = $(el)
              .find(".statsHero")
              .find(".js-badge-image")
              .attr("src");
            const recordNumber = $(el)
              .find(".statsHero")
              .find(".stat")
              .text()
              .replace(/\s+/g, "");

            data.push({ title, position, name, clbName, imgCLB, recordNumber });
            for (let i = 2; i <= 5; i++) {
              const position = $(el)
                .find(`.statsRow:nth-child(${i})`)
                .find(".pos")
                .text();
              const name = $(el)
                .find(`.statsRow:nth-child(${i})`)
                .find(".statName")
                .text();
              const clbName = $(el)
                .find(`.statsRow:nth-child(${i})`)
                .find(".statNameSecondary")
                .text();
              const imgCLB = $(el)
                .find(`.statsRow:nth-child(${i})`)
                .find(".js-badge-image")
                .attr("src");
              const recordNumber = $(el)
                .find(`.statsRow:nth-child(${i})`)
                .find(".stat")
                .text()
                .replace(/\s+/g, "");
              data.push({
                title,
                position,
                name,
                clbName,
                imgCLB,
                recordNumber,
              });
            }
            fs.writeFileSync(
              `./Data/Record/${title.replace(" ", "")}.json`,
              JSON.stringify(data)
            );
          }
        });
      } else {
        console.log(error);
      }
    }
  );
 
};

record();
