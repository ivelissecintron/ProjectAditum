import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import "./Dashboard.css";
import Table from "../Table/Table";

class Dashboard extends Component {
    render() {
      return (
        <div className="App">
        <Table />
        <Router>
        </Router>
        </div>
      );
    }
  }
  
  export default Dashboard;
  