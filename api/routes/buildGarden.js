const express = require("express");
const fetch = require("node-fetch");
var router = express.Router();
const bodyParser = require("body-parser");
const jade = require("jade");
const app = express();

router.use(
  bodyParser.urlencoded({
    extended: false,
    limit: 1024,
  })
);

router.get("/", function (req, res, next) {
  //parameters for the POST request
  //from the trefle website, provides a token that times out and
  //assuages the CORS error
  const params = {
    origin: "http://localhost:9000",
    token: "lMjyhDCKH5D43P-4SlgHJeM7557Ch37abJ0TBT0-gBE",
  };

  const urlPlants = "https://trefle.io/api/auth/claim";
  let fetchPNWPlants = async (url) => {
    try {
      let response = await fetch(url);
      let pnwPlantData = await response.json();
      jade.compile("garden");
      res.render("garden", {
        title: "Pacific Northwest Plant Data",
        plants: pnwPlantData,
      });
    } catch (error) {
      console.log("Request failed", error);
    }
  };

  let fetchPlants = async () => {
    try {
      let response = await fetch(urlPlants, {
        method: "post",
        body: JSON.stringify(params),
        headers: { "Content-Type": "application/json" },
      });
      const json = await response.json();
      const result = fetchPNWPlants(
        // Note: for future implementation, 73 refers to the zone that includes the Pacific Northwest
        // This should come from the user to accomodate their zone
        "https://trefle.io/api/v1/distributions/73/plants?filter[establishment]=native&token=" +
          json.token
      );
      console.log(result);
    } catch (error) {
      console.log("Request failed", error);
    }
  };

  fetchPlants();
});

module.exports = router;
