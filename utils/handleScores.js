const axios = require("axios");

const handleScoresdApi = () => {
  axios.get("http://localhost:3000/api/scores").then(function (response) {
    // handle success
    response.data.Scores.forEach((e) => {
      console.log(e._id);
      axios
        .delete(`http://localhost:3000/api/scores/${e._id}`)
        .then(console.log("success!!"))
        .catch(function (error) {
          console.log('error');
        });
    });
  });

  const scores = require("../Data/scores.json");
  scores.forEach((e) => {
    axios
      .post("http://localhost:3000/api/scores", {
        teamName: e.teamName,
        score: {
          PI: e.PI,
          W: e.W,
          D: e.D,
          L: e.L,
          F: e.F,
          A: e.A,
          GD: e.GD,
          Pts: e.Pts,
        },
        Last5: {
          match1: e.match1,
          match2: e.match2,
          match3: e.match3,
          match4: e.match4,
          match5: e.match5,
        },
      })
      .then(function (response) {
      })
      .catch(function (error) {
        console.log("error");
      });
  });
};

handleScoresdApi();