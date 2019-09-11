import React from 'react';

import './weather.scss';

export default class Weather extends React.Component {

    render(){
        const { location,  temp_f, text, iconURL } = this.props
        return(
            <div className="weather-container">
                <div className="weather-header">{location}</div>
                <div className="inner-weather">
                    <span className="weather-image"><img alt="weather status" src={iconURL}/></span>
                    <span className="temp">{Math.ceil(temp_f)}°</span>
                </div>
                <div className="weather-footer"> {text}</div>
            </div>
        )
    }
}