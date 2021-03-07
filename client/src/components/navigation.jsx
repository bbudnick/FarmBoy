/*All the jsx files start with line below */
import React from "react";
/* need this to define Link */
import { Link, withRouter } from "react-router-dom";

/* Structure from https://www.techomoro.com/how-to-create-a-multi-page-website-with-react-in-5-minutes/ */
function Navigation(props) {
    return(
        <div className="navigation">
            <nav class="navbar navbar-expand navbar-dark bg-dark">
                <div class="container">
                    <div>
                        <ul class="navbar-nav ml-auto">
                            {/*list item One*/}
                            <li
                                class={`nav-item ${
                                    props.location.pathname === "/" ? "active" : ""
                                }`}
                            >
                                <Link class="nav-link" to="/">
                                    Home
                                    <span class="sr-only"></span>
                                </Link>
                            </li>
                            {/*list item Two*/}
                            <li
                                class={`nav-item ${
                                    props.location.pathname ==="/nativeplants" ? "active" : ""
                                }`}
                            >
                                <Link class="nav-link" to="/nativeplants">
                                    Native Plants
                                    <span class="sr-only"></span>
                                </Link>
                            </li>
                             {/*list item Two*/}
                             <li
                                class={`nav-item ${
                                    props.location.pathname ==="/backyardhabitat" ? "active" : ""
                                }`}
                            >
                                <Link class="nav-link" to="/backyardhabitat">
                                    Backyard Habitat
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

/* always ends with */
export  default withRouter(Navigation);