const fs = require("fs");
const cheerio = require("cheerio");
const request = require("request-promise");
const getCLB = async () => {
    await request(
      "https://www.premierleague.com/clubs",
      (error, response, html) => {
        if (!error && response.statusCode == 200) {
          const $ = cheerio.load(html);
          let data = [];
          $(".indexItem").each((index, el) => {
            const teamName = $(el)
              .find(".nameContainer")
              .find(".clubName")
              .text();
            const stadiumName = $(el)
              .find(".nameContainer")
              .find(".stadiumName")
              .text();
            const imgTeam = $(el)
              .find(".indexBadge")
              .find(".badge-image--70")
              .attr("src");
  
            data.push({
              teamName,
              stadiumName,
              imgTeam,
            }); // đẩy dữ liệu vào biến data
          });
  
          fs.writeFileSync("./Data/team.json", JSON.stringify(data));
        } else {
          console.log(error);
        }
      }
    );
  };
  
  getCLB();