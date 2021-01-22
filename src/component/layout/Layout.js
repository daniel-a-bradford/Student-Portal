import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import Header from '../header/Header';
import Signup from './../signup/Signup';
import AboutUs from './../aboutUs/AboutUs';
import ThankYou from './../thankYou/ThankYou';
import Footer from './../footer/Footer';
import Home from './../home/Home';
import StudentLife from './../home/student-life/StudentLife';

class Layout extends Component {
    render() {
        let routes = (
            <div>
                {/* if the user doesn't specify a url, go to Signup */}
                <Route exact path="/" component={Signup} />
                <Route path="/thanks" component={ThankYou} />
                <Route path="/sign-up" component={Signup} />
            </div>
        );
        if(localStorage.getItem("loggedInUser")) {
            routes = (
                <div>
                    <Route exact path="/" component={Signup} />
                    <Route path="/home" component={Home} />
                    <Route path="/student-life" component={StudentLife} />
                    <Route path="/sign-up" component={Home} />
                </div>
            );
        }
        return (
            <div>
                {/* prior to routing, Header does not have a way to navigate */}
                <Header {...this.props}/>
                <Route path="/about-us" component={AboutUs} />
                {routes}
                
                <Footer />
            </div>
        );
    }
}

export default withRouter(Layout);