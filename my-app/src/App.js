import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

class App extends Component {
  render() {
    return (
      <div className="App">
      <Navbar />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Aditum</h1>
        </header>
        <p className="App-intro">
          
        </p>
        <Footer />
      </div>
    );
  }
}

export default App;
