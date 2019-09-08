import React from 'react';

import './weather.scss';
import SunImg from '../resources/images/sun.png'; 

export default class Weather extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        const { location,  temp_f, isDay, text, iconURL } = this.props
        return(
            <div className="weather-container">
                <div className="weather-header">{location}</div>
                <div className="inner-weather">
                    <span className="weather-image"><img src={iconURL}/></span>
                    <span className="temp">{Math.ceil(temp_f)}°</span>
                </div>
                <div className="weather-footer"> {text}</div>
            </div>
        )
    }
}