import React, { useState } from "react";
import Conditions from "../displays/Conditions/Conditions";

const Forecast = () => {
  let [responseObj, setResponseObj] = useState({});
  function getForecast() {
    fetch(
      "https://community-open-weather-map.p.rapidapi.com/weather?q=seattle",
      {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "03d14b788emsh832efa191bf65f6p12da52jsnd28990858710",
          "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
        },
      }
    )
      .then((response) => response.json())
      .then((response) => {
        setResponseObj(response);
      });
  }
  return (
    <div>
      <h2>Find Current Weather Conditions</h2>
      <button onClick={getForecast}>Get Forecast</button>
      <Conditions
        responseObj={responseObj}
        />
    </div>
  );
};

export default Forecast;
