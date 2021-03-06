import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: ""};
  }

  callAPI() {
    fetch("http://localhost:9000/allPlantsAPI")
    .then(res => res.text())
    .then(res => this.setState({ apiResponse: res }))
    .catch(err => err);
  }

  //for HTTP requests
  componentDidMount() {
    this.callAPI();
  }

  render() {
    return (
      <div className= "App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">WHAT'S UP PLANTY PEOPLE</h1>
        </header>
        <table>
                <thead>
                    <tr>
                        <th>Common Name</th>
                        <th>Scientific Name</th>
                        <th>Genus</th>
                        <th>Family</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.data && this.props.data.map(data => {
                        return <tr>
                            <td>{data.common_name}</td>
                            <td>{data.scientific_name}</td>
                            <td>{data.genus}</td>
                            <td>{data.family}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        <p className="App-intro">{this.state.apiResponse}</p>
      </div>
    );
  }
}

export default App;
