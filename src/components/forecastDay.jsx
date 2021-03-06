import React from 'react';


export default class ForecastDay extends React.Component {

    render(){
        const { day } = this.props;
        return(
        <div className="forecastday-container">
            <div className="image">
                <img src={day.condition.icon} alt="daily weather status" />
            </div>
            <div className="text">High: {Math.ceil(day.maxtemp_f)}</div>
            <div className="text">Low: {Math.ceil(day.mintemp_f)}</div>
            <div className="muted-text">{day.condition.text}</div>
        </div>
        )
    }
}