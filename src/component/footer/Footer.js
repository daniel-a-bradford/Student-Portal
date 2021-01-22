import React, { Component } from 'react';

class Footer extends Component {
    state = {
        clock:''
    }
    updateClock = () => {
        this.setState ( 
            {
                clock : new Date().toLocaleTimeString()
            }
        )
    }
    componentDidMount() {
        setInterval(this.updateClock, 1000)
    }  
    render() {
        return (
            <div className="fixed-bottom">
                <footer className="dark-blue footer-height">
                        <span> 
                        <div className="dark-blue text-gold centered">The time is {this.state.clock}. </div>
                        <div className="dark-blue text-gold">2020 A Danware Company Test </div></span>
                </footer>
            </div>
        );
    }
}

export default Footer;