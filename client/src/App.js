import React, { Component } from "react";
import './App.css';
/* to define router from the react-router-dom installed */
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
/* where to find pages routes go to */
import {Navigation, Footer, Home, Nativeplants, Weather} from "./components";

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
        <div>
        <Router>
          <Navigation />
          <Switch> 
            <Route path = "/" exact component={() => <Home />} />
            <Route path = "/nativeplants" exact component={() => <Nativeplants />} />
            <Route path = "/weather" exact component={() => <Weather/>} />
            <Route path = "/footer" exact component={() => <Footer/>} />
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