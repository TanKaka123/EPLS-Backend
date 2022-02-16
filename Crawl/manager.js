const fs = require("fs");
const cheerio = require("cheerio");
const request = require("request-promise");

request(
    "https://www.bettingodds.com/thesackrace/managers/premier-league",
    (error, response, html) => {
      let infoManager = [];
      if (!error && response.statusCode == 200) {
        const $ = cheerio.load(html);
        $(".sackrace-card").each((index, el) => {
          const managerName = $(el).find(".hdr").text();
          const team = $(el).find(".v").find("a").text();
          const age = $(el)
            .find(".sackrace-card-body-dets")
            .find("div:nth-child(3)")
            .find("div:nth-child(2)")
            .text();
          const timeAtClb = $(el)
            .find(".sackrace-card-body-dets")
            .find("div:nth-child(4)")
            .find("div:nth-child(2)")
            .text();
  
          infoManager.push({ managerName, team, age, timeAtClb });
          fs.writeFileSync("./Data/manager.json", JSON.stringify(infoManager));
        });
      } else {
        console.log(error);
      }
    }
  );
  
  const listManager = require("../Data/manager.json");
  const dataManager = [];
  listManager.forEach((e) => {
    request(
      `https://www.bettingodds.com/thesackrace/managers/${e.managerName
        .replace(" ", "-")
        .toLowerCase()}`,
      (error, response, html) => {
        let nationality = [];
        if (!error && response.statusCode == 200) {
          const $ = cheerio.load(html);
          const national = $(".sackrace-profile-manager-upper")
            .find("div:nth-child(5)")
            .find("div:nth-child(2)")
            .text();
  
          nationality.push(national);
          dataManager.push({ ...e, national });
  
        } else {
          console.log(error);
        }
        nationality = { ...nationality };
        fs.writeFileSync("./Data/manager.json", JSON.stringify(dataManager));
      }
    );
  });
   