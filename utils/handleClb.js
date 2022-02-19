const axios = require("axios");

const handleClbApi = () => {
  axios.get("http://localhost:3000/api/clb").then(function (response) {
    // handle success
    response.data.Clb.forEach((e) => {
      console.log(e._id);
      axios
        .delete(`http://localhost:3000/api/clb/${e._id}`)
        .then(console.log("success!!"))
        .catch(function (error) {
          console.log("error");
        });
    });
  });

  const team = require("../Data/team.json");
  team.forEach((e) => {
    axios  
      .post("http://localhost:3000/api/clb", {
        teamName: e.teamName,
        stadiumName: e.stadiumName,
        imgTeam: e.imgTeam,
      })
      .then(function (response) {})
      .catch(function (error) {
        console.log("error");
      });
  });
};

handleClbApi();    