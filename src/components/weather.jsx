import React from 'react';

import './weather.scss';
import SunImg from '../resources/images/sun.png'; 

export default class Weather extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="weather-container">
                <div className="weather-header">location</div>
                <div className="inner-weather">
                    <span className="weather-image"><img src={SunImg}/></span>
                    <span className="temp">temp</span>
                </div>
                <div className="weather-footer"> weather status</div>
            </div>
        )
    }
}