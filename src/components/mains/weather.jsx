import React , {Component } from 'react';
import ReactWeather from 'react-open-weather';
import '../../App.css';


class WeatherControl extends Component { 
    render(){
        return(
            <ReactWeather
                forecast="5days"
                apikey="89af19020e524ff514efab04c5a65320"
                type="city"
                city="Paris"
            />
        )
    }
  
}   
  
export default WeatherControl;