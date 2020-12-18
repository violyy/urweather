import React from "react";

const Weather = props => (
	<div className="weather__info">
	 {	
	 	props.city && props.country && <p className="weather__key"> Location: 
	 		<span className="weather__value"> { props.city }, { props.country }</span>
	 	</p> 
	 }
	 { 	
	 	props.temperature && <p className="weather__key"> Temperature: 
	 		<span className="weather__value"> { props.temperature }	</span>
	 	</p> 
	 }
	 { 	
	 	props.humidity && <p className="weather__key"> Humidity: 
	 		<span className="weather__value"> { props.humidity } </span>
	 	</p> 
	 }
	 { 	
	 	props.description && <p className="weather__key"> Conditions: 
	 		<span className=""> { props.description } </span>
	 </p> 
	 }
	 {
		props.minTemp &&
		<p className="weather__key">
			Min. Temp :
			<span className="weather__value">
			 {props.minTemp} 
			</span>
		</p>
	}
	{
		props.maxTemp &&<p className="weather__key">Max. Temp :<span className="weather__value">{props.maxTemp}</span></p>
	}
	 { 
	 	props.error && <p className="weather__error">{ props.error }</p>  
	 }
	
	{
		
	}
	</div>
);

export default Weather;