import React, { useState } from "react";
import Conditions from "../components/displays/Conditions/Conditions";
import classes from './Forecast.module.css';


const Forecast = () => {
  let [city, setCity] = useState("");
  let [unit, setUnit] = useState("imperial"); //default initial temperature unit
  const uriEncodedCity = encodeURIComponent(city);
  let [error, setError] = useState(false);
  let [loading, setLoading] = useState(false);
  let [responseObj, setResponseObj] = useState({});
  function getForecast(e) {
    //keeps event state
    e.preventDefault();
    if(city.length === 0) {
        return setError(true);
    }
    //TODO call function in weatherAPI.js

  }
  return (
    <div>
      <h2>Find Current Weather Conditions</h2>
      <form onSubmit={getForecast}>
        <input
          type="text"
          placeholder="Enter City"
          maxLength="50"
          className={classes.textInput}
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <label className={classes.Radio}>
          <input
            type="radio"
            name="units"
            checked={unit === "imperial"}
            value="imperial"
            onChange={(e) => setUnit(e.target.value)}
          />
          Fahrenheit
        </label>
        <label className={classes.Radio}>
          <input
            type="radio"
            name="units"
            checked={unit === "metric"}
            value="metric"
            onChange={(e) => setUnit(e.target.value)}
          />
          Celcius
        </label>
        <button className={classes.Button} type="submit">Get Forecast</button>
      </form>
      <Conditions 
        responseObj={responseObj} 
        error={error}
        loading={loading} 
        />
    </div>
  );
};

export default Forecast;
