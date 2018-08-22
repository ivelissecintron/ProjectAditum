import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from './logo.png';
import './App.css';
import Footer from "./components/Footer";
import Login from "./components/Login";
import Dashboard from './components/Dashboard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Router>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/dashboard" component={Dashboard} />
          </Switch>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
