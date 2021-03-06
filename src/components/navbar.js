import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.png';
import '../App.css';
import axios from 'axios'

class Navbar extends Component {
    constructor() {
        super()
        this.logout = this.logout.bind(this)
    }

    logout(event) {
        event.preventDefault()
        alert('Logged Out!')
        axios
            .post('/user/logout')
            
            .then(response => {
            console.log(response.data)
          if (response.status === 200) {
            this.props.updateUser({
              loggedIn: true,
              username: undefined
            })
            // update the state to redirect to login page
            this.setState({
                redirectTo: '/'               
            })
            window.location.pathname = "/";
          }
        }).catch(error => {
            console.log('Logout error')
        })
      }

    render() {
        const loggedIn = this.props.loggedIn;
        console.log('navbar render, props: ')
        console.log(this.props);
        
        return (
            <div>

                <header className="navbar App-header" id="nav-container">
                    <div className="col-4" >
                        {loggedIn ? (
                            <section className="navbar-section">
                                <Link to="/login" className="btn btn-link text-secondary" onClick={this.logout}>
                                <span className="text-secondary">Logout</span></Link>
                                <h3><span className="userName">Welcome to the Aditum Dashboard, {this.props.username}!</span></h3>
                            </section>
                        ) : (
                                <section className="navbar-section">
                                    <Link to="/login" className="btn btn-link text-secondary">
                                    <span className="text-secondary">Login</span>
				                    </Link>
                                    <Link to="/signup" className="btn btn-link">
                                    <span className="text-secondary">Sign up</span>
				                    </Link>
                                </section>
                            )}
                    </div>
                    <div className="col-4 col-mr-auto">
                    <div id="top-filler"></div>
                        <img src={logo} className="App-logo" alt="logo" />
                    </div>
                </header>
            </div>

        );

    }
}

export default Navbar