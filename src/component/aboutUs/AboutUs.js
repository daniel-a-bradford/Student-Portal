import React from 'react';
import Founder from './../../images/DanProfile.png';
import Compbuild from './../../images/ComputerBuild.JPG';

const AboutUs = () => {
    return (
        <div className="about-body">
            <div className="row">
                <h5 className="underline">What We Do</h5>
                <h1 className="headline">Danware provides amazing web applications.</h1>
                <p>We provide solutions tailored to your needs, from our home to yours.</p>
            </div>
            <div>
                <img src={Founder} width="300" height="300" alt="Photograph of Founder" />
            </div>
            <div>
                <p>Danware founder Dan Bradford.</p>
            </div>
            <div className="about-row">
                <div className="about-column">
                    <h2 className="headline">Our Mission</h2>
                    <p>We believe that trust is built through excellence. We make software solutions not only to impress and get a job, but solutions which can be trusted to make your life better.</p>
                </div>
            </div>
            <div className="about-row">
                <div className="about-column">
                    <img src={Compbuild} width="300" height="500" alt="Founder and son with homebuilt desktop computer" />
                    <h4>We're here to help.</h4>
                    <p>When you join the Danware family, we care for you like on of our own.</p>
                </div>
            </div>
            <div className="about-row">
                <h5>Since 2020, we’ve written thousands of lines of code in the pursuit of something better for our family.</h5>
            </div>
        </div>
    );
}

export default AboutUs;