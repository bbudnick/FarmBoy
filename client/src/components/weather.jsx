/*All the jsx files start with line below */
import React from "react";

/* Structure of function */
function Weather() {
	return(
        <div className="weather">
            <div class="flex-container">
                <img
                    src="http://placeimg.com/1900/610/nature"
                    alt="nature"
                />
                <h1>Weather</h1>
            </div>
        </div>    
    )
}

/* always ends with */
export default Weather