/*All the jsx files start with line below */
import React from "react";

/* Structure of function */
function Weather() {
	return(
        <div className="home">
            <div class="flex-container">
                <img
                    src="https://placekitten.com/300/200"
                    alt="kitten"
                />
                <h1>Home</h1>
            </div>
        </div>    
    )
}

/* always ends with */
export  default Weather;