import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import logo from './logo.png';
import './App.css';
import Footer from "./components/Footer";
import Login from "./components/Login";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Router>
        <p className="App-intro">
        <Route exact path="/login" component={Login} />
        </p>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
