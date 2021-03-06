import React, { Component } from "react";
import './App.css';
/* to define router from the react-router-dom installed */
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
/* where to find pages routes go to */
import { Navigation, Footer, Home, NativePlants, Weather, BackyardHabitat, Purpose, ContactUs} from "./components";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: ""};
  }

  callAPI() {
    fetch("http://localhost:9000/testAPI")
    .then(res => res.text())
    .then(res => this.setState({ apiResponse: res }))
    .catch(err => err);
  }

  componentDidMount() {
    this.callAPI();

  }

  render() {
    return (
      <div className= "App">    
      <div className="App">
      <h1 className="App-title">WHAT'S UP PLANTY PEOPLE</h1>
      </div>
      <div>
        <Router>
            <Navigation />
               <Switch> 
                  <Route path="/" exact component={() => <Home />} />
                  <Route path = "/Native Plants" exact component={() => <NativePlants />} />
                  <Route path = "/Backyard Habitat" exact component={() => <BackyardHabitat />} />
                  <Route path = "/Weather" exact component={() => <Weather/>} />
                  <Route path = "/Purpose" exact component={() => <Purpose />} />
                  <Route path = "/Contact" exact component={() => <ContactUs />} />
                  <Route path = "/Weather" exact component={() => <Weather/>} />
                  <Route path = "/Footer" exact component={() => <Footer/>} />
               </Switch>
               <Footer />
        </Router>
      </div>
        <p className="App-intro">{this.state.apiResponse}</p>
      </div>
    );
  }

}

export default App;