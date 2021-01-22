import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Axios from 'axios';

class Header extends Component {
    state = {
        signin: {
            //This name has to match the Java class attribute name for Spring to call the appropriate setter.
            userID: '',
            userPassword: ''
        }
    }
    handleChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        const tempSignin = { ...this.state.signin }
        tempSignin[name] = value;
        this.setState(
            {
                signin: tempSignin
            }
        )
    }
    handleSubmit = () => {
        // This will continue as an asyncronous call, does not hang the UI waiting for data from backend.
        Axios.post('http://localhost:8080/loginStudent', this.state.signin)
            .then(response => {
                //capture student info from the user which logged in.
                const email = response.data.email;
                localStorage.setItem('loggedInUser', email);
                //Navigate to home page. 
                this.props.history.push('/home');
            }).catch(error => {
                //Display error message.
            });
    }
    signOut = () => {
        localStorage.removeItem("loggedInUser");
        this.props.history.push("/");
    }
    render() {
        let signInSignOut = (
            <form className="d-flex">
                <input onChange={this.handleChange} className="form-control me-2" name="userID" value={this.state.signin.userID} type="email" placeholder="email" aria-label="enter email" />
                <input onChange={this.handleChange} className="form-control me-2" name="userPassword" value={this.state.signin.userPassword} type="password" placeholder="password" aria-label="enter password" />
                <button onClick={this.handleSubmit} className="btn btn-outline-warning btn-width text-gold" type="button">Sign In</button>
            </form>
        );
        let navLinks = (
            <li className="nav-item active">
                <Link className="nav-link text-gold" aria-current="page" to="sign-up">Sign Up</Link>
            </li>
        );
        if (localStorage.getItem("loggedInUser")) {
            signInSignOut = (
                <form className="d-flex">
                    <button onClick={this.signOut} className="btn btn-outline-warning btn-width text-gold" type="button">Sign Out</button>
                </form>
            );
            navLinks = (
                <li className="nav-item active">
                    <Link className="nav-link text-gold" aria-current="page" to="student-life">Student Life</Link>
                </li>
            );
        }
        return (
            <div className="mb-5">
                <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark dark-blue">
                    <div className="container-fluid">
                        <Link className="navbar-brand text-gold" to="sign-up">Student Portal</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <ul className="navbar-nav me-auto mb-2 mb-md-0">
                                {navLinks}
                                <li className="nav-item">
                                    <Link className="nav-link text-gold" to="./about-us">About Us</Link>
                                </li>

                            </ul>
                            {signInSignOut}
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Header;