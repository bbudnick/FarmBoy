const express = require("express");
const fetch = require("node-fetch");
var router = express.Router();

router.get("/", function (req, res, next) {
  res.render("", { title: "Express" });
  var getTheCoconuts = {
    url:
      "https://trefle.io/api/v1/species/search?q=coconut&token=lMjyhDCKH5D43P-4SlgHJeM7557Ch37abJ0TBT0-gBE",
    method: "GET",
    timeout: 0,
  };

  $.ajax(getTheCoconuts).done(function (response) {
    console.log(response);
  });
});

module.exports = router;
