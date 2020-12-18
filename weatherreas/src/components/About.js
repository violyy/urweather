import React from "react";
import './about.css';
import Violy from './Violy.jpg';
import Evan from './Evan.jpg';
import Rea from './Rea.jpg';
import Leslie from './Leslie.jpg';

class About extends React.Component{
    render(){
        return (
            <div className="about">
                <h3>get to know us</h3>
                <h2>About Us</h2>
                <div className="col-12 row">
                    <div>
                        <span>
                            <img src={Rea} className="avatar" alt="null"></img>
                        </span>
                        <h4>Andrea Nataya</h4>
                        <p>00000035974</p>
                    </div>
                    <div>
                        <span>
                        <img src={Evan} className="avatar" alt="null"></img>
                        </span>
                        <h4>Evan</h4>
                        <p>00000035947</p>
                    </div>
                    <div>
                        <span>
                        <img src={Leslie} className="avatar" alt="null"></img>
                        </span>
                        <h4>Natasha Leslie</h4>
                        <p>00000041894</p>
                    </div>
                    <div>
                        <span>
                        <img src={Violy} className="avatar" alt="null"></img>
                        </span>
                        <h4>Violy Lislianty</h4>
                        <p>00000036447</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;