import React from 'react';
import './topSection.scss';
import Weather from './weather';

export default class TopSection extends React.Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        return(
            <div className="top-container">
                <h3 className="title">Weather Report</h3>
                < Weather { ...this.props } />
                <button className="btn btn-select-location">Select Location</button>
            </div>
        )
    }
}