import React from "react";

import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";
//import Button from "./components/button";


const API_KEY = "ead536c1481d7308b75dea730f79353c";

class Apps extends React.Component {

      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-5 title-container">
                  <Titles />
                </div>
                <div className="col-7 form-container">
                  <Form getWeather={this.getWeather} />
                  <Weather 
                    temperature={this.state.temperature+"°C"}
                    humidity={this.state.humidity}
                    city={this.state.city}
                    country={this.state.country}
                    description={this.state.description}
                    error={this.state.error}
                  />
                  <button onClick={this.Cel}>Celcius</button>
                  <button onClick={this.Re}>Reamur</button>
                  <button onClick={this.Far}>Farenheit</button>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>


