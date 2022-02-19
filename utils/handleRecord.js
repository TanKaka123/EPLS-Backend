const axios = require("axios");

const handleRecordApi = () => {
  axios.get("http://localhost:3000/api/records").then(function (response) {
    // handle success
    response.data.Record.forEach((e) => {
      console.log(e._id);
      axios
        .delete(`http://localhost:3000/api/records/${e._id}`)
        .then(console.log("success!!"))
        .catch(function (error) {
          console.log("error");
        });
    });
  });

 
  const nameRecord = ["Assists", "Goals", "Passes", "RedCards", "Saves"];
  nameRecord.forEach((name) => {
    const team = require(`..//Data/Record/${name}.json`);
    team.forEach((e) => {
      axios
        .post("http://localhost:3000/api/records", {
          title: e.title,
          position: e.position,
          name: e.name,
          clbName: e.clbName,
          imgCLB: e.imgCLB,
          recordNumber: e.recordNumber,
        })
        .then(function (response) {})
        .catch(function (error) {
          console.log("error");
        });
    });
  });
}; 

handleRecordApi();
