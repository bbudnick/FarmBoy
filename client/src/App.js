import React, { Component } from "react";
import $ from "jquery";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  componentDidMount() {
    this.fetch();
  }

  fetch() {
    var context = this;

    $.ajax({
      url: "http://localhost:9000/trefleAPI",
      method: "GET",
      success: function (response) {
        context.setState({
          apiResponse: response.apiResponse,
        });
      },
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Farm boy, fetch me that?</h1>
        </header>
        <p className="App-intro">Response?</p>
        
        <p id="plantObject">{this.state.response}</p>
      </div>
    );
  }
}

export default App;
