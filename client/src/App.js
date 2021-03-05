import React, { Component } from "react";
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, Home, About, Contact } from "./components";

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
        <Router>
          <Navigation />
            <Switch>
              <Route path="/" exact component={() => <Home />} />
              <Route path="/about" exact component={() => <About />} />
              <Route path="/contact" exact component={() => <Contact />} />
            </Switch>
            <Footer />
        </Router>
      </div>
        <h1 className="App-title">WHAT'S UP PLANTY PEOPLE</h1>
    
        <p className="App-intro">{this.state.apiResponse}</p>
      </div>
    );
  }
}



export default App;
