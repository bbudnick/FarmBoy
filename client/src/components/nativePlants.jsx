/*All the jsx files start with line below */
import React from "react";

/* Structure of function */
function NativePlants() {
	return(
        <div className="home">
            <div class="flex-container">
                <form>
                <select id="simple" name="simple">
                    <option selected>plant/bush/tree</option>
                    <option>plant</option>
                    <option >bush</option>
                    <option >tree</option>
                </select>
                <select id="simple" name="simple">
                    <option selected>deciduous/evergreen</option>
                    <option>deciduos</option>
                    <option >evergreen</option>
                </select>
                <select id="simple" name="simple">
                    <option selected>non-flowering/flowering</option>
                    <option>flowering</option>
                    <option >non-flowering</option>
                </select>
                </form>
                <img
                    src="http://placeimg.com/2010/600/nature"
                    alt="nature"
                />
                <h1>Native Plants</h1>
            </div>
        </div>    
    )
}

/* always ends with */
export default NativePlants;