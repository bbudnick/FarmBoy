const express = require("express");
const fetch = require("node-fetch");
var router = express.Router();
const bodyParser = require("body-parser");
const jade = require("jade");

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
  let fetchAllCoconuts = async (url) => {
    try {
      let response = await fetch(url);
      let plantData = await response.json();
      res.render("coconut", { title: "Coconut Data", plants: plantData });
    } catch (error) {
      console.log("Request failed", error);
    }
    next();
  };

  let fetchPlants = async () => {
    try {
      let response = await fetch(urlPlants, {
        method: "post",
        body: JSON.stringify(params),
        headers: { "Content-Type": "application/json" },
      });
      const json = await response.json();
      const result = fetchAllCoconuts(
        "https://trefle.io/api/v1/species/search?q=coconut&token=" + json.token
      );
      console.log(result);
    } catch (error) {
      console.log("Request failed", error);
    }
  };

  fetchAllCoconuts();
});

module.exports = router;
