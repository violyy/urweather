import React from "react";
import ReactDOM from 'react-dom';
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";
//import Button from "./components/button";



const API_KEY = "ead536c1481d7308b75dea730f79353c";

class App extends React.Component {
  state = {
    temperature: undefined,
    main: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    //const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
      console.log(data.weather[0].main);
      if(data.weather[0].main==="Rain"){
        document.getElementById("form").className="rain"
      }
      else if(data.weather[0].main==="Thunderstorm"){
        document.getElementById("form").className="thunder"
      }
      else if(data.weather[0].main==="Drizzle"){
        document.getElementById("form").className="drizz"
      }
      else if(data.weather[0].main==="Haze"){
        document.getElementById("form").className="haze"
      }
      else if(data.weather[0].main==="Clouds"){
        document.getElementById("form").className="clouds"
      }
      else if(data.weather[0].main==="Clear"){
        document.getElementById("form").className="clear"
      }
      else if(data.weather[0].main==="Tornado"){
        document.getElementById("form").className="tornado"
      }
      else if(data.weather[0].main==="Snow"){
        document.getElementById("form").className="snow"
      }
      else if(data.weather[0].main==="Mist"){
        document.getElementById("form").className="mist"
      }

     
      

      if (city !== data.name){
        this.setState({
          temperature: undefined,
          city: undefined,
          country: undefined,
          humidity: undefined,
          description: undefined,
          error: "ga ada :D"
        });
    }else
    if (city) {
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      });
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please enter the values."
      });
    }
  }
  
 
  render() {
    return (
      <div>
        <div className="header title-container">
          <Titles />
        </div>
        <div id="form" className="form-container">
        <Form getWeather={this.getWeather} />
          <div className="isi">
              <Weather 
              humidity={this.state.humidity}
              city={this.state.city}
              country={this.state.country}
              description={this.state.description}
              error={this.state.error}
            />
            <p id="temp">Temperature : <span id="hasil">{this.state.temperature+"°C"}</span></p>
          </div>
          <br />
        <button onClick={this.Cel}>Celcius</button>
        <button onClick={this.Re}>Reamur</button>
        <button onClick={this.Far}>Fahrenheit</button>
        </div>
      </div>
      
    );
  }



  Far =async ()=>{
   let x=this.state.temperature;
   let y=x;
    y=(y*9/5)+32;
    ReactDOM.render(y+"°F", document.getElementById("hasil"));
    console.log(y);
  }
  Cel =async ()=>{
    let x=this.state.temperature;
    let y=x;
    ReactDOM.render(y+"°C", document.getElementById("hasil"));
    console.log(y);
   }
  
  Re =async ()=>{
    let x=this.state.temperature;
    let y=x;
     y=y*4/5;
     ReactDOM.render(y+"°R", document.getElementById("hasil"));
     console.log(y);
   }
}



export default App;
