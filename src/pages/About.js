import React from "react";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";

const About = () => {
    return (
        <div>
           <Navigation/>
           <Logo/>
            <h1>WELCOME</h1>
            <br/>
                <p>This is my React project !</p>
                <p>Discover a country by its flag, capital and population ! </p>
                <p>You can also use the filter for each continent and the radio button to reduce the number of countries ! </p>
            <br/>
        </div>
    );
};

export default About;