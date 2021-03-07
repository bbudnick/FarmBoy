/*All the jsx files start with line below */
import React from "react";

/* Structure of function */
function home() {
	return(
        <div className="home">
            <div class="flex-container">
                <img
                    src="http://placeimg.com/1800/600/nature"
                    alt="nature"
                />
                <h1>Home</h1>
            </div>
        </div>    
    );
}

/* always ends with */
export default home