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

{
  /* <li class="statsHero  ">
    <div class="statInfo">
      <div class="pos">1.</div>
        <a href="/players/5178/Mohamed-Salah/overview" class="statName">Mohamed<br>Salah Ghaly</a>

        <a href="/clubs/10/Liverpool/overview" class="statNameSecondary">Liverpool</a>

      <div class="stat">
          16
      </div>
    </div>
        <div class="heroBadgeContainer">
          <div class="statsBadge">
            <div class="badge badge-image-container" data-widget="club-badge-image" data-size="25">
                <img class="badge-image badge-image--25 js-badge-image" src="https://resources.premierleague.com/premierleague/badges/25/t14.png" srcset="https://resources.premierleague.com/premierleague/badges/25/t14@x2.png 2x"  />
            </div>
          </div>
        </div>
    <div class="imgCropContainer">
      <img  data-script="pl_player-image" data-widget="player-image" data-player="p118748" data-size="110x140"  class="img statCardImg" src="//resources.premierleague.com/premierleague/photos/players/110x140/Photo-Missing.png" alt="Photo for Mohamed Salah">
    </div>
  </li> */
}
