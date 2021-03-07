import React, { Component } from "react";
import './App.css';
/* to define router from the react-router-dom installed */
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
/* where to find pages routes go to */
import { Navigation, Footer, Home, Nativeplants, Weather, Backyardhabitat, Purpose, Contactus} from "./components";

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
        <h1 className="App-title">WHAT'S UP PLANTY PEOPLE</h1>
        <Router>
          <Navigation />
          <Switch> 
            <Route path="/" exact component={() => <Home />} />
            <Route path = "/Native Plants" exact component={() => <Nativeplants />} />
            <Route path = "/Backyard Habitat" exact component={() => <Backyardhabitat />} />
            <Route path = "/Weather" exact component={() => <Weather/>} />
            <Route path = "/Purpose" exact component={() => <Purpose />} />
            <Route path = "/Contact" exact component={() => <Contactus />} />
            <Route path = "/Weather" exact component={() => <Weather/>} />
            <Route path = "/Footer" exact component={() => <Footer/>} />
          </Switch>
          <Footer />
        </Router>
        <p className="App-intro">{this.state.apiResponse}</p>
      </div>
    );
  }
}

export default App;