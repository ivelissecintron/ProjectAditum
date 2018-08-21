import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./Dashboard.css";
import Navbar from "./Navbar";
import Footer from "./components/Footer";
import Dashboard from "./components/Dashboard";

class App extends Component {
    render() {
      return (
        <div className="App">
        <Navbar/>
        <Router>
          <Route exact path="/dashboard" component={Dashboard} />
        </Router>
        <Footer />
        </div>
      );
    }
  }
  
  export default App;
  