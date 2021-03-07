/*All the jsx files start with line below */
import React from "react";
/* need this to define Link */
import { Link, withRouter } from "react-router-dom";

/* Structure from https://www.techomoro.com/how-to-create-a-multi-page-website-with-react-in-5-minutes/ */
function Navigation(props) {
    return(
        <div className="navigation">
            <div class="container">
                <nav class="navbar navbar-expand navbar-dark bg-dark">
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
                                    props.location.pathname ==="/Nativeplants" ? "active" : ""
                                }`}
                            >
                                <Link class="nav-link" to="Nativeplants">
                                    Native Plants
                                    <span class="sr-only"></span>
                                </Link>
                            </li>
                             {/*list item Two*/}
                             <li
                                class={`nav-item ${
                                    props.location.pathname ==="/Weather" ? "active" : ""
                                }`}
                            >
                                <Link class="nav-link" to="/Weather">
                                    Weather
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    );
}

/* always ends with */
export  default withRouter(Navigation);