const express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  var unirest = require("unirest");

  var req = unirest(
    "GET",
    "https://community-open-weather-map.p.rapidapi.com/weather"
  );

  req.query({
    q: "Portland",
    id: "2172797",
    units: '"metric" or "imperial"',
    mode: "xml, html",
  });

  req.headers({
    "x-rapidapi-key": "03d14b788emsh832efa191bf65f6p12da52jsnd28990858710",
    "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
    useQueryString: true,
  });

  req.end(function (res) {
    if (res.error) throw new Error(res.error);

    console.log(res.body);
  });
});

module.exports = router;
