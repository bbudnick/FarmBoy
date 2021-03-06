import React, { useState } from "react";

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
      <div>{JSON.stringify(responseObj)}</div>
      <button onClick={getForecast}>Get Forecast</button>
    </div>
  );
};

export default Forecast;
