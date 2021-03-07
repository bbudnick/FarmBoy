/*All the jsx files start with line below */
import React from "react";

/* Structure of function */
function Weather() {
	return(
        <div className="weather">
            <div class="flex-container">
                <img
                    src="https://placekitten.com/400/200"
                    alt="kitten"
                />
                <h1>Weather</h1>
            </div>
        </div>    
    )
}

/* always ends with */
export  default Weather;