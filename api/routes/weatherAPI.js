const express = require("express");
const fetch = require("node-fetch");
var router = express.Router();

router.get("/", function (req, res, next) {
  //utilizes Open Weather to get forecast
  
  const urlWeather =
    "https://api.weather.gov/points/";

  let fetchWeather = async () => {
    try {
      let response = await fetch(urlWeather + "{45.51200538206223}," + "{-122.68376418719278}")
      const json = await response.json();
      secondFetchWeather(json.properties.forecast);
      console.log("effective")
    } catch (error) {
      console.log("Request failed", error);
    }
  };

  let secondFetchWeather = async (url) => {
    try{
      let response = await fetch(url);
      let weatherData = await response.json();
      res.send(weatherData);
    } catch (error) {
      console.log("Request failed", error);
    }
  }
  fetchWeather();
});
