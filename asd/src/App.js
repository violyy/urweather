import React from "react";
import ReactDOM from 'react-dom';
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";
//import WeatherBody from "./components/weatherbody";

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
    minTemp:undefined,
    maxTemp:undefined,
    max:undefined,
    min:undefined,
    
    error: undefined
  }

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    
    //const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    const api_call3 = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    const data3 = await api_call3.json();

    const lat = data.coord.lat;
    const lon = data.coord.lon;
    
        
    
   console.log(data3.list[0].main.temp_min);
    console.log(lon);

      if(data.weather[0].main==="Rain"){
        document.getElementById("body").className="rain"
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
      
      document.getElementById("temp").className="visibility";
      document.getElementById("daily").className="visibility";

      
    console.log(data.main.temp_max);
    
    const api_call2 = await fetch(` https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
    const data2 =await api_call2.json();
    if (city) {
      
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        minTemp:data.main.temp_min,
        maxTemp:data.main.temp_max,
        listmin0:data3.list[0].main.temp_min,
        listmax0:data3.list[0].main.temp_max,
        listday0:data3.list[0].dt_txt,
        listmin1:data3.list[1].main.temp_min,
        listmax1:data3.list[1].main.temp_max,
        listday1:data3.list[1].dt_txt,
        listmin2:data3.list[2].main.temp_min,
        listmax2:data3.list[2].main.temp_max,
        listday2:data3.list[2].dt_txt,
        listmin3:data3.list[3].main.temp_min,
        listmax3:data3.list[3].main.temp_max,
        listday3:data3.list[3].dt_txt,
        listmin4:data3.list[4].main.temp_min,
        listmax4:data3.list[4].main.temp_max,
        listday4:data3.list[4].dt_txt,
        listmin5:data3.list[5].main.temp_min,
        listmax5:data3.list[5].main.temp_max,
        listday5:data3.list[5].dt_txt,
        listmin6:data3.list[6].main.temp_min,
        listmax6:data3.list[6].main.temp_max,
        listday6:data3.list[6].dt_txt,
        listmin7:data3.list[7].main.temp_min,
        listmax7:data3.list[7].main.temp_max,
        listday7:data3.list[7].dt_txt,
        listmin8:data3.list[8].main.temp_min,
        listmax8:data3.list[8].main.temp_max,
        listday8:data3.list[8].dt_txt,
        listmin9:data3.list[9].main.temp_min,
        listmax9:data3.list[9].main.temp_max,
        listday9:data3.list[9].dt_txt,
        listmin10:data3.list[10].main.temp_min,
        listmax10:data3.list[10].main.temp_max,
        listday10:data3.list[10].dt_txt,

        error: false
      });
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        minTemp:undefined,
        maxTemp:undefined,
        error: true
      });
    }
    
    this.setState({
      max:data2.daily[0].temp.min
    })
    console.log(data2.lat);
    console.log(data2.lon);
    console.log(this.state.max);
    if(this.state.error=true){
      {this.state.error="Kota Tidak Ditemukan"};
    }
  }
  
 
  render() {

    return (
      <div>
        <div className="header title-container">
          <Titles />
        </div>
        <div id="form" className="form">
        <Form getWeather={this.getWeather} />
          <div className="isi">
              <Weather 
              humidity={this.state.humidity}
              city={this.state.city}
              country={this.state.country}
              description={this.state.description}
              error={this.state.error}
              
            />
            <p id="temp" className="hidden">Temperature : <span id="hasil">{this.state.temperature+"°C"}</span></p>
            <Weather 
            minTemp={this.state.minTemp}
            maxTemp={this.state.maxTemp} />
          </div>
          <br />
          <div id="daily" className="hidden">
            <div className="wrapper">
              <div className="item">
                <p className="forecast">{this.state.listday0}<br />
                Min. : {this.state.listmin0}<br />
                Max. : {this.state.listmax0}
                </p>
              </div>
              <div className="item">
              <p className="forecast"> {this.state.listday1}<br />
                Min. : {this.state.listmin1}<br />
                Max. : {this.state.listmax1}
                </p>
              </div>
              <div className="item">
                <p className="forecast">{this.state.listday2}<br />
                Min. : {this.state.listmin2}<br />
                Max. : {this.state.listmax2}
                </p>
              </div>
              <div className="item">
                <p className="forecast">{this.state.listday3}<br />
                Min. : {this.state.listmin3}<br />
                Max. : {this.state.listmax3}
                </p>
              </div>
              <div className="item">
                <p className="forecast">{this.state.listday4}<br />
                Min. : {this.state.listmin4}<br />
                Max. : {this.state.listmax4}
                </p>
              </div>
              <div className="item">
                <p className="forecast">{this.state.listday5}<br />
                Min. : {this.state.listmin5}<br />
                Max. : {this.state.listmax5}
                </p>
              </div>
              <div className="item">
                <p className="forecast">{this.state.listday6}<br />
                Min. : {this.state.listmin6}<br />
                Max. : {this.state.listmax6}
                </p>
              </div>
              <div className="item">
                <p className="forecast">{this.state.listday7}<br />
                Min. : {this.state.listmin7}<br />
                Max. : {this.state.listmax7}
                </p>
              </div>
              <div className="item">
                <p className="forecast">{this.state.listday8}<br />
                Min. : {this.state.listmin8}<br />
                Max. : {this.state.listmax8}
                </p>
              </div>
              <div className="item">
                <p className="forecast">{this.state.listday9}<br />
                Min. : {this.state.listmin9}<br />
                Max. : {this.state.listmax9}
                </p>
              </div>
              <div className="item">
                <p className="forecast">{this.state.listday10}<br />
                Min. : {this.state.listmin10}<br />
                Max. : {this.state.listmax10}
                </p>
              </div>
            </div>
          </div>
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
