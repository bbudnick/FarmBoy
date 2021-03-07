/*All the jsx files start with line below */
import React from "react";

/* Structure of function */
function NativePlants() {
	return(
        <div className="home">
            <div class="flex-container">
                <img
                    src="https://placekitten.com/500/400"
                    alt="kitten"
                />
                <h1>Native Plants</h1>
            </div>
        </div>    
    )
}

/* always ends with */
export default NativePlants;