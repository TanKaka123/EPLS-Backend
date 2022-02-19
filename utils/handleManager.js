const axios = require("axios");

const handleManagerApi = () => {
  axios.get("http://localhost:3000/api/managers").then(function (response) {
    // handle success
    response.data.Manager.forEach((e) => {
      console.log(e._id);
      axios
        .delete(`http://localhost:3000/api/managers/${e._id}`)
        .then(console.log("success!!"))
        .catch(function (error) {
          console.log("error");
        });
    });
  });

  const team = require("..//Data/managers.json");
  team.forEach((e) => {
    axios  
      .post("http://localhost:3000/api/managers", {
        managerName: e.managerName,
        avtManager: e.avtManager,
        team: e.team,
        age: e.age,
        timeAtClb: e.timeAtClb
      })
      .then(function (response) {})
      .catch(function (error) {
        console.log("error");
      });
  });
};

handleManagerApi();    