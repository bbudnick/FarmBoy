// Created with help from
// https://www.npmjs.com/package/openweather-apis:w

const express = require("express");
var router = express.Router();
const bodyParser = require("body-parser");

router.use(
  bodyParser.urlencoded({
    extended: false,
    limit: 1024,
  })
);

router.get("/", function (req, res, next) {
  var weather = require("openweather-apis");
  weather.setLang("en");
  weather.setCityId("5746545");
  weather.setUnits("imperial");
  weather.setAPPID("5ee69f6d165fd55cf78232e0d1a348ea");

  try {
    weather.getSmartJSON(function (err, smart) {
      res.render("weather", { title: "Weather Data", forecast: smart });
    });
  } catch (error) {
    console.log("Request failed", error);
  }
});
module.exports = router;
