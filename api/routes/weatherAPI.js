var express = require("express");
var router = express.Router();
var unirest = require("unirest");
var app = express();

app.set("view engine", "jade");

app.use(express.static("public"));

/* GET home page. */
router.get("/", function (req, res, next) {
  unirest
    .get("https://community-open-weather-map.p.rapidapi.com/forecast")
    .header(
      "X-RapidAPI-Key",
      "03d14b788emsh832efa191bf65f6p12da52jsnd28990858710"
    )
    .header("x-rapidapi-host", "community-open-weather-map.p.rapidapi.com")
    .query({
      appid: "2172797",
      q: "Ampton",
      units: "metric",
    })
    .end(function (result) {
      res.render("index", { data: result.body });
    });
});

module.exports = router;
