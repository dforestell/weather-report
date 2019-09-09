import React from 'react';
import ForecastDay from './forecastDay';
import './bottomSection.scss';

export default class BottomSection extends React.Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        const { forecastDays } = this.props
        return(
            <div className="bottom-container">
                <div className="inner-container">
                    {forecastDays && 
                    forecastDays.map((day, index) =>{
                        return <ForecastDay day={day.day} key={index}/>
                    })}
                </div>
            </div>
        )
    }
}